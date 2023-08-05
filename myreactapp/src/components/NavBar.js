import { useEffect } from "react";
import { Link } from "react-router-dom"

const NavBar=(props)=>{
    
    const his=useHistory()
    setTimeout(()=>{
        his.push('/home')
    },2000)
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