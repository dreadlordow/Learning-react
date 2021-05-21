import logo from './logo.svg';
import Code from './Code'
import Counter from './Counter'
import Input from './Input'
import getData from './services/index.js'
import './App.css';
import React from 'react';
import AuthContext from './context';

class ClassApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hide: false,
      data: '',
      authenticate: false,
    }
    this.counters = [1, 2, 3, 4]
  }

  hideCounter = () => {
    this.setState({
      hide: !this.state.hide,
    })
  }

  renderCounters = () => {
    return this.counters.map((c, index) => {
      return (
        <Counter key={index} counter={c} />
      )
    })
  }

  fetchData = async () => {
    const data = await getData()
    console.log('fetched')
    this.setState({
      data: data
    })
  }

  changeAuth = () => {
    this.setState({
      authenticate: !this.state.authen
    })
  }
  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.hide ? null : (
            <div>
              {this.renderCounters()}
            </div>
          )}
          <button onClick={this.hideCounter}>Toggle Counters</button>
          <AuthContext.Provider value={this.state.authenticate}>
            <Input name={this.state.data.name} />
          </AuthContext.Provider>
          <button onClick={this.changeAuth}>AuthChange</button>
          <p>{this.state.data.name}</p>
          <button onClick={this.fetchData}>Get data</button>
        </header>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit src/App.js and save to reload.
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

export default ClassApp;

