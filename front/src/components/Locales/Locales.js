import React from 'react'
import './locales.css'
// import { Noticia } from '../Noticia/Noticia'
// import futbol from '../../assets/image/futbol.jpg'
import { useState, useEffect } from 'react'
import { InfoMuestra } from '../InfoMuestra/InfoMuestra'
import { Propaganda } from '../Propaganda/Propaganda'

export const Locales = () => {


    const [local, setLocal] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(`http://localhost:3001/api/noticas/pedido/locales`)
        const data = await res.json()
        setLocal(data)
      }
      fetchData()
    }, [])


    return (
        <div className="localInfo">
            <div className="secciones">
                <h5>Noticias locales</h5>
            </div >
            <hr />
            <div className="local">
                <div className="localesInfo">

                    {local.map((info, i) => {
                        console.log(info.imagenPrincipal.nombre)
                        return <InfoMuestra info={info} key={i} />
                    })}


                </div>
                <div className="localPro">
                    <Propaganda />
                    <Propaganda />
                    <Propaganda />
                    <Propaganda />
                    <Propaganda />

                </div>
            </div>
        </div>
    )
}
