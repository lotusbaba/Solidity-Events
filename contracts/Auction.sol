contract Auction {
  event AuctionClosed (uint highestBid);  //declare eventto be triggered when Auction closes
  address public creator;
  function Auction () { //Auction Constructor to register the creator of the contract
    creator = msg.sender;
  }
  function closeAuction (uint someRandomBid) {
    if (msg.sender == creator) {  //make sure that auction is being ended by the creator themselves
      AuctionClosed (someRandomBid);  //trigger the event to notify the listeneres that the auction has ended
      return;
    }
    throw;
  }
}
