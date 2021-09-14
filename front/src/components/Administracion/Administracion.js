import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { InfoAdmi } from '../InfoAdmi/InfoAdmi'
import './administracion.css'

export const Administracion = () => {

    const [admi, setadmi] = useState([])


    useEffect(async () => {
        const data = await fetch('http://localhost:3001/api/noticias')
        const res = await data.json()
        setadmi(res)
        console.log(res)

    }, [])

    return (
        <div className="administracion">
            <h1 > JUGLAR ADMINISTRACION</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center bg-secondary" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/noticias/administracion/agregar" className="nav-link active">AGREGAR</Link>
                                {/* <a  aria-current="page" href="#">Home</a> */}
                            </li>
                            <li className="nav-item">
                                <Link to="/noticias/administracion/usuario" className="nav-link active">AGREGAR USUARIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/noticias/administracion/nuevas" className="nav-link active">NUEVAS NOTICIAS</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <form className="formAdmi">
                <h3>Buscar noticias</h3>
                <select name="select">
                    <option value="value1">todas las noticias</option>
                    <option value="value2" >Locales</option>
                    <option value="value3">Provinciales</option>
                </select>
                <button type="submit">buscar noticias</button>
            </form>
            <div className="admiMuestra">

                {admi.map((info, i) => {
                    return <InfoAdmi info={info} key={i} />
                })}


            </div>
        </div>
    )
}
