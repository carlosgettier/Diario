import React from 'react'
import { Link } from 'react-router-dom'
// import futbol from '../../assets/image/futbol.jpg'
import './infoAdmi.css'


export const InfoAdmi = ({ info }) => {
    return (
        <div className="noticiaAdmi">
            <div className="card" >
                <img src={'http://localhost:3001/' + info.imagenPrincipal.nombre} className="card-img-top" alt="..." />
                <div className="card-footer bg-secondary border-success"><h4>{info.tipo}</h4></div>
                <div className="card-body">
                    <p className="card-text">{info.bajada}</p>
                    <Link to={`/noticias/administracion/borrar/${info.id}`} className="card-link">Borrar</Link>
                    <Link to={`/noticias/administracion/editar/${info.id}`} className="card-link">Edita</Link>

                </div>
            </div>
        </div>

    )
}
