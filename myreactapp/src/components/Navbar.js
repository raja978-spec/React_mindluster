
const Navbar=(props)=>{
    const {name}=props;
   
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

export default Navbar
