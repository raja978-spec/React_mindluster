import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
    state={
      nameList:[
        {id:1,name:"raja"},
        {id:2,name:"ra"},
        {id:3,name:"r"},
      ]
    
  }
  render(){
  return (
    <>
    <div className="App">
    <Navbar name={this.state.nameList}/>
    
      <header className="App-header">
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
    </>
   
  );
}
}

export default App;
