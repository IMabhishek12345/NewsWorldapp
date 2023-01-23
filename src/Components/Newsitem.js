import React, { Component } from 'react'

export default class Newsitem extends Component {
   
  render() {
    let {title,description,imgUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        
         <div className="card">
         
         <div className="card-body">
         <div style={{display:"flex",
         justifyContent: "flex-end",
         position: "absolute",
         right:0}}>
         <span className="badge rounded-pill bg-danger">
          {source}
         </span>
         </div>
         <img src={imgUrl?imgUrl:"https://www.insightsonindia.com/wp-content/uploads/2022/12/james_web-1024x490.jpg"} className="card-img-top" alt="..."/>
         <h5 className='card-title'>{title}</h5>
         <p className="card-text">{description}...</p>
         <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
         <a rel="noreferrer" href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
        
}
    
