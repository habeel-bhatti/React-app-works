import React from 'react'
import './Main.css';

const Main = (props) => {
  return (
    <div className='box'>
    <h1>{props.title}</h1>
    <p>{props.description}</p>  
    </div>
  )
}

export default Main
