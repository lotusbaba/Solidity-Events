window.onload = function () {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  let accounts = web3.eth.accounts; //create local variable for easy access
  let maxBid = Math.ceil (Math.random () * 1000); //the maximum bid placed by the end of the auction
  let status = document.getElementById ('status');
  abiDefinition = JSON.parse('[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"someRandomBid","type":"uint256"}],"name":"closeAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"highestBid","type":"uint256"}],"name":"AuctionClosed","type":"event"}]');
  AuctionContract = web3.eth.contract(abiDefinition);
  contractInstance = AuctionContract.at('0x9365674714f2e96018be0c6fab35c4f396863298');
  {
      /*contractInstance.AuctionClosed ().watch ( (err, response) => {  //set up listener for the AuctionClosed Event
        //once the event has been detected, take actions as desired
        status.innerHTML = 'The auction has ended! Highest Bid is ' + response.args.highestBid;
      });*/
      contractInstance.AuctionClosed().watch((error, response) => {
        if (!error) {
            console.log("Coin transfer: " + response.args.highestBid);
            status.innerHTML = 'The auction has ended! Highest Bid is ' + response.args.highestBid;
        }
    });
      setTimeout ( () => {  //simulate an auction for 3 seconds, after which the creator closes the auction
        contractInstance.closeAuction (maxBid, {from: accounts [0]});
      }, 3000);
  }
    //.catch ( (err) => {
      //status.innerHTML = 'Some error occured. I guess shit happens =(';
    //});
};
