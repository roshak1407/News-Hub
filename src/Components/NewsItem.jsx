import image from '../assets/aaa.jpg';

const NewsItem = ({title , description , src , url}) => {
  return (
   <div className="card bg-dark text-light mb-2 d-inline-block my-2 mx-3 py-3 px-3" style={{maxWidth:"415px"}}>
    <img src={src?src:image} style={{height:"200px", width:"360px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0-90):"No News"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
      
    
  )
}

export default NewsItem
