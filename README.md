# ODudeResolve

`@odude/oduderesolve` is a JavaScript library that allows you to resolve ODude Names to wallet addresses, TokenURIs, and website URLs, as well as perform reverse lookups from wallet addresses to ODude Names. This package is useful for integrating ODude Name services into your Web3 applications.

## Features

- **Wallet Address to ODude Name**: Find the ODude Name associated with a given wallet address.
- **ODude Name to Wallet Address**: Retrieve the wallet address linked to an ODude Name.
- **ODude Name to TokenURI**: Resolve an ODude Name to its associated TokenURI.
- **ODude Name to Website URL**: Get the decentralized website URL linked to an ODude Name.

## Installation

Install the package via npm:

```sh
npm install @odude/oduderesolve
```

## Configuration

To use the package, you need to provide blockchain RPC URLs and a wallet private key. Example configuration:

```javascript
const settings = {
  matic_rpc_url: "https://polygon-mainnet.g.alchemy.com/v2/your-api-key",  // Replace with your RPC URL
  eth_rpc_url: "https://eth-mainnet.g.alchemy.com/v2/your-api-key",       // Replace with your RPC URL
  fvm_rpc_url: "https://api.node.glif.io/rpc/v1",
  wallet_pvt_key: "your-empty-wallet-private-key" // Replace with your private key
};
```

## Usage Examples

### 1. ODude Name to Wallet Address

```javascript
const ODudeName = require("@odude/oduderesolve");
const resolve = new ODudeName(settings);

resolve.getAddress("hello@web3", "ETH").then(address => {
  console.log("Wallet address of hello@web3 is: ", address);
}).catch(console.error);
```

### 2. Wallet Address to ODude Name

```javascript
resolve.getDomain("0xaa481F8d2d966e5fCC0446fA459F5d580AE5ea9f", "MATIC").then(x => {
    console.log("EVM address to MATIC Name : " + x);
}).catch(console.error);
```

### 3. ODude Name to TokenURI

```javascript
resolve.w3d_tokenURI("hello@web3").then(x => {
    console.log("hello@web3 tokenURI: " + x);
}).catch(console.error);
```

### 4. ODude Name to Website URL

```javascript
resolve.getWeb("hello@web3").then(x => {
    console.log("hello@web3 website url is: " + x);
}).catch(console.error);
```

## Test Examples

Example test scripts are available in the `test/` folder:
- `test/address.js` – Resolves ODude Names to wallet addresses
- `test/domain.js` – Resolves wallet addresses to ODude Names
- `test/hash.js` – Resolves ODude Names to TokenURIs & Website URL

Run the test scripts with:
```sh
node test/address.js
node test/domain.js
node test/hash.js
```

## Contributing

We welcome contributions! Please feel free to submit issues or pull requests on [GitHub](https://github.com/odudename/oduderesolve).

## License

This project is licensed under the MIT License.

