import { NavLink } from "react-router-dom";
import logoAgrope from "../archivosGraficos/logoAgrope.png" 
import "../Styles/navHeader.css"
const NavBar=()=>{


    const divStyle={
        //backgroundColor:'rgba( 0, 100, 0,0.6)',
        fontWeight:"bold"
    }

    return(
    <div className=" " id="contenedorHeader" >
        <header className="container  " id="contHeader">
            
            <div className="row " >
                <div className="col-4 col-sm-3 col-xl-1 " >
            
                    <img src={logoAgrope}  width="100px" height="100px" className="d-inline-block align-text-top imgTamaño"/>   
                            
                </div>
                <div className="col-8 col-sm-9 col-xl-11 text-center d-done d-block " id="idTituloHeader"  >
                    
                    <h2 className=" tituloHeader">Asociacion Agropecuaria de Jovenes Salto</h2>
                </div>
                
            </div>
            
            
        </header>
        <div className=" " >
            <nav class="navbar navbar-expand-lg navbar-light navStyles mt-1">
                    <div class="container-fluid">
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse nav-center" id="navbarNav">
                            
                        <ul class="navbar-nav  fw-bold ">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/"><span className="navLink">Inicio</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/Activities"><span className="navLink">Actividades</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/AboutUs"><span className="navLink">Sobre Nosotros</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact"><span className="navLink">Contacto</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/SaltoOvino"><span className="navLink">Salto Ovino</span></NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>  
        </div>
        
    </div>
    
    )
}
export default NavBar;

