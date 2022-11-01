import './App.css';
import NombreFoto from './components/CategoriaFoto';
import CampoConInfo from './components/CampoConInfo';
import Flechita from './components/Flechita';
import data from './data/events1';
import { useState } from 'react';
import React from 'react';
function App() {
  let [mostrarOcultar, setMostrarOcultar]= useState(false)
  let hide = ()=>{
    setMostrarOcultar(!mostrarOcultar)
  }
  let [numeroACambiar,setNumeroACambiar] = useState(0)
   let next=()=>{
    if ( numeroACambiar<data.length-1 ){
    setNumeroACambiar(++numeroACambiar)
  } else {
    setNumeroACambiar(0)
  }
  }
  let prev=()=>{
    if ( numeroACambiar>0 ){
      setNumeroACambiar(--numeroACambiar)
    } else {
      setNumeroACambiar(data.length-1)
    }  
  }
 
 
  return (
    <>
    <div className="contenedor" >
    <article>
    <div><NombreFoto nombre={data[numeroACambiar].name} src={data[numeroACambiar].image} category={data[numeroACambiar].category}/></div>
    
    <div className='flechita'>
      <Flechita alt="left" src= "../img/left.png" onClick={prev}/>
      {
      mostrarOcultar ?
      (<>
      <Flechita alt="down" src= "../img/down.png" onClick={hide}/>
      <CampoConInfo category={data[numeroACambiar].category}  description={data[numeroACambiar].description}/>
      </>):
      (<Flechita alt="up" src= "../img/up.png" onClick={hide}/>)
      }
      <Flechita alt="right" src= "../img/right.png" onClick={next}/>
      
    </div>
    </article>
    </div>
    </>
  );
}

export default App;
