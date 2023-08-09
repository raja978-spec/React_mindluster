import { Component } from "react";
import axios from "axios";

 class Post extends Component {

    state={
        post:null 
    }
    componentWillMount(){

        const {post_id}=this.props.macth.param.post_id
        console.log(post_id)
        
        axios.get('https://jsonplaceholder.typicode.com/posts/',post_id)
        .then((res)=>{
        this.setState({
            post:[res.data]
        })
         console.log(this.post)
        })
        .catch((err)=>console.log(err))
    }

    render(){
        return(
            <>
                
            </>
        )
    }    
     
    
}

export default Post