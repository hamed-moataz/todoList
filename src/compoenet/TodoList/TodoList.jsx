import React, { useEffect, useState } from 'react'
import "./todoList.css"
import ValueTodo from '../ValueTodo/ValueTodo'
const TodoList = () => {
    const [name, setName] = useState({
      The_name: "",
      The_age: ""
    }
    )
    // const [age, setAge] = useState({
    //   The_age: ""
    // })
    const [todoContainer , setTodoContainer] = useState([])
    const AddValue = ()=>{
        setTodoContainer([...todoContainer , name  ])
    }

    // ====================== detelte ===============
    const deleteValue = (id)=>{
      const updateValue = todoContainer.filter((data , index)=> index != id)
      setTodoContainer(updateValue)
      localStorage.setItem("name" , JSON.stringify(updateValue))      

    }
  
    useEffect(()=>{
      const myName =JSON.parse(localStorage.getItem("name"))
      if(myName){
        setTodoContainer(myName)
      }
    }, [])

    useEffect(()=>{
      localStorage.setItem("name" , JSON.stringify(todoContainer))      

    },[todoContainer])
  return (
    <div className='list'>
        <div className='form' >
            <input type="text" placeholder='name' id='name' onChange={(e)=> setName({The_name: e.target.value})}  />
            {/* <input type="text" placeholder='age' id='age' onChange={(e)=> setAge({The_age : e.target.value})}  /> */}
            <button onClick={()=> AddValue()} >Add</button>
        </div>
        {todoContainer.map((item , index)=> (
          <ValueTodo key={index} myName = {item.The_name} deleteValue = {deleteValue} id = {index}  />

        ))}
    </div>
  )
}

export default TodoList
