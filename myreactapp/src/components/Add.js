import React,{Component} from "react";

export default class Add extends Component{

    state={
        "id":null,
       "name":null
    }
    
    handelChange=(e)=>{
      this.setState({
        "id":Math.random(),
        "name":e.target.value
      })
    }

    handelSubmit=(e)=>{
        e.preventDefault()
        const {addname}=this.props;
        addname(this.state)
    }
    render(){
        return(
            <>
                <form onSubmit={this.handelSubmit}>
                    <input id="name" onChange={this.handelChange}></input>
                    <button>Submit</button>
                </form>
            </>
        )
    }
} 