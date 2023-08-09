import { useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

 const Post=()=> {
        const[post,setPost]=useState(null)

        const {post_id}=useParams()
        
        
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

export default Post