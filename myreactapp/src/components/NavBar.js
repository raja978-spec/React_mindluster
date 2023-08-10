import { Link } from "react-router-dom"
import Earth from '../Earth.jpg'

const NavBar=(props)=>
{

    return(
        <div>
        <img src={Earth} alt="Earth"></img>
            <nav>
                <ul>
                  <li><Link to="/home">Home</Link>
                    </li> 
                    <li><Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
           
                    </li>
              </ul>
            </nav>
            
        </div>
    )
}

export default NavBar