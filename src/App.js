import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import icon1 from '../src/assets/images/icon1.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <img src={icon1} className="App-logo" alt="logo" />
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

export default App;
