import React from 'react';

export default function CampoConInfo(props) {
  console.log(props)
  let {nombre, description}= props

  return (
  
    <div>
       <h2>{nombre}</h2>  
       <p>{description}</p> 
       </div>
       
  )
}
