import React, { Fragment } from 'react'
import './InfoMuestra.css'
// import futbol from '../../assets/image/futbol.jpg'
import { Link } from 'react-router-dom'

export const InfoMuestra = ({ info }) => {
    return (
        <Fragment>
            <div className="infomuestra">
                <div class="card mb-9 border border-dark" id="cards">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src={'http://localhost:3001/' + info.imagenPrincipal.nombre} id="img" class="img-fluid rounded-start" alt="..." />
                            <p id="text" >{info.tipo}</p>

                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <Link to={`/noticias/${info.id}`} className="card-link">
                                    <h4 id="title" class="card-title mt-2">{info.titulo}</h4>
                                    <p id="parraf" class="card-text mt-3 text-dark ">{info.bajada}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div> */}

            {/* <div className="noticia">
                    <div className="noticiaImg">
                        <img src={futbol} />
                        <p>DEPORTES</p>
                    </div>
                    <div className="noticiasTitulo">
                        <h2>Titular de la noticia</h2>
                        <p>La demanda de la industria creció 17% interanual e impulsó la suba general, frente a una caída del 4% en la residencial.</p>
                    </div>
                </div>
                <hr />
            </div> */}
        </Fragment>
    )
}
