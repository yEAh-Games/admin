import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class BlogList extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
     
    	<div className="blog-page-area pd-bottom-80 go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-9 pd-top-50">
		        <div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/1.png"} alt="image" />
		          </div>
		          <div className="single-blog-details">
		            <div className="meta">
		              <span className="author">
		                <i className="fa fa-user" />
		                Nichel Jhon
		              </span>
		              <span className="date">
		                <i className="fa fa-calendar" />
		                25 Aug 2020
		              </span>
		              <span className="comments">
		                <i className="fa fa-comments" />
		                Comments (05)
		              </span>
		            </div>
		            <h3><Link to="/blog-details">Inspired Design Decisions With Herb Typography Can Be As Exciting As Illustration &amp; Photog</Link></h3>
		            <p>But must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itse</p>
		            <Link className="btn btn-base" to="/blog-details">Learn More</Link>
		          </div>
		        </div>
		        <div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/2.png"} alt="image" />
		          </div>
		          <div className="single-blog-details">
		            <div className="meta">
		              <span className="author">
		                <i className="fa fa-user" />
		                Nichel Jhon
		              </span>
		              <span className="date">
		                <i className="fa fa-calendar" />
		                25 Aug 2020
		              </span>
		              <span className="comments">
		                <i className="fa fa-comments" />
		                Comments (05)
		              </span>
		            </div>
		            <h3><Link to="/blog-details">What Should You Do When A Web Design Trend Becomes Too Popular? Typography</Link></h3>
		            <p>But must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itse</p>
		            <Link className="btn btn-base" to="/blog-details">Learn More</Link>
		          </div>
		        </div>
		        <div className="single-blog-inner single-blog-inner-2" style={{background: 'url('+publicUrl+'assets/img/blog/01.png)'}}>
		          <div className="single-blog-details">
		            <div className="meta">
		              <span className="author">
		                <i className="fa fa-user" />
		                Nichel Jhon
		              </span>
		              <span className="date">
		                <i className="fa fa-calendar" />
		                25 Aug 2020
		              </span>
		              <span className="comments">
		                <i className="fa fa-comments" />
		                Comments (05)
		              </span>
		            </div>
		            <h3><Link to="/blog-details">Visual Design Language The Building Blocks Of Design  Web Design Trend Becomes</Link></h3>
		          </div>
		        </div>
		        <div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/3.png"} alt="image" />
		            <Link className="video-play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><i className="fa fa-play" /></Link>
		          </div>
		          <div className="single-blog-details">
		            <div className="meta">
		              <span className="author">
		                <i className="fa fa-user" />
		                Nichel Jhon
		              </span>
		              <span className="date">
		                <i className="fa fa-calendar" />
		                25 Aug 2020
		              </span>
		              <span className="comments">
		                <i className="fa fa-comments" />
		                Comments (05)
		              </span>
		            </div>
		            <h3><Link to="/blog-details">How Increase Mobile Conversions With Category Page DesignTrend Becomes Typography</Link></h3>
		            <p>But must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itse</p>
		            <Link className="btn btn-base" to="/blog-details">Learn More</Link>
		          </div>
		        </div>
		        <div className="single-blog-inner single-blog-inner-3">
		          <div className="single-blog-details">
		            <div className="meta">
		              <span className="author">
		                <i className="fa fa-user" />
		                Nichel Jhon
		              </span>
		              <span className="date">
		                <i className="fa fa-calendar" />
		                25 Aug 2020
		              </span>
		              <span className="comments">
		                <i className="fa fa-comments" />
		                Comments (05)
		              </span>
		            </div>
		            <h3><Link to="/blog-details">Inspired Design Decisions With Otto Storch When Idea Copy Art And Typography</Link></h3>
		            <p>But must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itse</p>
		            <Link className="btn btn-base" to="/blog-details">Learn More</Link>
		          </div>
		        </div>
		        <nav className="mt-4">
		          <ul className="pagination">
		            <li className="page-item prev"><a className="page-link" href="#"><i className="fa fa-angle-left" /></a></li>
		            <li className="page-item active"><a className="page-link" href="#">1</a></li>
		            <li className="page-item"><a className="page-link" href="#">2</a></li>
		            <li className="page-item"><a className="page-link" href="#">3</a></li>
		            <li className="page-item"><a className="page-link" href="#">4</a></li>
		            <li className="page-item next"><a className="page-link" href="#"><i className="fa fa-angle-right" /></a></li>
		          </ul>
		        </nav> 
		      </div>
		       <Sidebar />
		    </div>
		  </div>
		</div>


    )
  }
}

export default BlogList;
