import React from 'react';
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
import './App.css';

function Hello(props) {
  if (props.name) {
    return <h1>Hello, {props.name}!</h1>;
  } else {
    return <span>Hey, stranger</span>;
  }
}

function ClickHere (props) {
  //let time = setTimeout(function(){ appearingLink.style }, 3000);

  return(
    <div>
      <a
        className='App-link'
        id='click-here' 
        style={{ fontSize: '12px', cursor: 'pointer' }}
        href='/home/index.js'  
      >Click Here To Enter</a>
    </div>
  )
  
}

function ModalSwitch() {
  let location = useLocation();

  // This piece of state is set when one of the
  // links is clicked. The `background` state
  // is the location that we were at when one of
  // the links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show in the background, behind
  // the modal.
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<Home />} />
        <Route path="/about" children={<About />} />
        <Route path="/topics/:id" children={<Topics />} />
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/topic/:id" children={<Modal />} />}
    </div>
  );
}


function Home() {
  return (
    <div>
      {/* <Link to="/about">Visit the Gallery</Link> */}
      <div>
      <header className="App-header">
        Patient Profile Collector
        {/* <ClickHere /> */}
      </header>
      
      </div>
      {/* <ul>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to="/img/2">Tomato</Link>
        </li>
        <li>
          <Link to="/img/4">Crimson</Link>
        </li>
      </ul> */}
    </div>
  );
}

function Modal() {
  let history = useHistory();
  let { id } = useParams();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>Modal Content</h1>
        

        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">{/* Navbar Here... */}
//        <Router>
//             <div className='navigator' style={{ fontSize: '16px', cursor: 'pointer' }}>
//                 <ul style={{ listStyleType: 'none'}}>
//                     <li>
//                       <Link to="/" className='App-link'>Home</Link>
//                     </li>
//                     <li>
//                       <Link to="/about" className='App-link'>About</Link>
//                     </li>
//                     <li>
//                     < Link to="/dashboard" className='App-link'>Dashboard</Link>
//                     </li>
//                 </ul>
//           <hr />
//           {/*
//             A <Switch> looks through all its children <Route>
//             elements and renders the first one whose path
//             matches the current URL. Use a <Switch> any time
//             you have multiple routes, but you want only one
//             of them to render at a time
//           */}
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/:id" children={<Child />} >              
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div className='navigator' style={{ fontSize: '16px' }}>
        <ul style={{ listStyleType: 'none', cursor: 'pointer'}}>
          <li>
            <Link to="/" className='App-link'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='App-link'>About</Link>
          </li>
          <li>
            <Link to="/topics" className='App-link'>Topics</Link>
          </li>
          <li>
            <Link to='/dashboard' className='App-link'>Dashboard</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>

          {/* Home default path must be at bottom! not sure wwhy this is... */}
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
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

export default App;
