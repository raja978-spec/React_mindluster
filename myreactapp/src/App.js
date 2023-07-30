import { Component } from 'react';
import './App.css';
import Ninjas from './components/Ninjas';
import AddNinja from './components/AddNinja';
class App extends Component {

    state={
      "nameList":[
        {id:1,name:"raja"},
        {id:2,name:"ra"},
        {id:3,name:"r"},
      ]
    
    }

    addNinja=(ninja)=>{
      ninja.id=Math.random()    
      this.state.nameList.push(ninja)
      this.setState({
        "nameList":this.state.nameList})
    }

    deleteNinjs=(id)=>{
      const newdata=this.state.nameList.filter((data)=>{
        return(data.id !== id)
      })
      this.setState({
        "nameList":newdata
      })
    
    }
  
  render(){
    
  return (
    <>
    <div className="App">
    <Ninjas name={this.state.nameList} del={this.deleteNinjs}/>
    
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

      <AddNinja add={this.addNinja}/>
    </div>
    </>
   
  );
}
}

export default App;
