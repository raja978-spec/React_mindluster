import React,{Component} from "react";
import axios from 'axios'

export default class Home extends Component{

    state={
        post:[]
    }

    componentWillMount(){
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then((res)=>{
        this.setState({
            post:res.data.slice(1,10)
        })
       })
       .catch((err)=>console.log(err))
    }

    render(){
        const postList=this.state.post.length ? (
            this.state.post.map((data)=>{
             return(
                <div key={data.id}>
                <h1>{data.title}</h1>
                <p>{data.body}</p>
            </div>
             )
            })
            
        ):(
            <div>
                <h1>Not content to display</h1>
            </div>
        )

        return(
            <>
           {postList}
            </>
        )
    }
}