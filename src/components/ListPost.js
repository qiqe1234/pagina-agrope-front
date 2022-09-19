
import Post from "./Post";
import "../Styles/activities.css";


//Actividades1
import mercedes1 from "../archivosGraficos/fotosActividadesAASJ/Actividades1/mercedes1.jpg"
import mercedes2 from '../archivosGraficos/fotosActividadesAASJ/Actividades1/mercedes2_A1.jpeg'
//Actividades2
import jugetesA2 from '../archivosGraficos/fotosActividadesAASJ/Actividades2/JuguetesA2.jpg'
import ropaA2 from '../archivosGraficos/fotosActividadesAASJ/Actividades2/ropaA2.jpeg'
//Actividades3
import bienvenidaA3 from "../archivosGraficos/fotosActividadesAASJ/Actividades3/bienvenidaA3.jpg"
import bienvenidaA3_1 from '../archivosGraficos/fotosActividadesAASJ/Actividades3/bienvenidaA3_1.jpg'
//Actividades4
import congresoA4_1 from '../archivosGraficos/fotosActividadesAASJ/Actividades4/congresoA4_1.jpg'
import congresoA4_2 from '../archivosGraficos/fotosActividadesAASJ/Actividades4/congresoA4_2.png'

const ListPost=()=>{
    
    const posteo1={
      
        title:"Expo Activa Mercedes",
        text:"Se realizó una integración con gremiales federadas en la cual se asistió a diferentes actividades las cuales fueron llevada a cabo por instituciones como INIA, MGAP, Asociación Rural de Soriano, Fagro, Fvet.",
        img1:mercedes1,
        img2:mercedes2
    }
    const posteo2={
        
        title:"Voluntariados 2022",
        text:"Se realizó una recolección de ropa de abrigo las cuales fueron entregadas a refugios y Asilo de ancianos \n Además, el 5 de enero se hicieron entregas de juguetes por el día de reyes magos.",
        img1:jugetesA2,
        img2:ropaA2
    }
    const posteo3={
        
        title:"Charla de bienvenida a los nuevos integrantes ",
        text:"El viernes 29 de abril, Se llevo a cabo una charla de bienvenida a los nuevos integrantes, en la misma se le hizo una presentación power point sobre la AAJS, funcionamiento, actividades que se realiza, estatuto, etc. Se concluyo la charla con una cena entre todos los presentes ",
        img1:bienvenidaA3,
        img2:bienvenidaA3_1
    }
    const posteo4={
        
        title:"Congreso de Federación Rural ",
        text:"Una delegación de la AAJS conformada por El presidente y dos delegados asistieron al 105° congreso de Federación Rural que se celebró en Tacuarembó \n El mismo fue llevado a cabo 27 y 28 de mayo, se realizo integración de las agropecuarias federadas y una mesa común con autoridades de gobierno.",
        img1:congresoA4_2,
        img2:congresoA4_1
    }

    
    return(
        <div>
            <div className="row divPosteos ">
                <div className="contPost col-xs-12  col-lg-11 stlLista">
                <div class="card m-3 " id="cardGrande">
                    <img src={posteo4.img1} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{posteo4.title}</h5>
                        <p class="card-text">{posteo4.text}</p>
                    </div>
                    </div>
                </div>

                <div className=" col-xs-12 col-lg-4 stlLista">
                    <Post post={posteo1}/>
                </div>
                <div className=" col-xs-12 col-lg-4 stlLista">
                    <Post post={posteo2}/>
                </div>
                <div className=" col-xs-12  col-lg-4 stlLista">
                    <Post post={posteo3}/>
                </div>
                
            </div>
        </div>
        
    )
}
export default  ListPost;