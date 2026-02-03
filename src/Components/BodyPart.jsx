import React, { useContext } from 'react'
import { counterContext } from '../MainContext'
import CountButton from './CountButton'


const BodyPart = () => {

  let {count} = useContext(counterContext)

  return (
    <>
      <div className='h-[400px] w-[500px]  mx-auto text-center shadow-2xl bg-[#dddd] text-black rounded-2xl mt-20' >
        <h1 className='text-4xl font-bold pt-5 pb-3'>This is Count App using <br /> Context API</h1>
        <h2 className='text-3xl font-bold pt-6 '>Start Count Number : {count} </h2> 

    
      </div> 
    </>
  )
}

export default BodyPart
