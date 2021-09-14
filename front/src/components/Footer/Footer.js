import React from 'react'
import './footer.css'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footerPrimera">
                <div className="logoFooter">
                    <h1>JUGLAR</h1>
                    <p>Noticias</p>
                    <p>Somos el medio de comunicación independiente por excelencia y tradición en esta región. Nacido hace 106 años, nuestra cobertura abarca un amplio territorio situado entre las provincias de Córdoba y Santa Fe, en el corazón de la República Argentina.</p>
                </div>
                <div className="footerInstitucional">
                    <h2>INSTITUCIONALES</h2>
                    <p>¿Quiene somos?</p>
                    <p>Contactanos</p>
                    <p>¿Quiene somos?</p>

                </div>
                <div className="footerContactanos">
                    <h2>CONTACTANOS</h2>
                    <p>Bv 9 de julio 2015</p>
                    <p>tel: 1178563401</p>
                    <p>email:juglar@gmail.com</p>

                </div>

            </div>
            <div className="footerRedes">
                <div className="contenedorFooter">
                    <p className="redF"><i class="fab fa-facebook-f"></i></p>
                    <p className="redT"><i class="fab fa-twitter"></i></p>
                    <p className="redI"><i class="fab fa-instagram"></i></p>
                </div>
            </div>
        </div>
    )
}
