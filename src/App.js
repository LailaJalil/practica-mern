import './App.css';
import "./index.css";
import NombreFoto from './components/CategoriaFoto';
import CampoConInfo from './components/CampoConInfo';
import Flechita from './components/Flechita';
import data from './data/events1';
import { useState } from 'react';
import React from 'react';
function App() {
  let [mostrarOcultar, setMostrarOcultar]= useState(true)
  let hide = ()=>{
    setMostrarOcultar(!mostrarOcultar)
    console.log(mostrarOcultar);
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
 console.log(data);
 
  return (
   
    <div className="contenedor" >
    <article>
    <div><NombreFoto nombre={data[numeroACambiar].name} src={data[numeroACambiar].image} category={data[numeroACambiar].category}/></div>
    
    <div className='flechita'>
    <div>
    <Flechita alt="left" src= "../img/left.png" onClick={prev}/>
      <Flechita alt="right" src= "../img/right.png" onClick={next}/>
      </div>
      {
        mostrarOcultar ?
        (<>
      <Flechita alt="up" src= "../img/up.png"onClick={hide}/>
    
      <div className='description'>
      <CampoConInfo nombre={data[numeroACambiar].name} description={data[numeroACambiar].description}/>
      </div>
      </>):
      (<Flechita alt="down" src= "../img/down.png" onClick={hide} />)
    }
    
    </div>
    </article>
    </div>
   
  );
}

export default App;
