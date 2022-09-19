        
const Post=(props)=>{
    const post= props.post;
    
    return(
        <div className="contPost">
          <div className="card cardTamaño" >
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner" >
              <div className="carousel-item active" data-bs-interval="3000">
                <img src={post.img1} className="d-block w-100 imgActivitis" alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={post.img2} className="d-block w-100 imgActivitis" alt="..."/>
              </div>
              
            </div>
          </div>
          <img src={post.img} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.text}</p>
                
            </div>
            </div>
  
        </div>
    )
}
export default Post;


