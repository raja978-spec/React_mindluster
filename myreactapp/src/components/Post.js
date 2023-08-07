import React,{Component} from "react";
export default class Post extends Component{

    render()
    {
        let a=this.props.match.params.post_id
        return(
            <>
                {a}
            </>
        )
    }
}