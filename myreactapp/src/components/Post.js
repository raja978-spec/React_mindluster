import { useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import { connect } from "react-redux";

 const Post=()=> {
        
        
        /*
        useEffect(()=>{
            axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
            .then((res)=>{
             setPost(
                res.data
             )
             console.log(post)
            })
            .catch((err)=>console.log(err))
    
        })
        */
            
        const post=this.this.props.post
        if (!post){
            return(
                <>
                <h1>Loading....</h1>
                </>
            )
        }
        return(
            <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </>
        )
    
}

const mapState=(state,ownProps)=>{
    const {post_id}=ownProps.match.params.id
    state.post.find((data)=> data.id===post_id ? (console.log(data)):(console.log("NO data")) )
    
}
export default connect(mapState)(Post)