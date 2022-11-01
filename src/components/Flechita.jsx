import React from 'react'

export default function Flechita(props) {
    let {alt,src, onClick}= props
  return (
    <button><img src={src} alt={alt} onClick={onClick} /></button>
  )
}
