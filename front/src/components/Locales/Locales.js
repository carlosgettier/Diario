import React from 'react'
import './locales.css'
import { Noticia } from '../Noticia/Noticia'
import futbol from '../../assets/image/futbol.jpg'
import { useState } from 'react'
import { InfoMuestra } from '../InfoMuestra/InfoMuestra'
import { Propaganda } from '../Propaganda/Propaganda'

export const Locales = () => {


    return (
        <div className="localInfo">
            <div className="secciones">
                <h5>Noticias locales</h5>
            </div >
            <hr />
            <div className="local">
                <div className="localesInfo">
                    <InfoMuestra />

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
