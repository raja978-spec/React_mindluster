import { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';

class App extends Component {
   
    
    render(){

    return(
      <div className='App'>
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/:post_is" element={<Post/>}></Route>
    
     </Routes>
     </BrowserRouter>
      </div>
        
    )

}
  
}

export default App;
