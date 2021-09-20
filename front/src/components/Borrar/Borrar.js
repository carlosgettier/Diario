import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'


export const Borrar = () => {

    const historia = useHistory()

    const { id } = useParams()
    const [news, setnews] = useState({})
    const [img, setimg] = useState({})

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(`http://localhost:3001/api/noticias/buscar/${id}`)
        const data = await res.json()
        const rest = await fetch(`http://localhost:3001/api/noticias/imagen/${id}`)
        const datas = await rest.json()
        setimg(datas[0].nombre)
        setnews(data)
      }
      fetchData()
      // eslint-disable-next-line
    }, [])

    const handleClik = (e) => {
        console.log("borrando")
        let result = window.confirm("estas por borrar un dato definitivamente")
        if (result === true) {
          axios
            .delete(`http://localhost:3001/api/noticias/borrar/${id}`)
            .then(res => console.log(res));
        }
        historia.push("/noticias/administracion")

    }

    console.log(news)
    return (
        <div>
            <h1> borrar noticia</h1>
            <div className="container">
                <div className="card" >
                    <img src={'http://localhost:3001/' + img} className="card-img-top" alt="..." />
                    <div className="card-footer bg-secondary border-success"><h4>{news.tipo}</h4></div>
                    <div className="card-body">
                        <p className="card-text">{news.bajada}</p>
                        <button className="btn btn-primary "
                            onClick={handleClik}>borrar</button>


                    </div>
                </div>
            </div>

        </div>
    )
}
