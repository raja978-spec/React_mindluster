
const Navbar=(props)=>{
    const {name}=props;
   
    return(
        <div className='Nav'>
        {   
        name.map(data =>{
            return(
          <div className="data" key={data.id}>
            <h1>{data.name}</h1>
          </div>
            )
        })
        }
        </div>
    
    )       
    
}

export default Navbar
