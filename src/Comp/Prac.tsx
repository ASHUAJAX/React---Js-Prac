import React from 'react'

function Prac() {
    const arr = [1,2,3,4,5];
    const obj = {name:"ashu",Age:"25",position:"sde 3s"}
  return (
    <>
    {/* <p>{arr.map((elm,i)=>(
        <p key={i}>{elm}</p>
    ))}</p> */}
    {
      Object.entries(obj).map((elm)=>(
        <p>{elm[1]}</p>
      ))
    }
    </>
  )
}

export default Prac