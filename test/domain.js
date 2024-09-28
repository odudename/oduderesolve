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

//Retrieves from the Web3Domain
resolve.getDomain("0x8D714B10B719c65B878F2Ed1436A964E11fA3271", "MATIC").then(x => {
    console.log("EVM address to MATIC Name : " + x);
}).catch(console.error);


//Retrieves from the ENS domain
resolve.getDomain("0x0C82A14EDCF37266889e531e58cA516c10C78f18", "ENS").then(x => {
    console.log("EVM Address to ENS Domain : " + x);
}).catch(console.error);

//Retrieves from the Web3Domain

resolve.getDomain("0x6f937139EfDD7e773192E798e5aa2dFE5D4E192a", "FVM").then(x => {
    console.log("EVM address to FVM Name : " + x);
}).catch(console.error);
