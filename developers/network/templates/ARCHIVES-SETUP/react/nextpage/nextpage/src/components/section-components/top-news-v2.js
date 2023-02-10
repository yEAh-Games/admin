import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TobNews2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="dont-miss-area pd-top-75 pd-bottom-50 go-top">
			  <div className="container">
			    <div className="section-title">
			      <div className="row">
			        <div className="col-6">
			          <h6 className="title">Top News</h6>
			        </div>
			        <div className="col-6 text-center text-md-right">
			          <Link className="btn-read-more" to="/blog-details">See More <i className="la la-arrow-right" /></Link>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-box">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/cc.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="post-meta-single mb-4 pt-1">
			              <ul>
			                <li><Link className="tag-base tag-yellow" to="/cat-page">Tech</Link></li>
			              </ul>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			            <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			            <div className="spw-bottom">
			              <ul>
			                <li>
			                  <div className="media">
			                    <div className="media-left">
			                      <img src={publicUrl+"assets/img/post/1.png"} alt="img" />
			                    </div>
			                    <div className="media-body align-self-center">
			                      <p>Prando</p>
			                    </div>
			                  </div>
			                </li>
			                <li>
			                  <p>June 21 , 2020</p>
			                </li>
			              </ul>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-box">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/38.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="post-meta-single mb-4 pt-1">
			              <ul>
			                <li><Link className="tag-base tag-purple" to="/cat-page">Tech</Link></li>
			              </ul>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			            <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			            <div className="spw-bottom">
			              <ul>
			                <li>
			                  <div className="media">
			                    <div className="media-left">
			                      <img src={publicUrl+"assets/img/post/1.png"} alt="img" />
			                    </div>
			                    <div className="media-body align-self-center">
			                      <p>Prando</p>
			                    </div>
			                  </div>
			                </li>
			                <li>
			                  <p>June 21 , 2020</p>
			                </li>
			              </ul>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-box">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/39.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="post-meta-single mb-4 pt-1">
			              <ul>
			                <li><Link className="tag-base tag-blue" to="/cat-tech">Tech</Link></li>
			              </ul>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			            <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			            <div className="spw-bottom">
			              <ul>
			                <li>
			                  <div className="media">
			                    <div className="media-left">
			                      <img src={publicUrl+"assets/img/post/1.png"} alt="img" />
			                    </div>
			                    <div className="media-body align-self-center">
			                      <p>Prando</p>
			                    </div>
			                  </div>
			                </li>
			                <li>
			                  <p>June 21 , 2020</p>
			                </li>
			              </ul>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-box">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/40.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="post-meta-single mb-4 pt-1">
			              <ul>
			                <li><Link className="tag-base tag-red" to="/cat-page">Tech</Link></li>
			              </ul>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			            <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			            <div className="spw-bottom">
			              <ul>
			                <li>
			                  <div className="media">
			                    <div className="media-left">
			                      <img src={publicUrl+"assets/img/post/1.png"} alt="img" />
			                    </div>
			                    <div className="media-body align-self-center">
			                      <p>Prando</p>
			                    </div>
			                  </div>
			                </li>
			                <li>
			                  <p>June 21 , 2020</p>
			                </li>
			              </ul>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default TobNews2