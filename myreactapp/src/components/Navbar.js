import React ,{Component} from 'react'

export default class Navbar extends Component{

    render(){
        const {name}=this.props;
        return(
            <div className='Nav'>
        {   
            name.map(data =>{
            return(
                <div className='Namelist' key={data.id}>
                <h1>{data.name}</h1><br></br>
                </div>
                )})
        }
            </div>
        
        )       
    }
}