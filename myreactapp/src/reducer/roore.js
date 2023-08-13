const InitState={
    todos:[],
    posts:[
      {id:1,title:"T1",body:"Body1"},
      {id:2,title:"T1",body:"Body1"},
      {id:3,title:"T1",body:"Body1"},
      {id:4,title:"T1",body:"Body1"},
    ]
  }
  
  // This reducer initilize the state values 
  // as empty array in first load.
const myreducer=(state=InitState,action)=>{
      return state
}

export default myreducer
  