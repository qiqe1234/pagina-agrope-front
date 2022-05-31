
import "../Styles/contactStyles.css"
import instagramLogo from "../archivosGraficos/logosSimples/instagramLogo.png"
import facebookLogo from "../archivosGraficos/logosSimples/facebookLogo.png"
import sponsor1 from "../archivosGraficos/fotosActividadesAASJ/sponsor1.jpg"

const Contact=()=>{
    return(
        <div class="container">
            <h1 id="tituloContact">Contactanos</h1>
            <div >
                <img src={sponsor1} id="imgSponsor" alt="" />
            </div>
            <div >
                <p id="idSubTituloContatc">¡Contactanos para  unirte como socio, conocernos o patrocinarnos!</p>
            </div>
            <div class="row ">
                <div className="col-12 col-md-4 col-lg-4 InfoComunicacion">
                    <h3>Nos encontramos en:</h3>
                    <p>Nuestra sede se ubica en Calle Amorin 55,<br/>
                    Dentro de La Asociacion Agropecuaria de Salto</p>

                </div>
                <div className="col-12 col-md-4 col-lg-4 InfoComunicacion">
                    <h3>Vista Nuestras Redes Sociles </h3>
                    <div className="logoTextContact" >
                            <a className=" infoEnlaces" href="https://www.instagram.com/aajsalto/?hl=es" >
                            <img src={instagramLogo} alt="" height="30 px" width="30 px" />
                            <p className="textoContact"> @aajsalto</p>
                            </a>
                        </div>

                        <div className="logoTextContact" >
                            <a href="https://www.facebook.com/AAJSALTO" className="infoEnlaces">
                                <img src={facebookLogo}  height="30 px" width="30px" alt="" />
                                <p className="textoContact" > AAj Salto</p> 
                            </a>
                            
                        </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 InfoComunicacion">
                    <h3>O Comunicate a:</h3>
                    <p>Tel: 099380990</p>
                    <p>mail: aajSalto@gmail.com</p>
                </div>
               
            </div>
        </div>

    )
    }    
export default Contact;