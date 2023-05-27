import React from 'react';
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
const Card = () => {
  return (
    <div className='container d-flex p-1 justify-content-center align-items-center'>
      <div className='row'>
        <div className='col-lg-12'>
            <div className="card m-2 bg-dark">
              <img className=' card-img-top w-100 p-1 pb-0 ' src={image1} alt="Imagen"/>
              <div className="card-body text-light ">
                <h3 className="card-tittle">Lucas Albarado</h3>
                <p className="card-text h5 text-secondary">Barra lateral y Menu</p>
              </div>
            </div>

            <div className="card m-2 bg-dark">
              <img className=' card-img-top w-100 p-1 pb-0 ' src={image2} alt="Imagen"/>
              <div className="card-body text-light ">
                <h3 className="card-tittle">Andres Bulacia</h3>
                <p className="card-text h5 text-secondary">Layout y Contenido</p>
              </div>
            </div>

            <div className="card m-2 bg-dark">
              <img className=' card-img-top w-100 p-1 pb-0 ' src={image3} alt="Imagen"/>
              <div className="card-body text-light ">
                <h3 className="card-tittle">Tomas Williams</h3>
                <p className="card-text h5 text-secondary">Titulo y Contenido</p>
              </div>
            </div>

            <div className="card m-2 bg-dark">
              <img className=' card-img-top w-100 p-1 pb-0 ' src={image4} alt="Imagen"/>
              <div className="card-body text-light ">
                <h3 className="card-tittle">Agustin Lazarte</h3>
                <p className="card-text h5 text-secondary">Menu y Footer</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Card;