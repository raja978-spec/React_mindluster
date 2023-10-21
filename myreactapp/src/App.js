import './css/bootstrap.min.css'
import { Component } from 'react';
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
class App extends Component {

    render(){
    return(
       <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
       </BrowserRouter>
    )
}
  
}

export default App;
