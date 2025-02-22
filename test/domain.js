//var w3d = require("@odude/oduderesolve");
const ODudeName = require("../index"); // Assuming index.js is in the root of your package directory
require('dotenv').config(); // Remove this line if no environment variable is used


const settings = {
    matic_rpc_url: process.env.MATIC_RPC,
    eth_rpc_url: process.env.ETH_RPC,
    fvm_rpc_url: process.env.FVM_RPC,
    wallet_pvt_key: process.env.PVT_KEY
    
};

const resolve = new ODudeName(settings);


//Retrieves domain from wallet address from Polygon
resolve.getDomain("0xaa481F8d2d966e5fCC0446fA459F5d580AE5ea9f", "MATIC").then(x => {
    console.log("EVM address to MATIC Name : " + x);
}).catch(console.error);


//Retrieves domain from wallet address from Filecoin
resolve.getDomain("0x83b0637ba4701aF501079A19B2073977d26cA77E", "FVM").then(x => {
    console.log("EVM address to FVM Name : " + x);
}).catch(console.error);
