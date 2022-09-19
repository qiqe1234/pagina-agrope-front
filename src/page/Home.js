import Pibes from "../archivosGraficos/fotosActividadesAASJ/FotDeLosPibes.jpeg"
import Grupal from "../archivosGraficos/fotosActividadesAASJ/fotoGrupal.jpeg"
import Corderitos from "../archivosGraficos/fotosActividadesAASJ/FotoCorderitos.jpeg"
import FotoCampo from "../archivosGraficos/Directiva/fotoCampo.jpg"
import rancho from "../archivosGraficos/fotosActividadesAASJ/rancho.jpeg"
import "../Styles/home.css"
const Home=()=>{
    
    return(       
           
        <div className="container ">
            {/* <div id="idTituloHome">
                <h2 className="tituloHome">Asociación Agropecuaria de Jóvenes Salto </h2>
            </div> */}
            <div id="carouselExampleFade" class="carousel slide carousel-fade  mt-4 "  data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <img src={FotoCampo} class="d-block w-100 idImgHome" alt="..."/>
                        <div className="carousel-caption  d-xs-block">
                        <h1 className="tituloHome">¿Quienes Somos?</h1>
                            <h5 className="textHome">Pertenecemos a una institución sin fines de lucro, orientada a la defensa y formación de jóvenes del sector agropecuario. </h5>
                        
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src={FotoCampo} class="d-block w-100 idImgHome" alt="..."/>
                        <div className="carousel-caption d-xs-block ">
                        <h1 className="tituloHome">¿Que hacemos?</h1>
                            <h5 className="textHome">Apuntamos a actividades de capacitación, integración intra e interdepartamental con otros grupos y voluntariado vinculados con la juventud rural</h5>
                        
                        </div>
                    </div>
                    
                </div>
                {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> */}
                </div>

            
             {/* <div className=" mt-5">
                <h3 className="tituloHome">¿Quienes Somos?</h3>
                <p className="textHome">
                Pertenecemos a una institución sin fines de lucro, orientada a la defensa y formación de jóvenes del sector agropecuario.
                </p>
                 <br/>
                <br/>
                <h3 className="tituloHome">¿Que Hacemos?</h3>
                <p className="textHome">
                    Apuntamos a actividades de capacitación, integración intra e interdepartamental con otros grupos y voluntariado vinculados con la juventud rural.
                </p>
            </div>  */}

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
                        <p>El día 25 de septiembre se realizó un remate de ovinos por parte del escritorio Correa y San Román en el cual 
                            <br/>
                            Integrantes de A.A.J.S. fueron invitados.  
                        </p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={Grupal} className="d-block w-100 stlImagenes"  />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Integrantes de la Asociación Agropecuaria de Jóvenes de Salto </h5>
                        
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={Corderitos} className="d-block w-100 stlImagenes"  />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>"El Rancho" </h5>
                        <p>Contamos con un espacio el cual está ubicado en el predio de LA Asociación Agropecuaria de Salto el cual tiene el nombre "El Rancho". Es el lugar en donde realizamos distintas actividades . </p>
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
                        -El siguiente 5, 6, 7 de agosto de 2022 se realizará El Salto Ovino<br/>

                    </p>
                    <p className="mt-3" style={{color:"white"}}>
                        -Desde el 5 de mayo hasta el 15 de junio se estará realizando una campaña de recolección de abrigos para los más necesitados 
                    </p>


                </div>
            </div>

            
           
        </div>
    )
}

export default Home;