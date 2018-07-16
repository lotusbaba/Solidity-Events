# Solidity-Events
A simple app that will watch for events on the testnet
This is a simple Dapp boilerplate utilising Truffle.

Note: Make sure you are running at least `solc ^0.4.0 ` and at least truffle v4.1.13

### Coding Style

This repo uses JS Standard.

### Running

The Web3 RPC location needs to be updated within `truffle.js` file.

1. Clone this repo
2. Update truffle.js with the RPC port on localhost (I have used Ganache 2 port 7545, while most may be on ganache-cli port 8545)
3. Make sure `testrpc` is running on the port specified. Then:
  - `npm install`
  - `rm build/contracts/Migrations.json` - Removes any existing Web3 RPC account or contract addresses 
  - `truffle compile` - Generates a build
  - In app.js file - Make sure the correct Web3 RPC port has been set. I have set it to 7545
  - Check from ganache-cli or Ganache 2 where the contract was deployed and update app.js with the address. I have used ganache 2 deployed address - contractInstance = AuctionContract.at('0x9365674714f2e96018be0c6fab35c4f396863298');
  - `truffle migrate` - Migrates the contract Auction.sol to the testnet
  - Open index.html in a browser and after 3 seconds see the highest bid
  - Thanks to blog post by Raghav Dua, I just turned it into a working code https://medium.com/@theMadKing/watching-solidity-events-the-right-way-d3d0a30bdc4d :)
