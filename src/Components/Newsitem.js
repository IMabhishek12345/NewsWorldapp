import React, { Component } from 'react'

export default class Newsitem extends Component {
   
  render() {
    let {title,description,imgUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        
         <div className="card">
         <img src={imgUrl?imgUrl:"https://www.insightsonindia.com/wp-content/uploads/2022/12/james_web-1024x490.jpg"} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h5 className="card-title">{title}... <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "88%",zIndex:1}}>
          {source}
         <span class="visually-hidden">unread messages</span>
         </span></h5>
         <p className="card-text">{description}...</p>
         <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
         <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
        
}
    
