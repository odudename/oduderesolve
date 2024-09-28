//var w3d = require("@odude/oduderesolve");
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

  //Retrieves
  resolve.getAddress("dude", "ETH").then(x => {
    console.log("Wallet address of dude is : " + x);
  }).catch(console.error);


} catch (error) {
    console.error('Tests failed:', error);
  }