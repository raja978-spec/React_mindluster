import { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'

class App extends Component {
   
    
    render(){

    return(
        <div className='App'>
          <BrowserRouter>
            <Routes>
              <Route to="/home" component={Home}>

              </Route>
            </Routes>
          </BrowserRouter>
        </div>
    )

}
  
}

export default App;
