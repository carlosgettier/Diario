import React from 'react'
import { Propaganda } from '../Propaganda/Propaganda'
import { useEffect, useState } from 'react'
import { InfoMuestra } from '../InfoMuestra/InfoMuestra'

export const Nacionales = () => {

    const [local, setLocal] = useState([])

    useEffect(async () => {
        const res = await fetch(`http://localhost:3001/api/noticas/pedido/nacionales`)
        const data = await res.json()
        setLocal(data)


    }, [])


    return (
        <div className="localInfo">
            <div className="secciones">
                <h5>Noticias Nacionales</h5>
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
