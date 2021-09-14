import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid navbar navbar-dark bg-primary" >
                    <div className="logo">
                        <Link className="navbar-brand" to="/">JUGLAR</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
                        <ul className="navbar-nav" id="barra">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Inicio</Link>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Deportes</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Institucional
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">¿Quienes somos?</a></li>
                                    <li><a className="dropdown-item" href="#">Contactos</a></li>
                                    <li><a className="dropdown-item" href="#">Publicita</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Noticias
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/noticias/locales">locales</Link></li>
                                    <li><a className="dropdown-item" href="#">Provinciales</a></li>
                                    <li><a className="dropdown-item" href="#">Nacionales</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cultura</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Turismo</a>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>

            <div className="fecha">
                <p>viernes 20 de agoso de 2021</p>
            </div>

        </div>
    )
}
