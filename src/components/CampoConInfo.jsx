import React from 'react'

export default function CampoConInfo(props) {
  let {categoria, descripcion}= props
  return (
    <>
    <div>
       <h2>{categoria}</h2>  
       <p>{descripcion}</p> 
       </div>
       </>
  )
}
