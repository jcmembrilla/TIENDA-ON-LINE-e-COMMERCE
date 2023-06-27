import { NavLink } from "react-router-dom";

import imagenCocina from "../img/combo-img/cocina.jpg"
import imagenDormitorio from "../img/combo-img/habitacion.jpg"
import imagenOficina from "../img/combo-img/oficina.jpg"
import imagenLiving from "../img/combo-img/living.jpg"
import imagenRecreacion from "../img/combo-img/recreacion.jpg"
import imagenJardin from "../img/combo-img/jardin.jpg"


const CardHome: React.FC = () => {
  const elementosInterior = {
    cocina: {
      img: imagenCocina,
      title: "Cocina",
    },
    living: {
      img: imagenLiving,
      title: "Living",
    },
    habitaciones: {
      img: imagenDormitorio,
      title: "Habitaciones",
    },
    oficina: {
      img: imagenOficina,
      title: "Oficina",
    },
    jardineria: {
      img: imagenJardin,
      title: "Jardineria",
    },
    recreacion: {
      img: imagenRecreacion,
      title: "Recreacion",
    },
  };

  const renderCards = (data: any) => {
    return Object.keys(data).map((key) => (
      <div className="col-sm-6 col-md-4 " key={key}>
        <div className="cards panel card">
          <img
            className="card-img-top"
            src={data[key].img}
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title text-center">Arma tu combo de </h5>
            <NavLink to="/combo" className="btn btn-warning btn-lg btn-block">
              {data[key].title}
            </NavLink>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="interiores text-center">
      <div className="container mt-1">
        <h1 className="cards panel text-center">Al bolsillo</h1>
        <section className="row">
          <div>
            <h2 className="cards panel text-center">Elegi tu tipo de combo</h2>
            {renderCards(elementosInterior)}
          </div>
        </section>
      </div>
    </section>
  );
};

export default CardHome;
