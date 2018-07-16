var watchDapp = artifacts.require("./Auction.sol");

module.exports = function(deployer) {
  deployer.deploy(watchDapp);
};
