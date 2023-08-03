import React,{Component} from "react";

export default class Add extends Component{

    state={
        "nameList":[
            {"id":1,"name":"t"}
        ]
    }
    handelChange(e){
        const data=this.state.nameList.push({"id":Math.random(),"name":e.target.value})
        this.setState({
            nameList:data
        })
    }

    handelSubmit(e){
        const {addname}=this.props;
        addname(this.state.nameList)
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