import logo from './logo.svg';
import tes from './tes.png';
import './App.css';
import Home from './component/page/home';
import Region from './component/page/region'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={tes} className="App-logo" alt="logo" />
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
       
      </header> */}
       {/* <Home></Home> */}
       <Region></Region>
    </div>
  );
}

export default App;
