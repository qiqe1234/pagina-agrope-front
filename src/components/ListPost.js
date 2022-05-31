
import Post from "./Post";
import "../Styles/activities.css";
const ListPost=()=>{
    
    const posteo1={
        title:"Se realizó en Salto el XXIII Congreso Anual de la Federación Rural de Jovenes",
        text:"El pasado fin de semana se realizó en Salto el XXIII Congreso Anual de la Federación Rural de Jovenes. Fuimos la institución anfitriona de este encuentro donde participaron alrededor de 100 jóvenes provenientes de distintas zonas de nuestro país."
    }
    
    return(
        <div >
            <div className="row divPosteos ">
                <div className=" col-xs-12 col-lg-4 stlLista">
                    <Post post={posteo1}/>
                </div>
                <div className=" col-xs-12 col-lg-4 stlLista">
                    <Post post={posteo1}/>
                </div>
                <div className=" col-xs-12  col-lg-4 stlLista">
                    <Post post={posteo1}/>
                </div>
                <div className="contPost col-xs-12  col-lg-11 stlLista">
                <div class="card m-3 " id="cardGrande">
                    <img src="https://i2.wp.com/lahoradelcampo.com.uy/site/wp-content/uploads/2017/10/IMG-20171003-WA0000.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{posteo1.title}</h5>
                        <p class="card-text">{posteo1.text}</p>
                        
                    </div>
                    </div>
                </div>

            </div>
          
        </div>
        
    )
}
export default  ListPost;