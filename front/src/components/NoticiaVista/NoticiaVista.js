import React from 'react'
import './noticiaVista.css'
import { Propaganda } from '../Propaganda/Propaganda'
import dolar from '../../assets/image/dolar.webp'

export const NoticiaVista = () => {
    return (
        <div className="desarrolloNot">
            <div className="notdesarrollo">
                <div className="notSeccion">
                    <h5>Noticias locales</h5>
                </div >
                <h1>Se renueva el cupo de US$ 200: cómo sacar la certificación negativa y saber si en septiembre podés comprar
                </h1>
                <img src={dolar} />
                <p>Comienza un nuevo mes y con éste se renueva la posibilidad de volver a comprar el cupo de US$ 200 del llamado dólar ahorro o solidario, los que se compran en el mercado oficial e incluyen el impuesto PAIS del 30% y el que retiene el 35% en concepto de anticipo del impuesto a las Ganancias. Por este último tributo se puede pedir el reintegro, sobre todo para aquellos que dan exentos de ganancias.En agosto, y a sólo dos semanas de las elecciones, el dólar solidario llegó por primera vez a los $ 170, unos 12 pesos menos que el blue que cerró el mes en $ 182, mismo nivel que se sostiene desde hace 10 días. Y así la brecha entre el paralelo y el dólar mayorista, que cotiza a $ 97,72, se mantiene amplia en 86%.

                    El dólar solidario abre el mes en casi $170, y registra un 15% de alza en lo que va del año contra más de 21% de los dólares "libres", como el Bolsa o MEP y el contado con liquidación.</p>
                <p>

                    Esa diferencia de 12 pesos -entre el dólar que se consigue en las llamadas cuevas y el oficial- sumado a la cercanía electora son las dos variables que reactivan el interés por el billete que controla el Gobierno y el apetito va más allá de los impuestos. Los datos refuerzan esta premisa, según datos del Banco Central, en julio hubo 690.000 personas, un 56% más que en el mes anterior, que compraron US$ 130 millones por esta vía.

                    Pero más allá del mayor interés por adquirir estas divisas, el acceso sigue mantienen algunas restricciones, e inclusive este mes se suma una más.La nueva restricción está dirigida a los monotributistas que desde hace unos días pueden sacar el crédito a tasa 0% que propone el Gobierno para afrontar la dura situación postpandemia.

                    "Una vez que hubieran accedido al beneficio y hasta la cancelación total del crédito, los beneficiarios no podrán: acceder al Mercado Único y Libre de Cambios para realizar operaciones de formación de activos externos; realizar ventas en el país de títulos valores en moneda extranjera o canjes de títulos valores por otros activos externos, ni transferirlos a entidades del exterior", detalla la AFIP.</p>
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
