import logo from './logo.svg';
import Code from './Code'
import './App.css';
import AuthContext from './context'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit src/App.js and save to reload.
        </p>
        <div>
        {props.names.map(name => <p>{name}</p>)}
        </div>
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

