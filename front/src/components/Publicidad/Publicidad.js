import React from 'react'
import './publicidad.css'

export const Publicidad = () => {
    return (
        <div className="agregarPublicidad">
            <h1 className="justify-content-center">Cargar publicidades</h1>
            <form className="formPubli">
                <div className="mb-3">
                    <label>Imagen de publicidad</label>
                    <input type="file" className="form-control" />
                </div>
                <div className="mb-3">
                    <label>Nombre</label>
                    <input type="text" className="form-control" />
                </div>
                <button id="publiBoton" className="btn btn-primary">Cargar</button>
            </form>

        </div>
    )
}
