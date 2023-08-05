import React,{Component} from "react";
import Add from "./Add";
export default class Home extends Component{

    
    state={
        "nameList":[
            {id:1,name:"raja"},
            {id:2,name:"ra"},
        ]
    }

    addName=(data)=>{
        this.state.nameList.push(data)
        this.setState({
            nameList:this.state.nameList
        })
    }

    deleteName=(id)=>{
        const data=this.state.nameList.filter((data)=>{
            return data.id !== id 
        })
        this.setState({
            'nameList':data 
        })
    }
    render(){
        
        return(
            <>
            {
            this.state.nameList.map((data)=>
            {
                
                return(
                <div className="list" key={data.id}>
                   <h1 onClick={()=>this.deleteName(data.id)}>{data.name}</h1>
                </div>
                )
            })
            
            }
            <Add addname={this.addName}/>
       
            </>
        )
    }
}