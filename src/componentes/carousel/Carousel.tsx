import React from 'react'
import CardCarousel from './CardCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen1 from '../../img/electrodomesticos.png'
import imagen2 from '../../img/dormitorio.png'
import imagen3 from '../../img/jardineria.png'
import 'animate.css';


const elementos =[{
        title : "Electrodomesticos",
        img:imagen1,
        offer:"20%",
    },{
        title : "Dormitorios",
        img:imagen2,
        offer:"15%",
    },{
        title : "Jardineria",
        img:imagen3,
        offer:"50%"
    }
]


const Carousel = () => {
  return (  
    <div id="carouselExampleAutoplaying" className="carousel slide w-100 mx-auto" data-bs-ride="carousel">
      <div className="carousel-inner text-center d-flex align-items-center bg-warning" style={{ width: "100%", height: "300px" }}>
        <div className="carousel-item active h-50">
          <div className='d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column'>
              <CardCarousel title={elementos[0].title}/>
              <div className='oferta border border-white rounded col-4 p-2 mx-auto'>
                <p className='h2 oferta-tittle'>Hoy Tenés!</p>
                <p className='h2 oferta-valor'>{elementos[0].offer} OFF!</p>
              </div>
            </div>
            <img src={imagen1} className='img_car animate__animated animate__backInUp' alt="" />
          </div>
        </div>
        <div className="carousel-item h-50">
          <div className='d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column'>
              <CardCarousel title={elementos[1].title}/>
              <div className='oferta border border-white rounded col-4 p-2 mx-auto'>
                <p className='h2 oferta-tittle'>Hoy Tenés!</p>
                <p className='h2 oferta-valor'>{elementos[1].offer} OFF!</p>
              </div>
            </div>
          <img src={imagen2} className='img_car animate__animated animate__backInUp' alt="" />
          </div>
        </div>

        
        <div className="carousel-item h-50" >
          <div className='d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column'>
              <CardCarousel title={elementos[2].title}/>
              <div className='oferta border border-white rounded col-5 p-2 mx-auto'>
                <p className='h2 oferta-tittle'>Hoy Tenés!</p>
                <p className='h2 oferta-valor'>{elementos[2].offer} OFF!</p>  
              </div>
            </div>
          <img src={imagen3} className='img_car animate__animated animate__backInUp' alt="" />
          </div>
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

