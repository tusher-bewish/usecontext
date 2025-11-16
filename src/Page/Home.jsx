import React from 'react'
import Usestate from "./usestate" 
import pic from '../assets/home.png'

const Home = () => {
  return (
    <div className='h-auto w-full '>
        <img src={pic} alt="not found" />

        <Usestate />

    </div>
  )
}

export default Home