import React,{Component} from "react";
import Add from "./Add";
export default class Home extends Component{

    state={
        nameList:[
            {id:1,name:"raja"},
            {id:2,name:"ra"},
        ]
    }

    addName=(data)=>{
        console.log(data)
    }
    render(){

        return(
            <>
            {
            this.state.nameList.map((data)=>
            {
                
                return(
                <div className="list" key={data.id}>
                   <h1>{data.name}</h1>
                </div>
                )
            })
            
            }
            <Add addname={this.addName}/>
       
            </>
        )
    }
}