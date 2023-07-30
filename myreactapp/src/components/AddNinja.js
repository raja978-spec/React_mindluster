import React, {Component} from 'react'

export default class AddNinja extends Component{

    state={
        "Id":null,
        "Name":null,
        "Age":null,
    }
    handelChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
      
    }
    handelSubmit=(e)=>{
        e.preventDefault();
        this.props.add(this.state)
    }
    render(){
        return(
            <center>
            <form onSubmit={this.handelSubmit}>
                Id:<input id="Id" placeholder='Id' onChange={this.handelChange}></input><br></br>
                Name:<input id="Name" placeholder='Name' onChange={this.handelChange}></input><br></br>
                Age:<input id="Age" placeholder='Age' onChange={this.handelChange}></input><br></br>
               <button>Submit</button><br></br>
            </form>
            </center>
        )
    }
}