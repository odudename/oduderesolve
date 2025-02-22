# ODude Name Resolve
A library for interacting with ODude. It can be used to retrieve wallet addresses and IPFS hashes for decentralized websites.

Resolution supports different decentralized name across multiple chains.

## Installing ODude Name Resolve
To install the library use npm.

`npm i @odude/oduderesolve`

# Using ODude Name Resolve

Create a new project.

    `mkdir odude && cd $_
    yarn init -y
    npm i @odude/oduderesolve`
	
**Look up a domain for cryptocurrency address**

Create a new file in your project, *address.js*.

    var ODudeName = require("@odude/oduderesolve");
    
    const settings = {
      matic_rpc_url: "https://polygon-mainnet.g.alchemy.com/v2/..........",  //Get your own RPC free URL
      eth_rpc_url: "https://eth-mainnet.g.alchemy.com/v2/................", //Get your own RPC free URL
      fvm_rpc_url: "https://api.node.glif.io/rpc/v1",
      wallet_pvt_key: "private key of any empty wallet address"
    };
    
try {
  // Instantiate Odudename
  const resolve = new ODudeName(settings);

  
  //Retrieves from the ODude
resolve.getAddress("hello@web3", "ETH").then(x => {
  console.log("Wallet address of hello@web3 is : " + x);
}).catch(console.error);

  //Retrieves
  resolve.getAddress("web3", "ETH").then(x => {
    console.log("Wallet address of @web3 is : " + x);
  }).catch(console.error);
  
  

//Retrieves from the ODude
resolve.getAddress("hello@fil", "ETH").then(x => {
  console.log("Wallet address of hello@fil is : " + x);
}).catch(console.error);


//Retrieves Not minted from the ODude
resolve.getAddress("ttttttttttttttttt@web3", "ETH").then(x => {
  console.log("Wallet address of not exist name : " + x);
}).catch(console.error);


 // console.log('Tests passed successfully.');
} catch (error) {
  console.error('Tests failed:', error);
}

Execute the script

    PS D:\W3D> node address.js
Wallet address of niki.fil is : null
Wallet address of jaiiiiiiiiiiiiiiick.demo is : null
Wallet address of jack.dude is : 0x8D714B10B719c65B878F2Ed1436A964E11fA3271
Wallet address of dude is : 0xbed79816b54E75eD54BF217333342C8d271b3b6f
Wallet address of brad.eth is : 0x0C82A14EDCF37266889e531e58cA516c10C78f18


**Help us improve**

We are always looking for ways to improve how developers use and integrate our products into their applications. 
