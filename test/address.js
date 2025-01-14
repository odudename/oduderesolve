// address.js
//const ODudeName = require("@odude/oduderesolve");
const ODudeName = require("../index"); // Assuming index.js is in the root of your package directory
require('dotenv').config(); // Remove this line if no environment variable is used

const settings = {
  matic_rpc_url: process.env.MATIC_RPC,
  eth_rpc_url: process.env.ETH_RPC,
  fvm_rpc_url: process.env.FVM_RPC,
  wallet_pvt_key: process.env.PVT_KEY
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
