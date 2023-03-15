import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {

const [values,setValues]=useState("")
const [toDo,setTodo]=useState([])


const handleDelete = (id) => {
  const newTodo = toDo.filter((item) => item.id !== id);
  setTodo(newTodo);
};

  return (
    <div>
      <div className="todo">
      <div className="list">
      <h1>Todo List </h1>
      <div className="form">
      <input value={values.text} type="text" placeholder='Add a task....'  onChange={(e)=>setValues(e.target.value)}/> 
      <button onClick={()=>setTodo([...toDo,{id:Date.now(),text:values,status:false}])}>Add</button>
      </div>
{
  toDo.map((item,index)=>{
    return(
      <div className='todoItems'>
      <input type="checkbox" onChange={(e)=>{

        setTodo(toDo.filter(obj=>{
        
          if(obj.id===item.id){
            obj.status=e.target.checked
          }
          return obj
        }))
      }}
      
      value={item.status} className='checkbox' name="" id="" />
      <p>{item.text}</p>
      <div className="delete">
      <i class="ri-delete-bin-6-line" onClick={()=>handleDelete(item.id)}></i>
      </div>
      </div>
    )
  })
}
    
      </div>
      </div>
    </div>
  )
}

export default App
