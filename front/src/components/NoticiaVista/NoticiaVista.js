import React from 'react'
import './noticiaVista.css'
import { useParams } from 'react-router-dom'
import { Propaganda } from '../Propaganda/Propaganda'
// import dolar from '../../assets/image/dolar.webp'
import { useState, useEffect } from 'react'

export const NoticiaVista = () => {
  const { id } = useParams()
  

  const [noticia, setNoticia] = useState({})
  
  const [img, setimg] = useState({})
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3001/api/noticias/buscar/${id}`)
      const data = await res.json()
      const rest = await fetch(`http://localhost:3001/api/noticias/imagen/${id}`)
      const datas = await rest.json()
      setimg(datas[0].nombre)
      setNoticia(data)
      console.log(datas)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="desarrolloNot">
            <div className="notdesarrollo">
                <div className="notSeccion">
                    <h5>Noticias {noticia.tipo}</h5>
                </div >
                <h1>{noticia.titulo}</h1>
                <img src={'http://localhost:3001/' + img} alt={noticia.titulo} />
                <p>{noticia.desarrollo}</p>


            </div>
            <div className="notPropaganda">
                <Propaganda />
                <Propaganda />
                <Propaganda />
                <Propaganda />
            </div>
        </div>
    )
}
