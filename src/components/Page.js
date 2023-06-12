import React from 'react'
import axios from "axios"

const Page = () => {
    const pageTodo =() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => console.log(response))
    }
  return (
    <div>
        <h2>This is the page</h2>
        <button onClick={pageTodo}>Click here</button>
    </div>
  )
}

export default Page