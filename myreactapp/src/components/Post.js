import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

 const Post=()=> {
        const{post,setPost}=useState()

        const {post_id}=useParams()
        console.log(post_id)
            axios.get('https://jsonplaceholder.typicode.com/posts/',post_id)
            .then((res)=>{
             setPost({
                 post:res.data.slice(1,10)
             })
            })
            .catch((err)=>console.log(err))
        
     
        return(
            <>
                {post_id}
            </>
        )
    
}

export default Post