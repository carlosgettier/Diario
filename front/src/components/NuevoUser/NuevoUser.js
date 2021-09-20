import React from 'react'
import './nuevoUser.css'
import { useState} from 'react'
import axios from 'axios'

export const NuevoUser = () => {




    const [user, setuser] = useState({
        nombre: "",
        email: "",
        contraseña: ""
    })
    const handleInput = (e) => {
        setuser({
            ...user,
            [e.target.name]: e.target.value
        })


    }
    const handleForm = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/noticias/usuarios',
            data: {
                nombre: user.nombre,
                email: user.email,
                password: user.contraseña
            }


        }).then(res => console.log(res))

    }

    return (

        <div className="nuevoUser">
            <h1>agregar usuarios</h1>
            <form className="formUser" onSubmit={handleForm}>
                <div className="mb-3">
                    <label>nombre del usuario</label>
                    <input className="form-control" type="text"
                        onChange={handleInput}
                        name="nombre" />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input className="form-control" type="email"
                        onChange={handleInput}
                        name="email" />
                </div>
                <div className="mb-3">
                    <label>contaseña</label>
                    <input className="form-control" type="password"
                        onChange={handleInput}
                        name="contraseña" />
                </div>
                <button className="btn btn-primary" type="submit">agregar</button>
            </form>



        </div>


    )
}
