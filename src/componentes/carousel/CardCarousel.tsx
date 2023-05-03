import React from 'react'
import { Carousel } from 'react-bootstrap';
import './cardCarousel.css';


function CardCarousel(props) {
  return (
    <div className=" d-inline-flex align-items-center p-4">
      <h2 className="tituloOffer p-0 m-0 text-center fs-1 animate__animated animate__jackInTheBox ">{props.title}</h2>
    </div>
  )
}




export default CardCarousel