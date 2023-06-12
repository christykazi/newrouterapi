import React from 'react'
import axios from "axios"

const Best = () => {
    const bestAlbums =() =>{
axios.get("https://jsonplaceholder.typicode.com/albums")
.then(response => console.log(response))
    }
  return (
    <div>
        <h2>This is my best page</h2>
        <button onClick={bestAlbums}>Click here</button>
    </div>
  )
}

export default Best