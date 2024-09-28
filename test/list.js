//var w3d = require("@web3yak/web3domain");
const ODudeName = require("../index"); // Assuming index.js is in the root of your package directory
require('dotenv').config(); // Remove this line if no environment variable is used


const settings = {
    matic_rpc_url: process.env.MATIC_RPC,
    eth_rpc_url: process.env.ETH_RPC,
    fvm_rpc_url: process.env.FVM_RPC,
    wallet_pvt_key: process.env.PVT_KEY
};

const resolve = new ODudeName(settings);

resolve.geTotalDomain("0x8D714B10B719c65B878F2Ed1436A964E11fA3271",'matic').then(x => {
    console.log("Total Number of Domain on Matic: " + x);
}).catch(console.error);

                           
resolve.getDomainList("0x8D714B10B719c65B878F2Ed1436A964E11fA3271",'fvm').then(x => {
    console.log("Total Array of current FVM address  : " + x);
}).catch(console.error);

resolve.getDomainNameById('1','matic').then(x => {
    console.log("Domain Name of ID 1 on polygon network: " + x);
}).catch(console.error);

resolve.getDomainNameById('1','fvm').then(x => {
    console.log("Domain Name of ID 1 on filecoin network: " + x);
}).catch(console.error);