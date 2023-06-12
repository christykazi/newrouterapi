import React from 'react'
import axios from "axios"

const Nav = () => {
    const navUsers =() =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => console.log(response))
    }
  return (
    <div>
        <h2> This is the nav page</h2>
        <button onClick={navUsers}> Click here</button>
    </div>
  )
}

export default Nav