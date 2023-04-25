import React from 'react'
import { Carousel } from 'react-bootstrap';
import './cardCarousel.css';


function CardCarousel(props) {
  return (
    <div className=" d-inline-flex p-4">
      <h2 className="tituloOffer p-5 text-center fs-1">{props.title}</h2> 
    </div>
  )
}




export default CardCarousel