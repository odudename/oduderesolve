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
