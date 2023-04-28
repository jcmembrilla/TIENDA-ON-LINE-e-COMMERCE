import React from 'react'
import CardCarousel from './CardCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen1 from '../../img/electrodomesticos.png'
import imagen2 from '../../img/dormitorio.png'
import imagen3 from '../../img/jardineria.png'


const elementos =[{
        title : "Electrodomesticos",
        img:imagen1
    },{
        title : "Dormitorios",
        img:imagen2
    },{
        title : "Jardineria",
        img:imagen3
    }
]


const Carousel = () => {
  return (  
    <div id="carouselExampleAutoplaying" className="carousel slide w-100 mx-auto" data-bs-ride="carousel">
      <div className="carousel-inner text-center d-flex align-items-center" style={{ width: "100%", height: "300px" }}>
        <div className="carousel-item active h-50  ">
          <CardCarousel title={elementos[0].title}/>
          <img src={imagen1} alt="" />
        </div>
        <div className="carousel-item h-50  ">
          <CardCarousel title={elementos[1].title}/>
          <img src={imagen2} alt="" />
        </div>
        <div className="carousel-item h-50  " >
          <CardCarousel title={elementos[2].title}/>
          <img src={imagen3} alt="" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>
  )
}

export default Carousel

