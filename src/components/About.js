import React from 'react'
import axios from "axios"

const About = () => {
    /* const aboutApi =()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

    }
 */
   /*  const goodFetch =() =>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(response => console.log(response))
        } */
    const aboutComment =() =>{
axios.get("https://jsonplaceholder.typicode.com/comments")
.then(response => console.log(response))


    }
  return (
    <div>
        <h2> This is about page</h2>
        <button onClick={aboutComment}> Click here</button>
    </div>
  )
}

export default About