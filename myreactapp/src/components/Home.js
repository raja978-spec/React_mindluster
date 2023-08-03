import React,{Component} from "react";

export default class Home extends Component{

    state={
        nameList:[
            {id:1,name:"raja"},
            {id:2,name:"ra"},
        ]
    }
    render(){

        return(
            <>
            {
            this.state.nameList.map((data)=>
            {
                console.log("Hello world")
                return(
                <div className="list" key={data.id}>
                   <h1>{data.name}</h1>
                </div>
                )
            })
            
            }
            
            </>
        )
    }
}