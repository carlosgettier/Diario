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
                            <li className="nav-item"><Link className="nav-link" to="/noticias/Deportes">Deportes</Link></li>

                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle reset-buton-nav" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Institucional
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/noticias/nosotros">¿Quienes Somos?</Link></li>
                                    <li><Link className="dropdown-item" to="/noticias/contactos">contactos</Link></li>
                                    <li><Link className="dropdown-item" to="/noticias/locales">publicidad</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle reset-buton-nav" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Noticias
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/noticias/locales">locales</Link></li>
                                    <li><Link className="dropdown-item" to="/noticias/provinciales">Provinciales</Link></li>
                                    <li><Link className="dropdown-item" to="/noticias/nacionales">Nacionales</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/noticias/cultura">Cultura</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/noticias/turismo">Turismo</Link></li>
                        </ul>

                    </div>

                </div>
            </nav>

            <div className="fecha">

            </div>

        </div>
    )
}
