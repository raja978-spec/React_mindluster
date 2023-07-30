const Ninjas=(props)=>{

  const {name,del}=props;

    return(
        <div className='Nav'>
        {   
        name.map(data =>{
            return(
          <div className="data" key={data.id}>
            <h1>{data.name}</h1>
            <button onClick={()=>del(data.id)}>Delete</button>
          </div>
            )
        })
        }
        </div>
    
    )       
    
}

export default Ninjas
