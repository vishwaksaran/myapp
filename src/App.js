//import logo from './logo.svg';
import './App.css';
import Press from './Press.js';
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import {React,useState} from 'react';
import InputMain from './InputMain';


const Appiu = () =>{ 
  const [B, setB] = useState("PRESS")
    return(<div>
      
      <InputMain setB ={setB}>
        
           
      </InputMain>
     
       {B === "name" ? (<Press g={B}></Press>) : (<Press g="BYE"/>) } 
    </div>);
}


export default Appiu;

