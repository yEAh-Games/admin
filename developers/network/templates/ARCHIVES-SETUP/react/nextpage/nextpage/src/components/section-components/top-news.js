import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TobNews extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="top-area pd-top-75 pd-bottom-50 go-top">
			  <div className="container">
			    <div className="section-title">
			      <div className="row">
			        <div className="col-6">
			          <h6 className="title">Top News</h6>
			        </div>
			        <div className="col-6 text-right">
			          <Link className="btn-read-more" to="/blog">See More <i className="la la-arrow-right" /></Link>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/34.png"} alt="img" />
			            <Link className="tag-base tag-red" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <ul>
			                <li><i className="fa fa-clock-o" />08.22.2020</li>
			                <li><i className="fa fa-user" />John Lambert</li>
			              </ul>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/35.png"} alt="img" />
			            <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <ul>
			                <li><i className="fa fa-clock-o" />08.22.2020</li>
			                <li><i className="fa fa-user" />John R.bert</li>
			              </ul>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/36.png"} alt="img" />
			            <Link className="tag-base tag-green" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <ul>
			                <li><i className="fa fa-clock-o" />08.22.2020</li>
			                <li><i className="fa fa-user" />R. Lambert</li>
			              </ul>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/37.png"} alt="img" />
			            <Link className="tag-base tag-purple" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <ul>
			                <li><i className="fa fa-clock-o" />08.22.2020</li>
			                <li><i className="fa fa-user" />John Lambert</li>
			              </ul>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default TobNews