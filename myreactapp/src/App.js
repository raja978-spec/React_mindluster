import { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar';

class App extends Component {
   
    
    render(){

    return(
        <div className='App'>
        <NavBar/>
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home/>}>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
    )

}
  
}

export default App;
