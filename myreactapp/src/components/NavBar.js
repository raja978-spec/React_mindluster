import { Link } from "react-router-dom"

const NavBar=(props)=>
{

    return(
        <div>
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