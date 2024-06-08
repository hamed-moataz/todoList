import React from 'react'
import './value.css'

const ValueTodo = ({myName, deleteValue , id }) => {
  return (
    <div className='value'>
        <div className="container">
            <h4>The Name : {myName} </h4>
            <button onClick={()=> deleteValue(id)}>delete</button>
        </div>
    </div>
  )
}

export default ValueTodo
