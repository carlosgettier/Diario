import React from 'react'
import './nuevas.css'
import { InfoAdmi } from '../InfoAdmi/InfoAdmi'

export const Nuevas = () => {
    return (
        <div className="nuevas">
            <h1>NOTICIAS NO PUBLICADAS</h1>
            <div className="admiMuestra">
                <InfoAdmi />
                <InfoAdmi />
                <InfoAdmi />
                <InfoAdmi />
                <InfoAdmi />
                <InfoAdmi />
            </div>
        </div>
    )
}
