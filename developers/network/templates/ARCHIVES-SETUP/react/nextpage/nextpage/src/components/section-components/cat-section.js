import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CategorySection extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="pd-top-80 pd-bottom-50 go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/15.png"} alt="img" />
			            <Link className="tag-base tag-purple" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <p><i className="fa fa-clock-o" />08.22.2020</p>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Why Are the Offspring of Older </Link></h6>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/16.png"} alt="img" />
			            <Link className="tag-base tag-green" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <p><i className="fa fa-clock-o" />08.22.2020</p>
			            </div>
			            <h6 className="title"><Link to="/blog-details">People Who Eat a Late Dinner May</Link></h6>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/17.png"} alt="img" />
			            <Link className="tag-base tag-red" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <p><i className="fa fa-clock-o" />08.22.2020</p>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Kids eat more calories in </Link></h6>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/18.png"} alt="img" />
			            <Link className="tag-base tag-purple" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <p><i className="fa fa-clock-o" />08.22.2020</p>
			            </div>
			            <h6 className="title"><Link to="/blog-details">The FAA will test drone </Link></h6>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/19.png"} alt="img" />
			            <Link className="tag-base tag-red" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <p><i className="fa fa-clock-o" />08.22.2020</p>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Lifting Weights Makes Your Nervous</Link></h6>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/20.png"} alt="img" />
			            <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <p><i className="fa fa-clock-o" />08.22.2020</p>
			            </div>
			            <h6 className="title"><Link to="/blog-details">New, Remote Weight-Loss Method </Link></h6>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/21.png"} alt="img" />
			            <Link className="tag-base tag-light-green" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <p><i className="fa fa-clock-o" />08.22.2020</p>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Social Connection Boosts Fitness App </Link></h6>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/22.png"} alt="img" />
			            <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <p><i className="fa fa-clock-o" />08.22.2020</p>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Internet For Things - New results </Link></h6>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>  
			</div>
        }
}

export default CategorySection