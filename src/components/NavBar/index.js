import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import '../../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Web3 from 'web3';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import { MenuItem, Menu, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Onboard from 'bnc-onboard';


let web3

const onboard = Onboard({
    dappId: '8e84cd42-1282-4e65-bcd0-da4f7b6ad7a4',
    networkId: 5777, // 4 = Rinkeby, 3 = Ropsten, 1 = Main
    darkMode: true,
    subscriptions: {
        wallet: wallet => {
            web3 = new Web3(wallet.provider)
            console.log(`${wallet.name} is now connected!`)
        },
        balance: balance => {

            console.log(balance)
        }
    }
})

const currentState = onboard.getState()
console.log(currentState)

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


async function connectWallet() {
  await onboard.walletSelect();
  await onboard.walletCheck(); 
}

function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState('');
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState('');

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = (e) => {
    setMobileMoreAnchorEl(e);
  };

  const handleMenuClose = (e) => {
    setAnchorEl(e);
    handleMobileMenuClose(e);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar id='back-to-top-anchor'>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            P C P
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Enter tx or name here" 
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div> <Button variant='contained' onClick={connectWallet} style={{ marginLeft: '25px' }}>Connect Wallet</Button></div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

function NavBar () {
    return(
      <div>
        <PrimarySearchAppBar />
        <div>


          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/dashboard' component={Dashboard}/>
              <Route path='/topics' component={Topics}/>
                            
          </Switch>

          {/* <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop> */}
        </div>
        
      </div>
    );   
}

function Home() {
    return (
      <div>
        {/* Home page */}
        <div>
        <header className="App-header">
          Patient Profile Collector
          {/* <ClickHere /> */}
        </header>
        
        </div>
        
      </div>
    );
  }
  

function Topics() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/covid-19`}>
              Covid-19
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/general-practice`}>
              General Practice
            </Link>
          </li>
        </ul>
  
        {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    );
  }
  
  function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }
  
  function Child () {
    let { id } = useParams();
  
    // Add the Topic content here using id to fetch...
    return (
      <div>
        {id}
      </div>
    )
  }
  
  // You can think of these components as "pages" in your app.
  // Move out later...
  
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }

export default NavBar;

// function Modal() {
//     let history = useHistory();
//     let { id } = useParams();
  
//     let back = e => {
//       e.stopPropagation();
//       history.goBack();
//     };
  
//     return (
//       <div
//         onClick={back}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           background: "rgba(0, 0, 0, 0.15)"
//         }}
//       >
//         <div
//           className="modal"
//           style={{
//             position: "absolute",
//             background: "#fff",
//             top: 25,
//             left: "10%",
//             right: "10%",
//             padding: 15,
//             border: "2px solid #444"
//           }}
//         >
//           <h1>Modal Content</h1>
          
  
//           <button type="button" onClick={back}>
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   }

  

// function Hello(props) {
//   if (props.name) {
//     return <h1>Hello, {props.name}!</h1>;
//   } else {
//     return <span>Hey, stranger</span>;
//   }
// }

// function ClickHere (props) {
//   //let time = setTimeout(function(){ appearingLink.style }, 3000);

//   return(
//     <div>
//       <a
//         className='App-link'
//         id='click-here' 
//         style={{ fontSize: '12px', cursor: 'pointer' }}
//         href='/home/index.js'  
//       >Click Here To Enter</a>
//     </div>
//   )
  
// }

// function ModalSwitch() {
//   let location = useLocation();

//   // This piece of state is set when one of the
//   // links is clicked. The `background` state
//   // is the location that we were at when one of
//   // the links was clicked. If it's there,
//   // use it as the location for the <Switch> so
//   // we show in the background, behind
//   // the modal.
//   let background = location.state && location.state.background;

//   return (
//     <div>
//       <Switch location={background || location}>
//         <Route exact path="/" children={<Home />} />
//         <Route path="/about" children={<About />} />
//         <Route path="/topics/:id" children={<Topics />} />
//       </Switch>

//       {/* Show the modal when a background page is set */}
//       {background && <Route path="/topic/:id" children={<Modal />} />}
//     </div>
//   );
// }
  