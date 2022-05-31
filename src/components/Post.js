        
const Post=(props)=>{
    const post= props.post;
    const divStyle={
      width: '18rem'
  }
    return(
        <div className="contPost">
          <div className="card " style={divStyle}>
          <img src="https://i2.wp.com/lahoradelcampo.com.uy/site/wp-content/uploads/2017/10/IMG-20171003-WA0000.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.text}</p>
                
            </div>
            </div>
  
        </div>
    )
}
export default Post;


