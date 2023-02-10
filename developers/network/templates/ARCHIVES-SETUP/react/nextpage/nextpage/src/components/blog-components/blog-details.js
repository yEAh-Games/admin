import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class BlogDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
     	<div className="blog-page-area pd-bottom-80 go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-9 pd-top-50">
		        <div className="blog-details-page-inner">
		          <div className="single-blog-inner m-0">
		            <div className="single-post-wrap style-overlay">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/4.png" }alt="img" />
		              </div>
		              <div className="details pb-4">
		                <div className="post-meta-single mb-2">
		                  <ul>
		                    <li><a className="tag-base tag-blue" href="#">Tech</a></li>
		                    <li><p><i className="fa fa-clock-o" />08.22.2020</p></li>
		                    <li><i className="fa fa-user" />R. Lambert</li>
		                  </ul>
		                </div>
		                <h5 className="title mt-0">Uttarakhand’s Hemkund Sahib yatra to start from</h5>
		              </div>
		            </div>
		            <div className="single-blog-details">
		              <p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut unde omnis iste natus error sit voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt Neque por quisquam est</p>
		              <blockquote className="blockquote">
		                <i className="fa fa-quote-right" />
		                <p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo. Duis aute irure dolor in in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non </p>
		              </blockquote>
		            </div>
		            <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
		            <div className="add-area">
		              <a href="#"><img src={publicUrl+"assets/img/add/2.png"} alt="img" /></a>
		            </div>
		            <h5>Expression in New Human Rights Policy</h5>
		            <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
		            <div className="row">
		              <div className="col-sm-6">
		                <div className="thumb mb-3 mb-sm-0">
		                  <img src={publicUrl+"assets/img/blog/5.png"} alt="img" />
		                </div>
		              </div>
		              <div className="col-sm-6">
		                <img src={publicUrl+"assets/img/blog/6.png"} alt="img" />
		              </div>
		            </div>
		            <div className="video-area">
		              <h5>Expression in New Human Rights Policy</h5>
		              <div className="single-blog-inner mb-4">
		                <div className="thumb">
		                  <img src={publicUrl+"assets/img/blog/7.png"} alt="image" />
		                  <a className="video-play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><i className="fa fa-play" /></a>
		                </div>
		              </div>
		            </div>
		            <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>  
		            <div className="meta">
		              <div className="row">
		                <div className="col-lg-5">
		                  <div className="tags">
		                    <span>Tags:</span>
		                    <a href="#">News,</a>
		                    <a href="#">Blog,</a>
		                    <a href="#">Magazine</a>
		                  </div>
		                </div>
		                <div className="col-lg-7 text-md-right">
		                  <div className="blog-share">
		                    <span>Share:</span>
		                    <ul className="social-area social-area-2 d-inline">
		                      <li><a className="facebook-icon" href="#"><i className="fa fa-facebook" /></a></li>
		                      <li><a className="twitter-icon" href="#"><i className="fa fa-twitter" /></a></li>
		                      <li><a className="youtube-icon" href="#"><i className="fa fa-youtube-play" /></a></li>
		                      <li><a className="instagram-icon" href="#"><i className="fa fa-instagram" /></a></li>
		                      <li><a className="google-icon" href="#"><i className="fa fa-google-plus" /></a></li>
		                    </ul>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="author-area">
		              <div className="media">
		                <img src={publicUrl+"assets/img/author/1.png"} alt="img" />
		                <div className="media-body align-self-center">
		                  <h4>Nathan George</h4>
		                  <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that aextremely painful. Nor again is there anyone who loves</p>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="related-post">
		            <div className="section-title mb-0">
		              <h5 className="mb-0">Related Post</h5>
		            </div>
		            <div className="row justify-content-center">
		              <div className="col-lg-4 col-md-6">
		                <div className="single-post-wrap">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/post/19.png"} alt="img" />
		                    <Link className="tag-base tag-red" to="/cat-page">Tech</Link>
		                  </div>
		                  <div className="details">
		                    <div className="post-meta-single">
		                      <ul>
		                        <li><i className="fa fa-clock-o" />08.22.2020</li>
		                        <li><i className="fa fa-user" />08.22.2020</li>
		                      </ul>
		                    </div>
		                    <h6 className="title mt-2"><a href="#">Lifting Weights Makes Your Nervous</a></h6>
		                  </div>
		                </div>
		              </div>
		              <div className="col-lg-4 col-md-6">
		                <div className="single-post-wrap">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/post/20.png"} alt="img" />
		                    <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
		                  </div>
		                  <div className="details">
		                    <div className="post-meta-single">
		                      <ul>
		                        <li><i className="fa fa-clock-o" />08.22.2020</li>
		                        <li><i className="fa fa-user" />08.22.2020</li>
		                      </ul>
		                    </div>
		                    <h6 className="title mt-2"><a href="#">New, Remote Weight-Loss Method </a></h6>
		                  </div>
		                </div>
		              </div>
		              <div className="col-lg-4 col-md-6">
		                <div className="single-post-wrap">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/post/21.png"} alt="img" />
		                    <Link className="tag-base tag-light-green" to="/cat-page">Tech</Link>
		                  </div>
		                  <div className="details">
		                    <div className="post-meta-single">
		                      <ul>
		                        <li><i className="fa fa-clock-o" />08.22.2020</li>
		                        <li><i className="fa fa-user" />08.22.2020</li>
		                      </ul>
		                    </div>
		                    <h6 className="title mt-2"><a href="#">Social Connection Boosts Fitness App </a></h6>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="blog-comment">
		            <div className="section-title">
		              <h4>3 Comments</h4>
		            </div>
		            <div className="media">
		              <a href="#">
		                <img src={publicUrl+"assets/img/author/2.png"} alt="comment" />
		              </a>
		              <div className="media-body">
		                <h5><a href="#">John F. Medina</a></h5>
		                <span className="date">25 July 2020</span>
		                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pawas born and I will give you a complete account</p>
		                <a href="#">Reply <i className="la la-arrow-right" /></a>
		              </div>
		            </div>
		            <div className="media nesting">
		              <a href="#">
		                <img src={publicUrl+"assets/img/author/3.png"} alt="comment" />
		              </a>
		              <div className="media-body">
		                <h5><a href="#">Jeffrey T. Kelly</a></h5>
		                <span className="date">25 July 2020</span>
		                <p>Again is there anyone who loves or pursues or desires to obtain paiits ecause it is pain, but because occasionally circumstances occur in which</p>
		                <a href="#">Reply <i className="la la-arrow-right" /></a>
		              </div>
		            </div>
		            <div className="media">
		              <a href="#">
		                <img src={publicUrl+"assets/img/author/2.png"} alt="comment" />
		              </a>
		              <div className="media-body">
		                <h5><a href="#">Richard B. Zellmer</a></h5>
		                <span className="date">25 July 2020</span>
		                <p>Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</p>
		                <a href="#">Reply <i className="la la-arrow-right" /></a>
		              </div>
		            </div>
		          </div>
		          <div className="comment-form">
		            <div className="section-title mb-0">
		              <h4 className="mb-0">Leave A Comment</h4>
		            </div>
		            <form className="contact-form-wrap">
		              <div className="row">
		                <div className="col-lg-6 col-md-6 col-12">
		                  <div className="single-input-wrap input-group">
		                    <input type="text" className="form-control" placeholder="Your Full Name" />
		                    <div className="input-group-prepend">
		                      <div className="input-group-text"><i className="fa fa-user" /></div>
		                    </div>
		                  </div>
		                </div>
		                <div className="col-lg-6 col-md-6 col-12">
		                  <div className="single-input-wrap input-group">
		                    <input type="text" className="form-control" placeholder="Your Email" />
		                    <div className="input-group-prepend">
		                      <div className="input-group-text"><i className="fa fa-envelope" /></div>
		                    </div>
		                  </div>
		                </div>
		                <div className="col-12">
		                  <div className="single-input-wrap message input-group">
		                    <textarea className="form-control" rows={4} name="note" placeholder="Write Message" defaultValue={""} />
		                    <div className="input-group-prepend">
		                      <div className="input-group-text"><i className="fa fa-pencil" /></div>
		                    </div>
		                  </div>
		                  <div className="submit-area">
		                    <button type="submit" className="btn btn-base">Post Comment</button>
		                  </div>
		                </div>
		              </div>
		            </form>
		          </div>
		        </div>
		      </div>
		     <Sidebar />
		    </div>
		  </div>
		</div>

    )
  }
}

export default BlogDetails;
