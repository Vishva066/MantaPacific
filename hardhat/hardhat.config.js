
require('@nomiclabs/hardhat-ethers');
const { privatekey } = require('./secrets.json');

module.exports = {
  solidity: "0.8.6",
  defaultNetwork: "manta",
  networks: {
    manta: {
      url: "https://pacific-rpc.sepolia-testnet.manta.network/http",  // Insert your RPC URL Here
      chainId: 3441006, //Insert your ChainID Here
      accounts: [privatekey]
    }
  },
}