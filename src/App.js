import React from 'react';
import NavBar from './components/NavBar'
//import Onboard from 'bnc-onboard';
import Web3 from 'web3';

// "Eth.providers.givenProvider" will be set if in an Ethereum supported browser.
//var Eth = require('web3-eth');
//var eth = new Eth(Eth.givenProvider || 'ws://127.0.0.1:7545');
// or using the web3 umbrella package
var web3 = new Web3(Web3.givenProvider || 'ws://127.0.0.1:7545');

//const apiKeyBlockNative = '8e84cd42-1282-4e65-bcd0-da4f7b6ad7a4';
//process.env.BLOCK_NATIVE_API_KEY;
//console.log(apiKeyBlockNative)

let networkId = 5777
let accounts
let address

// Main App Component
function App() {
  const getBalance = async function() {
    // const onboard = Onboard({
    //   dappId: apiKeyBlockNative,
    //   networkId: networkId,
    //   subscriptions: {
    //     wallet: wallet => {
    //       web3 = new Web3(wallet.provider)
    //     }
    //   }
    // })
  
    accounts = await web3.eth.getAccounts();
    address = accounts[0];
    console.log(address)
    return address
    
  }
  
  getBalance()

  return (
    <div>
      <NavBar />
      

    </div>
  );
}

export default App;
