import React from "react";

class Login extends React.Component{

render(){
    return(
    <center>
<div className="row">
      <div className="col-md-12">
      <p className="h1">Login here</p><br></br>
      
      </div>
            <form>
                <input className="lead bs" placeholder="Enter name"></input><br></br><br></br>
                <input className="lead bs" placeholder="Enter pasword"></input><br></br><br></br>
                <input className="button b lead bs" placeholder="Enter name" type="submit"></input>
            </form>
            
</div>
        
    </center>
        
        
    )
}
}

export default Login