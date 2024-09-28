# ODude Name Resolve
A library for interacting with ODude. It can be used to retrieve wallet addresses and IPFS hashes for decentralized websites.

Resolution supports different decentralized name across multiple chains.

*Supports all major Web3 Domain provider.*

**Ethereum Name Service (ENS)**

**ODudeName**

## Installing ODude Name Resolve
To install the library use npm.

`npm i @odude/odudename`

# Using ODude Name Resolve

Create a new project.

    `mkdir odude && cd $_
    yarn init -y
    npm i @odude/odudename`
	
**Look up a domain for cryptocurrency address**

Create a new file in your project, *address.js*.

    var ODudeName = require("@odude/odudename");
    
    const settings = {
      matic_rpc_url: "https://polygon-mainnet.g.alchemy.com/v2/..........",  //Get your own RPC free URL
      eth_rpc_url: "https://eth-mainnet.g.alchemy.com/v2/................", //Get your own RPC free URL
      fvm_rpc_url: "https://api.node.glif.io/rpc/v1"
    };
    
try {
  // Instantiate Odudename
  const resolve = new ODudeName(settings);

  
  //Retrieves from the ODude
resolve.getAddress("jack.dude", "ETH").then(x => {
  console.log("Wallet address of jack.dude is : " + x);
}).catch(console.error);

  //Retrieves
  resolve.getAddress("dude", "ETH").then(x => {
    console.log("Wallet address of dude is : " + x);
  }).catch(console.error);
  
  

//Retrieves from the ODude
resolve.getAddress("niki.fil", "ETH").then(x => {
  console.log("Wallet address of niki.fil is : " + x);
}).catch(console.error);



//Retrieves from the ENS domain
resolve.getAddress("brad.eth", "ETH").then(x => {
  console.log("Wallet address of brad.eth is : " + x);
}).catch(console.error);



//Retrieves Not minted from the ODude
resolve.getAddress("jaiiiiiiiiiiiick.demo", "ETH").then(x => {
  console.log("Wallet address of jaiiiiiiiiiiiiiiick.demo is : " + x);
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
