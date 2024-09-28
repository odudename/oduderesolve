//var w3d = require("@web3yak/web3domain");
const ODudeName = require("../index"); // Assuming index.js is in the root of your package directory
require('dotenv').config() //Remove this line if no environment variable is used


const settings = {
    matic_rpc_url: process.env.MATIC_RPC,
    eth_rpc_url: process.env.ETH_RPC,
    fvm_rpc_url: process.env.FVM_RPC,
    wallet_pvt_key: process.env.PVT_KEY
};

const resolve = new ODudeName(settings);

//Retrieve website address from Web3Domain
resolve.getWeb("jack.dude").then(x => {
    console.log("jack.dude website url is: " + x);
}).catch(console.error);


//Retrieve website address from ETH
resolve.getWeb("vitalik.eth").then(x => {
    console.log("vitalik.eth website url is: " + x);
}).catch(console.error);

//Get tokenURI for web3domain name only
resolve.w3d_tokenURI("jack.dude").then(x => {
    console.log("jack.dude tokenURI: " + x);
}).catch(console.error);


//Retrieve website address from Web3Domain
//https://gateway.ipfs.io/ipfs/bafkreidcqmcrgmfj6fiplf73mxdqid7rmndqtsyfii72dssdhlie3vwqzq
resolve.getWeb("niki.fil").then(x => {
    console.log("niki.fil website url is: " + x);
}).catch(console.error);


//Get tokenURI for web3domain name only
//https://web3yak.com/temp/niki.fil.json
resolve.w3d_tokenURI("niki.fil").then(x => {
    console.log("niki.fil tokenURI: " + x);
}).catch(console.error);