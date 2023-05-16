import imagenCocina from "../img/combo-img/cocina.jpg"
import imagenDormitorio from "../img/combo-img/cocina.jpg"
import imagenOficina from "../img/combo-img/oficina.jpg"
import imagenLiving from "../img/combo-img/living.jpg"
import imagenRecreacion from "../img/combo-img/recreacion.jpg"
import imagenJardin from "../img/combo-img/jardin.jpg"


const elementosInterior =[{
  imgCocina:imagenCocina,
  imgDormtorio:imagenDormitorio,
  imgOficina:imagenOficina,
  imagenLivig:imagenLiving,
  imgRecreacion:imagenRecreacion,
  imgJardin:imagenJardin
  }
]


const ComboInterior: React.FC = () => {
    return <section className="interiores text-center">

    
        <div className="container mt-1">
        <h1 className="cards panel text-center" >Al bolsillo</h1>
          <section className="row">
          <div className="pocket panel col-xl-6 col-sm-5 pull-left">
              <h2 className="cards panel text-center">Combos Interior</h2>

              <div className="col-sm-6">
                  <div className="cards panel card">
                      <img className="card-img-top" src={elementosInterior[0].imgCocina} alt="Card image cap"></img>
                      <div className="card-body">
                        <h5 className="card-title text-center text-center">Cocina</h5>
                        <a href="#" className="btn btn-warning btn-lg btn-block">Combo!</a>
                      </div>
                    </div>
              </div>
              <div className="col-sm-6">
                    <div className="cards panel card" >
                        <img className="card-img-top" src={elementosInterior[0].imagenLivig} alt="Card image cap"></img>
                        <div className="card-body">
                          <h5 className="card-title text-center">Living</h5>
                          <a href="#" className="btn btn-warning btn-lg btn-block">Combo!</a>
                        </div>
                      </div>
                </div>
                <div className="col-sm-6">
                    <div className="cards panel card" >
                        <img className="card-img-top" src={elementosInterior[0].imgDormtorio} alt="Card image cap"></img>
                        <div className="card-body">
                          <h5 className="card-title text-center">Habitaciones</h5>
                          <a href="#" className="btn btn-warning btn-lg btn-block">Combo!</a>
                        </div>
                      </div>
                </div>
                <div className="col-sm-6">
                    <div className="cards panel card" >
                        <img className="card-img-top" src={elementosInterior[0].imgOficina} alt="Card image cap"></img>
                        <div className="card-body">
                          <h5 className="card-title text-center">Oficina</h5>
                          <a href="#" className="btn btn-warning btn-lg btn-block">Combo!</a>
                        </div>
                      </div>
                </div>
            </div>

            <div className="pocket panel col-xl-6 col-sm-5 pull-right" >
                <h2 className="cards panel text-center">Combos Exterior</h2>
                    <div className="col-sm-6">
                        <div className="cards panel card" >
                            <img className="card-img-top" src={elementosInterior[0].imgJardin} alt="Card image cap"></img>
                            <div className="card-body">
                              <h5 className="card-title text-center">Jardineria</h5>
                              <a href="#" className="btn btn-warning btn-lg btn-block">Combo!</a>
                            </div>
                          </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="cards panel card" >
                            <img className="card-img-top" src={elementosInterior[0].imgRecreacion} alt="Card image cap"></img>
                            <div className="card-body">
                              <h5 className="card-title text-center">Recreacion</h5>
                              <a href="#" className="btn btn-warning btn-lg btn-block">Combo!</a>
                            </div>
                          </div>
                    </div>
             </div>
        </section>
        </div>
    </section>
  };
  
  export default ComboInterior;