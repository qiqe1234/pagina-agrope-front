import { NavLink } from "react-router-dom";

const NavBar=()=>{
    return(
    <div>
        <ul> 
            <li>
                <NavLink to="/Activities">Actividades</NavLink>
            </li>
            <li>
                <NavLink to="/AboutUs">Sobre Nosotros</NavLink>
            </li>
            <li>
                <NavBar to="/Contact"> Contacto</NavBar>
            </li>
        </ul>
    </div>
    )
}
export default NavBar;