module.exports = async function(callback) {
  // TODO: implement your actions
  var accounts = await web3.eth.getAccounts();
  console.log(await web3.eth.sendTransaction(
    {
    to:"0x39BaBEFEF8E7981E1F070C449d923edC4c38eF17",
    from: accounts[0],
    value:  "1000000000000000000",
    data: "0xdf"
  },
  function(err, transactionHash) {
    if (!err){
      console.log(transactionHash + " success");
    } else {
        console.log(transactionHash);
    } 
  }));

  console.log(await web3.eth.sendTransaction(
    {
    to:"0xb03C4611b5A54c53edc2c98131889F53828959d4",
    from: accounts[0],
    value:  "1000000000000000000",
    data: "0xdf"
  },
  function(err, transactionHash) {
    if (!err){
      console.log(transactionHash + " success");
    } else {
        console.log(transactionHash);
    } 
  }));
  
  // invoke callback
  callback();
}
