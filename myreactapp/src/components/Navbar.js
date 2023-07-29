import React ,{Component} from 'react'

export default class Navbar extends Component{

    render(){
        return(
            <div className='Nav'>
             <nav>
                <ul>
                    <li>Home</li>
                    <li>Info</li>
                    <li>Contact US</li>
                    <li>About US</li>
                </ul>
             </nav>
            </div>
        )
    }
}