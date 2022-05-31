import Pibes from "../archivosGraficos/fotosActividadesAASJ/FotDeLosPibes.jpeg"
import Grupal from "../archivosGraficos/fotosActividadesAASJ/fotoGrupal.jpeg"
import Corderitos from "../archivosGraficos/fotosActividadesAASJ/FotoCorderitos.jpeg"
import rancho from "../archivosGraficos/fotosActividadesAASJ/rancho.jpeg"
import "../Styles/home.css"
const Home=()=>{
    
    return(       
           
        <div className="container ">
            <div id="idTituloHome">
                <h2 className="tituloHome">Asociacion Agropecuaria de Jovenes Salto </h2>
            </div>
            
            <div className=" mt-5">
                <h3 className="tituloHome">¿Quienes Somos?</h3>
                <p className="textHome">
                Pertenecemos a una institución sin fines de lucro, orientada a la defensa y formación de jóvenes del sector agropecuario.
                </p>
                 <br/>
                <br/>
                <h3 className="tituloHome">¿Que Hacemos?</h3>
                <p className="textHome">
                Apuntamos a actividades de capacitación, integración intra e inter-departamental con otros grupos y voluntariado vinculados con la juventud rural.
                </p>
            </div>

            <div className="row">
                <div id="carouselExampleCaptions" className="col-12 col-sm-12 col-md-12  col-xl-9 carousel slide mt-5 " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={Pibes} className="d-block w-100 stlImagenes" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Remate de Ovinos</h5>
                        <p>El dia 25 de Septiembre se realizo un remate de ovinos por parte de el escritorio Correa y  San Roman en el cual 
                            <br/>
                            Integrantes de A.A.J.S. fueron invitados.  
                        </p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={Grupal} className="d-block w-100 stlImagenes"  />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Integratntes de la Asociacion Agropecuaria de Jovenes de Salto </h5>
                        
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={Corderitos} className="d-block w-100 stlImagenes"  />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>"El Rancho" </h5>
                        <p>Contamos con un espacio el cual esta ubicado en el predio de LA Asociacion Agropecuaria de Salto el cual tiene el nombre "El Rancho". Es el lugar en <br/>donde realizamos distintas actividades . </p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-xl-3 mt-5   "  id="Novedades" >
                    <h3 className="text-center" style={{color:"white"}}>Novedades</h3>
                    <p className="mt-3" style={{color:"white"}}> 
                        -El siguiente 5, 6, 7 de Agosto de 2022 se realizara El Salto Ovino<br/>

                    </p>
                    <p className="mt-3" style={{color:"white"}}>
                        -Desde el 5 de mayo hasta el 15 de junio se estara realizando una campaña de recolexion de abrigos para los mas necesitados 
                    </p>


                </div>
            </div>

            
           
        </div>
    )
}

export default Home;