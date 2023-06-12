import React from 'react'
import axios from "axios"

const Home = () => {
 const homePost =() =>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => console.log(response))
 }
  return (
    <div className='link'>
        <h2> This is my Home page</h2>
        <button onClick={homePost}> Click here</button>

        <div>
            <ol>
                <li>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/best">Best</a>
                    <a href="/field">Field</a>
                    <a href="/great">Great</a>
                    <a href="/nav">Nav</a>
                    <a href="/page">page</a>
                </li>
            </ol>
        </div>
    </div>
    
  )
}

export default Home