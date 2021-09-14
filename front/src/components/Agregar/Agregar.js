import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './agregar.css'
import axios from 'axios'

export const Agregar = () => {

    const historia = useHistory()

    const [datos, setDatos] = useState({
        titulo: '',
        bajada: '',
        noticia: '',
        principal: '',
        secundaria: '',
        tipo: ''
    })
    const [img, setImg] = useState(null)
    const handleInput = (e) => {


        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })

    }
    const handleImg = (e) => {
        setImg(
            e.target.files[0]
        )
    }
    const enviarDatos = (e) => {
        e.preventDefault()
        console.log(datos)
        const data = ({ ...datos, imagen: img })
        console.log(data.imagen)


        const formDate = new FormData()
        formDate.append('image', data.imagen)
        formDate.append('titulo', data.titulo)
        formDate.append('bajada', data.bajada)
        formDate.append('desarrollo', data.noticia)
        formDate.append('portada', data.portada)
        formDate.append('aprobada', data.secundaria)
        formDate.append('tipo', data.select)
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/noticias',
            data: formDate


        }).then(res => console.log(res))

        historia.push("/noticias/administracion")

    }


    return (
        <div className="agregar">
            <h1>AGREGAR UNA NOTICIA</h1>
            <div className="container">

                <form className="formAgregar" onSubmit={enviarDatos}>
                    <div className="mb-3">
                        <label for="titulo">Titulo de la noticia</label>
                        <input className="form-control" name="titulo" type="text" id="titulo"
                            onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label>Bajada</label>
                        <input className="form-control"
                            name="bajada" type="text"
                            onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label>Imagen</label>
                        <input className="form-control"
                            name="imagen" type="file"
                            onChange={handleImg} />
                    </div>
                    <div className="mb-3">
                        <label>Noticia</label>
                        <textarea name="noticia" className="form-control"
                            onChange={handleInput}></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <label> <input name="principal" type="checkbox"
                            onChange={handleInput} />Portada principal(es una sola notica)</label>

                    </div>
                    <div className="mb-3 form-check">
                        <label>
                            <input name="secundaria" type="checkbox"
                                onChange={handleInput} /> portada secundaria
                        </label>
                    </div>
                    <div className="mb-3">
                        <label>tipo de noticia</label>
                        <select name="tipo" className="form-control" name="select"
                            onChange={handleInput}>
                            <option value="#">todas las noticias</option>
                            <option value="1" >Locales</option>
                            <option value="2">Provinciales</option>
                            <option value="3">Nacionales</option>
                            <option value="4">Deporte</option>
                            <option value="5">Cultura</option>
                            <option value="6">Turismo</option>
                        </select>
                    </div>
                    <button className="btn btn-primary btn-sm" type="submit">subir noticia</button>
                </form>
            </div>
        </div >
    )
}
