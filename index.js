const {Web3} = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { abi: contractABI } = require("./odudename.json");

class ODudeName {
  constructor(settings) {
    // Ensure essential settings are provided
    if (!settings || !settings.matic_rpc_url || !settings.eth_rpc_url || !settings.fvm_rpc_url || !settings.wallet_pvt_key) {
      throw new Error("Missing required settings");
    }

    // Random wallet private key
    this.privateKey = settings.wallet_pvt_key ;

    // Polygon RPC URL
    this.matic_rpc_url = settings.matic_rpc_url;

    // Ethereum RPC URL
    this.eth_rpc_url = settings.eth_rpc_url;

    // FVM RPC URL
    this.fvm_rpc_url = settings.fvm_rpc_url;
  }

getContract(name)
{
  var domain_provider = this.w3d_find_provider(name);
  if (domain_provider == "fvm") {
  // FVM Smart Contract
  this.fvm_SmartContractAddress = "0x732dC8d0c7388c3E60e70776D0a1e663166cfCBD";
  this.fvm_SmartContractABI = contractABI;
  this.fvm_provider = new HDWalletProvider(this.privateKey, this.fvm_rpc_url);
  this.fvm_web3 = new Web3(this.fvm_provider);
  return this.fvm_myContract = new this.fvm_web3.eth.Contract(this.fvm_SmartContractABI, this.fvm_SmartContractAddress);
  }
  else
  {
 // Ethereum Smart Contract
 this.matic_SmartContractAddress = "0x3325229F15fe0Cee4148C1e395b080C8A51353Dd";
 this.matic_SmartContractABI = contractABI;
 this.matic_provider = new HDWalletProvider(this.privateKey, this.matic_rpc_url);
 this.matic_web3 = new Web3(this.matic_provider);
 return this.matic_myContract = new this.matic_web3.eth.Contract(this.matic_SmartContractABI, this.matic_SmartContractAddress);

  }
     
}

  // Get the address of the owner of a domain
  getAddress(name, curr) {
    return this.getOwner(name);
  }

// Get the domain of an address
  getDomain(addr, provider) {
    return this.w3d_web3_getReverse(addr,provider);
  }

// Get the website of a domain
  getWeb(name) {
    return this.w3d_web3_website(name);
  }

  //Get on-chain wallet address of a domain based on provider
  w3d_web3_getReverse = async (addr,provider) => {
    let contract;
    try {
      if(provider.toLowerCase() == 'fvm')
      {
        contract = this.getContract('fvm');
        var value = await contract.methods.getReverse(addr).call();
      }
      else
      {
        contract = this.getContract('matic');
      var value = await contract.methods.getReverse(addr).call();
      }
      return value;
    } catch (error) {
      return null;
    }
  };



//Get website address of a domain
  w3d_web3_website = async (name) => {

    try {
      let contract = this.getContract(name);
  
        var id = await contract.methods.getID(name).call();
        var tokenURI = await contract.methods.tokenURI(id).call();
   

      if (this.w3d_isValidUrl(tokenURI)) {
        var web_url = await this.w3d_fetch_from_json(tokenURI);
        if (tokenURI != null) {
          if(this.w3d_isValidUrl(web_url))
          {
            return web_url;
          }
          else
          {
          return "https://gateway.ipfs.io/ipfs/" + web_url;
          }
        }
        else {
          return null;
        }
      }
      else {
        if (tokenURI != null) {
          return "https://ipfs.io/ipfs/" + tokenURI;
        }
        else {
          return null;
        }
      }


    } catch (error) {
      return null;
    }

  }

//Get tokenURI of a domain
  w3d_tokenURI = async (name) => {

    try {
      let contract = this.getContract(name);

      var id = await contract.methods.getID(name).call();
      var tokenURI = await contract.methods.tokenURI(id).call();
  
      if (this.w3d_isValidUrl(tokenURI)) {
        return tokenURI;
      }
      else {
        return null;
      }


    } catch (error) {
      return null;
    }

  }

  

//Split domain name into subdomain and primary domain
  splitDomain(title, part) {
    //eg.hello@web3
    if (part === "subdomain") {
      let subdomain = title.split("@", 2);
      if (subdomain[0]) {
        return subdomain[0]; //hello
      }
    } else if (part === "primary") {
      let subdomain = title.split("@", 3);
      if (subdomain[1]) {
        if (subdomain[2] !== undefined) {
          return subdomain[2];
        } else {
          return subdomain[1];
        }
      } else {
        return subdomain[0];
      }
    } else {
      return title;
    }
  }

  //Check if a string is a valid URL
  w3d_isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }

//Fetch data from a JSON file
  async w3d_fetch_from_json(url) {
    var axios = require('axios');
    try {
      let response = await axios.get(url);
      let json_data = await response.data;
      var web_url = json_data.records["50"].value;
      var web3_url = '';
      if (json_data.records.hasOwnProperty('51')) {

        var web3_url = json_data.records["51"].value;
      }
      if (web3_url != '') {
        return web3_url;
      }
      else {
        return web_url;

      }

    }
    catch (error) {
      return null;
    }

  }

  //Find the provider of a domain
  w3d_find_provider(name) {

    var fvm = ["fil", "fvm", "ipfs", "filecoin"];
    var extension = this.splitDomain(name.toLowerCase(), "primary");
    if (extension === "eth") {
      return "eth";
    }else if (fvm.includes(extension)) {
      return "fvm";
    } else {
      return "web3domain";
    }
  }


  //Get the owner of a domain
  getOwner = async (name) => {

    try {
      let contract = this.getContract(name);
      var get_id_from_name = await contract.methods.getID(name).call();
      var value = await contract.methods.getOwner(get_id_from_name).call();
      return value;
    } catch (error) {
      return null;
    }
  };

  //Get the total number of domains owned by an address
  geTotalDomain = async (addr,provider) => {
    try {
      let contract = this.getContract(provider);
      
        var total = await contract.methods.balanceOf(addr).call();
  
    return total;
  } catch (error) {
    return null;
  }
};

//Get the list of domains owned by an address
getDomainList = async (addr,provider) => {
  try {
    let contract = this.getContract(provider);
  var count=  await this.geTotalDomain(addr,provider);
  //console.log(count);
  let activities = [];
  for (let i = 0; i < count; i++) {
    console.log(i);

  var id = await contract.methods.tokenOfOwnerByIndex(addr,i).call();
  
 // console.log(id);
 var title = await this.getDomainNameById(id,provider);
 activities.push([id,title]);
//console.log(id + ' --- '+ title);
  }
  console.table(activities);
  return activities;
} catch (error) {
  return null;
}
};

//Get the domain name of an ID
getDomainNameById = async (id,provider) => {
  try {
    let contract = this.getContract(provider);

var domain_name = await contract.methods.titleOf(id).call();
return domain_name;

  }
catch (error) {
  return null;
}
};

}

module.exports = ODudeName;
