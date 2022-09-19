import OvejaCorral1 from "../archivosGraficos/ContenidoSaltoOvino/OvejasCorral1.jpg"
import OvejaCorral2 from "../archivosGraficos/ContenidoSaltoOvino/OvejasCorral2.jpg"
import CorderoFAenado from "../archivosGraficos/ContenidoSaltoOvino/CorderoFaenado1.jpg"
import ExpoAvicola from "../archivosGraficos/ContenidoSaltoOvino/ExpoAvicola1.jpg"
import Asadores from "../archivosGraficos/ContenidoSaltoOvino/Asadores.jpg"
import variosCorderos from "../archivosGraficos/ContenidoSaltoOvino/VarioCorderosFaena.jpg"
import fotoJuraCorderos from "../archivosGraficos/ContenidoSaltoOvino/FotoJuraCorderos.jpeg"
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
                            <h3>Entrada Gratis</h3>
                            <ul>
                                <li>
                                    07:00 a 12:00 <span className="liItinerario">Concurso de Corderos Pesados</span> 
                                </li>
                                
                                <li>
                                    09:00 a 11:00 <span className="liItinerario">Charla Lombriz Roja</span>
                                    <ul>
                                        <li className="liSinPunto">Disertantes:</li>
                                        <li className="liSinPunto">-DCV.MSc.PhD Sergio Fierro ( Tec.transferencia SUL)</li>
                                        <li className="liSinPunto">-DCV Oscar Correa (Dpto Parasitología FVET- UDELAR) </li>
                                        <li className="liSinPunto">-DCV. MSc. PhD America Mederos ( INIA)</li>
                                    </ul>
                                </li> 
                                <li>
                                    14:30 <span className="liItinerario">Ceremonia de Inauguración</span>
                                </li>
                                <li>
                                    15:00 <span className="liItinerario">Concurso de Corderos Pesados </span> 
                                </li>
                               
                                <li>
                                    17:30 <span className="liItinerario">Mesa Redonda "Problemática de Perros"</span>  
                                    <ul>
                                        <li className="liSinPunto">
                                        Participa: INBA, PRODUCTORES, FISCALÍA, POLICÍA,
                                        SMVU,INTENDENCIA MUNICIPAL SALTO.
                                        </li>
                                    </ul>
                                </li>
                                <li> <spam className="liItinerario">Noche</spam></li>
                                <li>
                                    18:30 <span className="liItinerario">Campeonato de Truco</span> 
                                    <ul>
                                        <li className="liSinPunto">
                                        Ubicación: Rancho Jóvenes
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    20:30 <span className="liItinerario">Rancho Jóvenes (Cantina)</span>
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
                        <h3>Entrada Gratis</h3>
                            <ul>
                                <li>
                                    9:00 a 12:00 <span className="liItinerario">Concurso de Destrezas Ovinas</span> 
                                </li>
                                <li>
                                    12:00 <span className="liItinerario"> Demostración de Esquila y acondicionamiento de Lana</span>  
                                </li>
                                <li>
                                    14:30 <span className="liItinerario">Charla Sobre Carne Ovina</span>
                                    <ul>
                                        <li className="liSinPunto">¿Como es la calidad de la carne de cordero producida en
                                            nuestros sistemas pastoriles?</li>
                                        <li className="liSinPunto">Disertante:</li>
                                        <li className="liSinPunto">
                                            -DCV. Juan Franco
                                        </li>
                                    </ul>   
                                </li>
                                <li>
                                    15:00 <span className="liItinerario">Demostracion de Cortes Carnicos en Ovinos INAC</span> 
                                    <ul>
                                        <li className="liSinPunto">
                                        -DCV. Williams Hereu
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    17:00 <span className="liItinerario">Presentación del Programa de Erradicación de la Mosca de la Bichera</span> 
                                    <ul>
                                        <li className="liSinPunto">Disertantes:</li>
                                        <li className="liSinPunto">-DCV. Martín Altuna - Dirección de sanidad animal MGAP</li>
                                        <li className="liSinPunto">-DCV. Adolfo Casaretto</li>
                                    </ul>
                                </li>
                                <li><spam className="liItinerario">Noche</spam></li>
                                <li>
                                    18:30 <span className="liItinerario">Final de Campeonato de Truco</span>
                                    <ul>
                                        <li className="liSinPunto">Ubicación: Rancho Jóvenes</li>
                                    </ul>
                                </li>
                                <li>
                                    20:30 <span className="liItinerario"> Rancho Jovenes (Cantina)</span>
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
                        <h3>Entrada $150</h3>
                        <ul>
                            <li>
                                09:00 <span className="liItinerario">Jura Cordero Pesados - Jura Post Mortem</span> 
                                <ul>
                                    <li className="liSinPunto">
                                        Ubicación: Frigorífico Dayman Meat Uruguay (Av. Nicolás Solari)
                                    </li>
                                </ul>
                            </li>
                            <li>
                                08:00 a 12:00 <span className="liItinerario">Concurso de Asadores</span> 
                            </li>
                            
                            <li>
                                13:30 <span className="liItinerario"> Demostracion Resultados de tejedoras </span>
                            </li>
                            <li>
                                14:00 <span className="liItinerario">Demostración de Perros de Trabajo </span>
                                <ul>
                                    <li className="liSinPunto">Expocitores:</li>
                                    <li className="liSinPunto">-Christian Cumbay ( Razas: Kelpie)</li>
                                    <li className="liSinPunto">-Jacqueline Booth ( Razas: Border Collie)</li>
                                </ul>
                            </li>
                            <li>
                                16:00 <span className="liItinerario">Desfile de Mascotas</span>
                            </li>
                            <li><spam className="liItinerario">Noche</spam></li>
                            <li>
                                19:30 <span className="liItinerario">Rancho</span>
                            </li>
                            <li>
                                 <span className="liItinerario">Espectáculo de Cierre </span>
                                <ul>
                                    <li className="liSinPunto">-Fofinho do Acordeão</li>
                                    <li className="liSinPunto">-A Plena Samba</li>
                                    <li className="liSinPunto">-Fuelles Salteños</li>
                                </ul>
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
                    <div  className="contImgOvino">
                        <img className="imgFormato" src={variosCorderos} alt="" />
                    </div>
                    <div className="contImgOvino">
                        <img className="imgFormato" src={fotoJuraCorderos} alt="" />
                    </div>
                    <div>
                        
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
export default SaltoOvino;