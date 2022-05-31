import "../Styles/footer.css"
import instagramLogo from "../archivosGraficos/logosSimples/instagramLogo.png"
import facebookLogo from "../archivosGraficos/logosSimples/facebookLogo.png"
import ubicacionLogo from "../archivosGraficos/logosSimples/ubicacionLogo.png"
import EmailLogo from "../archivosGraficos/logosSimples/emailLogo.png"
import federacionRural from "../archivosGraficos/logosColor/footer-logo_.png"
const footer=()=>{
    return(
        <footer className=" mt-5">
            <div className="container">

            
            <div className="row" >
            <div className="col-12 col-sm-12 col-md-7 col-xl-6 divCenter">
                    <p className="textoFooterNombre" >
                        Asociacion Agropecuaria de Jovenes Salto
                    </p>
                    {/* <p className="textoFooterNombre">
                        Federacion Rural de Jovenes
                    </p> */}
                    <img src={federacionRural}  alt="" />
                </div>
                
                
                <div className="col-12 col-sm-12 col-md-5 col-xl-6 pt-3 divCenter">
                        <span id="divContactanos">Contactanos</span>
                        
                        <div className="logoText" >
                            <a className=" infoEnlaces" href="https://www.instagram.com/aajsalto/?hl=es" >
                            <img src={instagramLogo} alt="" height="30 px" width="30 px" />
                            <p className="textoFooter"> @aajsalto</p>
                            </a>
                        </div>

                        <div className="logoText" >
                            <a href="https://www.facebook.com/AAJSALTO" className="infoEnlaces">
                                <img src={facebookLogo}  height="30 px" width="30px" alt="" />
                                <p className="textoFooter" > AAj Salto</p> 
                            </a>
                            
                        </div>
                        <div className="logoText" >
                            <img src={EmailLogo} alt=""  height={"30px"} width="30px" />
                            <p className="textoFooter "> aajSalto@gmail.com</p>
                        </div>
                        
                        <div className="logoText">
                            <img src={ubicacionLogo} alt="" height="30px" width="35px" />
                            <p className="textoFooter">Calle Amorin 55, Salto, Uruguay</p>
                        </div>
                        
                    
                </div>

            </div>
            </div>
        </footer>
    )
}
export default footer;