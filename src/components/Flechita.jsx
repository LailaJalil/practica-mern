import React from 'react'

export default function Flechita(props) {
  console.log(props)
  let {src}=props
  let {alt}=props
  let {onClick}= props
    
  return (
    <button onClick={onClick} ><img src={src} alt={alt} /></button>
  )
}
