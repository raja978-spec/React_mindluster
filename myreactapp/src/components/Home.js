import React,{Component} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Home extends Component{

    /*
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
*/
    render(){
        console.log(this.prop)

        const postList=this.props.post.length ? (
            this.props.post.map((data)=>{
             return(
                <div key={data.id}>
                <Link to={'/'+data.id}><h1>{data.title}</h1></Link>
                
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

// This function are helps to map the state
// value which is passed from the upper 
// component
const mapState=(state)=>{
    return{
        post:state.posts 
    }
}
// connect is the function helps to 
// access the react to access redux store
// values.
export default connect(mapState)(Home)