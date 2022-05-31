import OvejaCorral1 from "../archivosGraficos/ContenidoSaltoOvino/OvejasCorral1.jpg"
import OvejaCorral2 from "../archivosGraficos/ContenidoSaltoOvino/OvejasCorral2.jpg"
import CorderoFAenado from "../archivosGraficos/ContenidoSaltoOvino/CorderoFaenado1.jpg"
import ExpoAvicola from "../archivosGraficos/ContenidoSaltoOvino/ExpoAvicola1.jpg"
import Asadores from "../archivosGraficos/ContenidoSaltoOvino/Asadores.jpg"
import "../Styles/saltoOvinoStyles.css"
const SaltoOvino=()=>{
    return(
        <div className="container">
            <h2 className="titulo">Salto Ovino</h2>
            <h3 className="subtitulo">Cronograma</h3>
            <div className="row">
                <div className="col-12 col-md-12 col-xl-7 col">

            
                    <div className="divListasCronograma">
                            <h3>Viernes 5 de Agosto</h3>
                            <ul>
                                <li>
                                    07:00 a 12:00 <span className="liItinerario">Concurso de Corderos Pesados</span> 
                                </li>
                                <li>
                                    09:00 a 11:00 <span className="liItinerario">Charla Lombriz Roja</span>
                                </li>
                                <li>
                                    15:00 <span className="liItinerario">Jura de Corderos</span> 
                                </li>
                                <li>
                                    17:00 <span className="liItinerario">Inaguracion</span>
                                </li>
                                <li>
                                    17:30 <span className="liItinerario">Mesa Redonda</span>  
                                </li>
                                <li>
                                    18:00 <span className="liItinerario">Bienestar Animal</span>
                                </li>
                                <li>
                                    19:30 <span className="liItinerario">Rancho</span> 
                                </li>
                                <li>
                                    20:30 <span className="liItinerario">Campionato de Truco</span>
                                </li>
                            </ul>
                    </div>
                    <div className="FotoXs">
                        <div className="imgXs" >
                            <img className="imgFormato" src={OvejaCorral2} alt="" />
                        </div>
                        <div  className="imgXs desapareceXs">
                            <img className="imgFormato" src={OvejaCorral1} alt="" />
                         </div>
                    </div>
                    <div className="divListasCronograma">
                        <h3>Sabado 6 de Agosto</h3>
                            <ul>
                                <li>
                                    9:00 a 12:00 <span className="liItinerario">Concurso de Destresas Ovinas</span> 
                                </li>
                                <li>
                                    13:00 a 14:00 <span className="liItinerario">Esquila y acondicionamiento de Lana</span>  
                                </li>
                                <li>
                                    14:30 <span className="liItinerario">Charla Cortes Carnicos Ovinos</span>   
                                </li>
                                <li>
                                    15:00 <span className="liItinerario">Demostracion de Cortes Carnicos en Ovinos INAC</span> 
                                </li>
                                <li>
                                    17:00 <span className="liItinerario">Charla Mosca de la Vichera</span> 
                                </li>
                                <li>
                                    19:30 <span className="liItinerario">Rancho</span>
                                </li>
                                <li>
                                    20:30 <span className="liItinerario"> Campionato de Truco</span>
                                </li>
                            </ul>
                    </div>
                    <div className="FotoXs">
                        <div className="imgXs" >
                            <img className="imgFormato" src={Asadores} alt="" />
                        </div>
                        <div className="imgXs desapareceXs" >
                            <img className="imgFormato" src={ExpoAvicola} alt="" />
                        </div>
                    </div>
                    <div className="divListasCronograma">
                        <h3>Domingo 7 de Agosto</h3>
                        <ul>
                            <li>
                                09:00 <span className="liItinerario">Jura Cordero Post Morten</span> 
                            </li>
                            <li>
                                08:00 a 12:00 <span className="liItinerario">Concurso de Asadores</span> 
                            </li>
                            <li>    
                                13:00 <span className="liItinerario">Resultados Post Morten </span> 
                            </li>
                            <li>
                                13:30 <span className="liItinerario"> Demostracion Resultados de tejedoras </span>
                            </li>
                            <li>
                                14:00 <span className="liItinerario">Demostarcion de Perros de Travajo </span>
                            </li>
                            <li>
                                16:00 <span className="liItinerario">Desfile de Mascotas</span>
                            </li>
                            <li>
                                17:30 <span className="liItinerario">Show de Cierre </span>
                            </li>
                            <li>
                                19:30 <span className="liItinerario">Rancho</span>
                            </li>
                        </ul>
                    </div> 
            
                </div>
                <div className="col col-md-12  col-xl-5  mt-5">
                    
                    <div  className="contImgOvino">
                            <img className="imgFormato" src={OvejaCorral1} alt="" />
                    </div>
                    <div  className="contImgOvino">
                        <img className="imgFormato" src={OvejaCorral2} alt="" />
                    </div>
                    <div  className="contImgOvino">
                        <img className="imgFormato" src={CorderoFAenado} alt="" />
                    </div>
                    <div  className="contImgOvino">
                        <img className="imgFormato" src={Asadores} alt="" />
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
export default SaltoOvino;