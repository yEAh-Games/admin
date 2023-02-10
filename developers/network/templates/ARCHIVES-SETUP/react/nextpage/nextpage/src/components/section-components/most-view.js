import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class MostViewed extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="most-view-news bg-black pd-top-75 pd-bottom-80">
			  <div className="container">
			    <div className="section-title style-white pb-3 text-center">
			      <h6 className="title">Most View News</h6>
			      <p>This is Optional Subtitle Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			    </div>
			    <div className="most-view-slider owl-carousel owl-theme">
			      <div className="item">
			        <div className="single-most-view-inner">
			          <div className="single-post-wrap style-overlay">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/slider/1.png"} alt="img" />
			            </div>
			            <div className="details">
			              <div className="post-meta-single">
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              <div className="post-meta-single mb-0">
			                <ul>
			                  <li>By IJM NH </li>
			                  <li>JUNE 21 , 2020</li>
			                </ul>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="item">
			        <div className="single-most-view-inner">
			          <div className="single-post-wrap style-overlay">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/slider/2.png"} alt="img" />
			            </div>
			            <div className="details">
			              <div className="post-meta-single">
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              <div className="post-meta-single mb-0">
			                <ul>
			                  <li>By IJM NH </li>
			                  <li>JUNE 21 , 2020</li>
			                </ul>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="item">
			        <div className="single-most-view-inner">
			          <div className="single-post-wrap style-overlay">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/slider/3.png"} alt="img" />
			            </div>
			            <div className="details">
			              <div className="post-meta-single">
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              <div className="post-meta-single mb-0">
			                <ul>
			                  <li>By IJM NH </li>
			                  <li>JUNE 21 , 2020</li>
			                </ul>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default MostViewed