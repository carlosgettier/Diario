import React from 'react'
import imagen from '../../assets/image/deportes.jpg'
import imagen2 from '../../assets/image/politica.jpg'
import imagen3 from '../../assets/image/turismo.jpg'
import imagen4 from '../../assets/image/gif.gif'
import imagen5 from '../../assets/propaganda/auto.jpg'
import imagen6 from '../../assets/propaganda/bici.jpg'
import imagen7 from '../../assets/image/local1.jpg'
import imagen8 from '../../assets/image/local2.jpg'
import imagen9 from '../../assets/image/nacional1.jpg'
import imagen10 from '../../assets/image/nacional2.jpg'
import imagen11 from '../../assets/image/deportes1.jpg'
import imagen12 from '../../assets/image/deportes2.jpg'
import imagen13 from '../../assets/image/deportes3.jpg'
import imagen14 from '../../assets/image/deportes4.jpg'
import { Noticia } from '../Noticia/Noticia'
import './home.css'
import { Link } from 'react-router-dom'


export const Home = () => {
    return (
        <div className="home">
            <div className="categorias">
                <p>Ultimas noticias</p>
            </div>
            <div className="contenedorPrincipal">

                <div className="contenedorImagenPrincipal">
                    <div>
                        <h5 className="seccio">Deportes</h5>
                    </div>
                    <img src={imagen} alt="deporte de alto riesgo" />
                    <div className="titularImagen">
                        <h1>Deporte de alto riesgo</h1>
                        <p>Cada dia se empieza a practicar mas esta ckase de deportes en los andes</p>
                    </div>
                </div>
                <div className="contenedorImagenSecundaria">
                    <div className="ImagenSecundaria">
                        <div>
                            <h5 className="seccionSecundaria">Politica</h5>
                        </div>
                        <img src={imagen2} alt="politica" />
                        <div className="titularSecundario">
                            <h1>El senado trata la ley de humedales</h1>
                            <p>Despues de mucho tiempo de tener encajonado esta ley, hoy se empieza a tratar en el senado</p>
                        </div>
                    </div>
                    <div className="ImagenSecundariaDos">
                        <div>
                            <h5 className="seccionTercera">Cultura</h5>
                        </div>
                        <img src={imagen3} alt="Cultura" />
                        <div className="titularTercero">
                            <h1>Un viaje a los profunde de Asia</h1>
                            <p>Recorremos los paises del sudeste asiatico, para escubriri su cultura</p>
                        </div>
                    </div>

                </div>
            </div>
            <hr />
            {/*-------LOCALES--------*/}
            <div className="categorias">
                <p>Locales</p>
            </div>
            <div className="locales">
                <div className="locales-primero">
                    <div className="NotLoc">
                        <Noticia img={imagen7} />
                        <Noticia img={imagen8} />

                    </div>
                    <div className="publicidad">
                        <img src={imagen5} className="img1" alt="propaganda" />
                        <img src={imagen6} alt="propaganda" />

                    </div>
                </div>
                <div className="publicidades">
                    <img src={imagen4} alt="propaganda" />

                </div>
            </div>
            <div className="locales">
                <div className="locales-primero">
                    <div className="NotLoc">
                        <Noticia img={imagen9} />
                        <Noticia img={imagen10} />
                    </div>
                    <div className="seccion">
                        <div className="tituloSecciones">
                            <h5>SECCIONES</h5>
                        </div>
                        <ul className="lista">
                            <li className="listaVinculos">
                                <Link>
                                    <p className="icono"><i class="fas fa-envelope-open-text"></i></p>
                                    <p className="link">CORREO DE LECTORES</p>
                                </Link>
                            </li>
                            <li className="listaVinculos">
                                <Link>
                                    <p className="icono"><i class="far fa-newspaper"></i></p>
                                    <p className="link">CLASIFICADOS</p>
                                </Link>
                            </li>
                            <li className="listaVinculos">
                                <Link>
                                    <p className="icono"><i class="fas fa-phone-square-alt"></i></p>
                                    <p className="link">TELEFONOS UTILES</p>
                                </Link>
                            </li>
                            <li className="listaVinculos">
                                <Link>
                                    <p className="icono"><i class="fas fa-cross"></i></p>
                                    <p className="link">AVISOS FUNEBRES</p>
                                </Link>
                            </li>
                            <li className="listaVinculos">
                                <Link>
                                    <p className="icono"><i class="fas fa-first-aid"></i></p>
                                    <p className="link">FARMACIAS DE TURNO</p>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="publicidades">
                    <img src={imagen4} alt="propaganda" />

                </div>
            </div>


            <div className="categorias">
                <p>Deporte</p>
            </div>
            <div className="deportes">
                <h3>DEPORTES EN JUGLAR</h3>
                <div className="NotLoc">
                    <Noticia img={imagen11} />
                    <Noticia img={imagen12} />
                </div>
                <div className="publicidades">
                    <img src={imagen4} alt="propaganda" />

                </div>
                <div className="NotLoc">
                    <Noticia img={imagen13} />
                    <Noticia img={imagen14} />
                </div>

            </div>
            <hr />



        </div >
    )
}
