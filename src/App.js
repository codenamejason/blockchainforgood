import React from 'react';
import NavBar from './components/NavBar'
import Web3 from 'web3';
import {
  BrowserRouter as Router, useRouteMatch
} from "react-router-dom";
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Connector from './data/connector'
// BlockNative onboarding
//import Onboard from 'bnc-onboard';
// "Eth.providers.givenProvider" will be set if in an Ethereum supported browser.
//var Eth = require('web3-eth');
//var eth = new Eth(Eth.givenProvider || 'ws://127.0.0.1:7545');
// or using the web3 umbrella package
var web3 = new Web3(Web3.givenProvider || 'ws://127.0.0.1:8545');
//
//const apiKeyBlockNative = '8e84cd42-1282-4e65-bcd0-da4f7b6ad7a4';
//process.env.BLOCK_NATIVE_API_KEY;
//console.log(apiKeyBlockNative)

let networkId = 5777
let accounts
let address
let balance

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    //width: drawerWidth,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    background: '#535454',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const getBalance = async function() {
  accounts = await web3.eth.getAccounts();
  address = accounts[0];
  console.log(address)
  return address  
}

// Main App Component
function App() {
  const classes = useStyles()  
  //balance = getBalance().then((b) => console.log(b))

  return (
    <Router>
      <div>
        <NavBar />
        <Home />
        <iframe
          src="https://quick.1up.health/connect/4748?client_id=40227547fba945f4a157876a4cbf32be&access_token=r2GkGCyzqAKurxFhlK8KuZWNHXltaIdl&state={florida}"
          height="500"
          width="100%"
        />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      {/* Home page */}
      <div>
      <main>
          <Container>
            <h2 style={{ textAlign: 'center' }}>Patient Collector Portal</h2>
          </Container>         
        </main>
      </div>      
    </div>
  );
}

export default App;
