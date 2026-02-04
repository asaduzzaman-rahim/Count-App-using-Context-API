import React, { useContext } from 'react'
import { counterContext } from '../MainContext'
import CountButton from './CountButton'
import Container from './Container'
import { FaLightbulb } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";




const BodyPart = () => {

  let {count, color, setColor} = useContext(counterContext)

  const colorClick = ()=>{
    setColor(!color)
  }

  return (
    <>
      <Container className='h-[400px]  mt-20 relative' >    
        <div onClick={colorClick} className='text-4xl  cursor-pointer absolute top-[-25px] right-[-25px]'>
          {color ?  <FaRegLightbulb  className='!text-black' /> : <FaLightbulb/>}
        </div>
        <h1 className='text-4xl font-bold pt-5 pb-3'>This is Count App using <br /> Context API</h1>
        <h2 className='text-3xl font-bold pt-6 '>Start Count Number : {count} </h2> 
      </Container> 
    </>
  )
}

export default BodyPart 
