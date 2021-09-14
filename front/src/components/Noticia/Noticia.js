import React from 'react'
import imagen3 from '../../assets/image/turismo.jpg'
import './noticias.css'

export const Noticia = ({ img }) => {
    return (
        <div className="contenedorNot">

            <img src={img} />
            <div className="seccionNot">
                <h5 >Cultura</h5>
            </div>
            <div className="titularFecha">
                <p>24/08/2021</p>
            </div>
            <div className="titularNot">
                <h1>Un viaje a los profunde de Asia</h1>
                <p>Recorremos los paises del sudeste asiatico, para escubriri su cultura</p>
            </div>
        </div>
    )
}
