import React from 'react'
import axios from "axios"

const Great = () => {
    const greatApi =() =>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => console.log(response))
        
    }
  return (
    <div>
        <h2> This is my great page</h2>
        <button onClick={greatApi}> Click here</button>
    </div>
  )
}

export default Great