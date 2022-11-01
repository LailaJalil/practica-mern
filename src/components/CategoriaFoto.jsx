
import React from 'react'


export default function NombreFoto(props) {
  let {nombre, src, category}=props
  return (
    <>
       <h2>{category}</h2>
       <img src={src}  alt={nombre}/>
    </>
  )
}
