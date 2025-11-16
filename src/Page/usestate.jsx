import React, { useState } from 'react'



const usestate = () => {
    const [counter, setcounter] = useState(0);
    const handaler = () =>{
        setcounter(counter + 1)
    }
  return (
    <div className='w-full h-auto items-center text-center'>
        <p className='text-4xl py-7 '>count: {counter}</p>
        <button className='bg-red-500 h-10 w-30 rounded-2xl font-semibold' onClick={handaler}>click me</button>
    </div>
  )
}

export default usestate