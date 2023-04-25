import React from 'react'
import CardCarousel from './CardCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const elementos =[{
        title : "Electrodomesticos"
    },{
        title : "Dormitorios"
    },{
        title : "Jardineria"
    }
]


const Carousel = () => {
  return (  
    <div id="carouselExampleAutoplaying" className="carousel slide w-100 mx-auto" data-bs-ride="carousel">
      <div className="carousel-inner text-center d-flex align-items-center" style={{ width: "100%", height: "300px" }}>
        <div className="carousel-item active h-50 border border-5">
          <CardCarousel title={elementos[0].title}/>
        </div>
        <div className="carousel-item h-50 border border-5 ">
          <CardCarousel title={elementos[1].title}/>
        </div>
        <div className="carousel-item h-50 border border-5 " >
          <CardCarousel title={elementos[2].title}/>
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

