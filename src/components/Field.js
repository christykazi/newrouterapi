import React from 'react'
import axios from "axios"

const Field = () => {
 const fieldPhoto =() => {
axios.get("https://jsonplaceholder.typicode.com/photos")
.then(response => console.log(response))
 }

  return (
    <div>
        <h2> this is my field page</h2>
        <button onClick={fieldPhoto}> Click here</button>
    </div>
  )
}

export default Field