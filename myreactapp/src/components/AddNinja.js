import React, {Component} from 'react'

export default class AddNinja extends Component{

    state={
        "id":null,
        "name":null,
    }
    handelChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
      
    }
    handelSubmit=(e)=>{
        e.preventDefault();
        
        this.props.add(this.state.id)
    }
    render(){
        return(
            <center>
            <form onSubmit={this.handelSubmit}>
                Id:<input id="id" placeholder='Id' onChange={this.handelChange}></input><br></br>
                Name:<input id="name" placeholder='Name' onChange={this.handelChange}></input><br></br>
               <button>Submit</button><br></br>
            </form>
            </center>
        )
    }
}