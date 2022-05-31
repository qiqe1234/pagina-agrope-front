import directiva1 from "../archivosGraficos/Directiva/directiva2.jpg"
import directiva2 from "../archivosGraficos/Directiva/directiva1.jpg"
import directiva3 from "../archivosGraficos/Directiva/directiva3.jpg"
import "../Styles/aboutStyles.css"

const AboutUs=()=>{
    return(
    <div className="container">
        
        <div className="divContentAbout">
        <h3 className="tituloAbout">Sobre Nosotros</h3>
        <p className="parrafoAbout">
                LA ASOCIACION AGROPECUARIA DE JOVENES DE SALTO es una institución
                privada de carácter gremial, que agrupa jóvenes vinculados al sector agropecuaria de la
                zona. Unidos todos en la tarea común de defender los intereses agrarios y fomentar
                sistemáticamente las energías de todas las fuerzas jóvenes del sector. No constituye un
                partido político ni aspira a la conquista del poder, aunque, por la amplitud misma de la
                acción económico-social que persigue, rompa a diario la actividad de la Asociación- los
                moldes de lo estrictamente económico y trascienda a lo moral, a lo político
            </p>
        </div>
        <div className="divContentAbout row">

            <h3 className="tituloAbout">Nuestros Objetivos</h3>
            <div className="divobjetivos col-lg-6">
                <p className="parrafoAbout">
                    - Afianzar en la juventud una auténtica conciencia ruralista, acorde con el real
                    destino del país, afirmando su personalidad y la dignidad de su profesión.
                </p>
                <p className="parrafoAbout">
                    - Gestionar ante los Poderes Públicos e Instituciones Oficiales o Privadas todas
                    aquellas medidas y recursos que favorezcan el desarrollo económico-social de la
                    juventud rural.
                </p>
                <p className="parrafoAbout">
                    - Tramitar ante el Consejo Directivo de la Federación Rural de Jóvenes todos los
                    asuntos que tengan relación con los intereses de la campaña y todos aquellos
                    que considere de interés gremial.
                </p>
                <p className="parrafoAbout">
                    - Orientar a la juventud hacia la capacitación técnica de todos sus aspectos y
                    divulgar entre los jóvenes rurales los conocimientos más útiles y métodos de
                    trabajo más racionales y prácticos que permitan un mejor desarrollo de las
                    actividades agropecuarias
                </p>
            </div>
            <div className="divobjetivos col-lg-6">
                <p className="parrafoAbout">
                    - Lograr una clara participación del joven rural en el tratamiento de los problemas
                    que afectan al sector agropecuario nacional.
                </p>
                
                <p className="parrafoAbout">
                    - Dedicar la atención y apoyo al fomento de asociaciones cooperativas
                    relacionadas con la explicación de las industrias rurales difundiendo sus alcances
                    y beneficios. 
                </p>
                <p className="parrafoAbout">
                    - Pugnar por la creación de fuentes de educación y cultura en el medio rural
                    tratando que en los programas de enseñanza sean incluidos conocimientos
                    teorico-practicos que capaciten al joven para llenar su función en el medio rural.
                </p>
                <p className="parrafoAbout">
                    - Defender y promover al joven trabajador rural la dignidad de su profesión y sus
                    derechos fundamentales.
                </p>
            </div>  
            
            
            

        </div>
        <div className="divContentAbout">
            <h3 className="tituloAbout">Directiva</h3>
            <p className="parrafoAbout">
                El Consejo Directivo es el órgano ejecutivo de la Asociación y está 
                compuesto por 4 titulares, 5 suplentes y 2 vocales que duran 1 año en sus funciones a 
                excepción del presidente quien permanece por 2 años.
            </p>
            
            <div className="row divContentDirectiva">
                <div className="col-12 col-md-12  col-xxl-4 divImgDirectiva">
                    <img className="imgDirectiva" src={directiva1} alt="" />
                </div>
                <div className="col-12 col-md-12 col-xxl-4 divImgDirectiva">
                    <img className="imgDirectiva" src={directiva2}  alt="" />
                </div>
                <div  className="col-12 col-md-12 col-xxl-4 divImgDirectiva">
                    <img className="imgDirectiva" src={directiva3}  alt="" />
                </div>
                
                
                
            </div>
        
        </div>
        
    </div>
    )
}
export default AboutUs;