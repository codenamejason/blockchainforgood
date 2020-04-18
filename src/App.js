import React from 'react';
import './App.css';

let appearingLink = document.getElementById('click-here')



function ClickHere (props) {
  //let time = setTimeout(function(){ appearingLink.style }, 3000);
  

  return(
    <div>
      <a
        className='App-link'
        id='click-here' 
        style={{ fontSize: '12px', cursor: 'pointer' }}
        href='/'  
      >Click Here To Enter</a>
    </div>
  )
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Patient Profile Collector
        <ClickHere />
      </header>
      
    </div>
  );
}

export default App;
