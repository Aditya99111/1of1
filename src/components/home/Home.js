import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div>this is the home page </div> 


        <Link to="/explore">go to explore page </Link>   
    </div>
  )
}

export default Home