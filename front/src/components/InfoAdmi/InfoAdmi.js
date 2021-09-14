import React from 'react'
import { Link } from 'react-router-dom'
import futbol from '../../assets/image/futbol.jpg'
import './infoAdmi.css'


export const InfoAdmi = ({ info }) => {
    return (
        <div className="noticiaAdmi">
            <div className="card" >
                <img src={futbol} className="card-img-top" alt="..." />
                <div className="card-footer bg-secondary border-success">Deportes</div>
                <div className="card-body">
                    <p className="card-text">{info.bajada}</p>
                    <Link to={`/noticias/administracion/borrar/${info.id}`} className="card-link">Borrar</Link>
                    <Link to={`/noticias/administracion/editar/${info.id}`} className="card-link">Edita</Link>

                </div>
            </div>
        </div>
        // 
        //     <div className="noticiaImgAdmi">
        //         <img src={futbol} />
        //         <p>DEPORTES</p>
        //     </div>
        //     <div className="noticiasTituloAdmi">
        //         <h2>Titular de la noticia</h2>
        //         <p>La demanda de la industria creció 17% interanual e impulsó la suba general, frente a una caída del 4% en la residencial.</p>
        //         <div className="admiBoton">
        //             <Link>Borrar </Link>
        //             <Link>Editar </Link>
        //         </div>

        //     </div>

        // </div>



    )
}
