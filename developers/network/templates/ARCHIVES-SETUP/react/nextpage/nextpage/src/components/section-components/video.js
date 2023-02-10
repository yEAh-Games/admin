import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Video extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="video-area bg-black pd-top-80 pd-bottom-150">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6">
			        <div className="tab-content" id="ex1-content">
			          <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/23.png"} alt="img" />
			                <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-large play-btn-yellow mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			                  <p><i className="fa fa-clock-o" />08.22.2020</p>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Scientists Discover the Switch That Makes Human</Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/video/01.png"} alt="img" />
			                <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-large play-btn-yellow mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			                  <p><i className="fa fa-clock-o" />08.22.2020</p>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Here’s our take on the latest technology trends that will </Link></h6>
			              </div>
			            </div>               
			          </div>
			          <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/23.png"} alt="img" />
			                <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-large play-btn-yellow mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			                  <p><i className="fa fa-clock-o" />08.22.2020</p>
			                </div>
			                <h6 className="title"><Link to="/blog-details">The gear and game plan you need to stay connected </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade" id="ex1-tabs-4" role="tabpanel">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/video/1.png"} alt="img" />
			                <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-large play-btn-yellow mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			                  <p><i className="fa fa-clock-o" />08.22.2020</p>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Google Doodle celebrates modernist sculptor </Link></h6>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6">
			        <div className="nxp-tab-inner video-tab-inner text-center">
			          <ul className="nav nav-tabs" id="ex1" role="tablist">
			            <li className="nav-item" role="presentation">
			              <a className="nav-link active" id="ex1-tab-1" data-toggle="pill" href="#ex1-tabs-1" role="tab" aria-selected="true">
			                <div className="single-post-list-wrap style-white text-left">
			                  <div className="media">
			                    <div className="media-left">
			                      <img src={publicUrl+"assets/img/post/list/9.png"} alt="img" />
			                      <div className="play-btn-small play-btn-gray"><i className="fa fa-play" /></div>
			                    </div>
			                    <div className="media-body align-self-center">
			                      <div className="details">
			                        <div className="post-meta-single">
			                          <ul>
			                            <li><div className="tag-base tag-blue">Tech</div></li>
			                            <li><i className="fa fa-clock-o" />08.22.2020</li>
			                          </ul>
			                        </div>
			                        <h6 className="title mt-2">Here’s our take on the latest technology trends that will </h6>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </a>
			            </li>
			            <li className="nav-item" role="presentation">
			              <a className="nav-link" id="ex1-tab-2" data-toggle="pill" href="#ex1-tabs-2" role="tab" aria-selected="false">
			                <div className="single-post-list-wrap style-white text-left">
			                  <div className="media">
			                    <div className="media-left">
			                      <img src={publicUrl+"assets/img/post/list/10.png"} alt="img" />
			                      <div className="play-btn-small play-btn-gray"><i className="fa fa-play" /></div>
			                    </div>
			                    <div className="media-body align-self-center">
			                      <div className="details">
			                        <div className="post-meta-single">
			                          <ul>
			                            <li><div className="tag-base tag-blue">Tech</div></li>
			                            <li><i className="fa fa-clock-o" />08.22.2020</li>
			                          </ul>
			                        </div>
			                        <h6 className="title mt-2">The gear and game plan you need to stay connected </h6>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </a>
			            </li>
			            <li className="nav-item" role="presentation">
			              <a className="nav-link" id="ex1-tab-3" data-toggle="pill" href="#ex1-tabs-3" role="tab" aria-selected="false">
			                <div className="single-post-list-wrap style-white text-left">
			                  <div className="media">
			                    <div className="media-left">
			                      <img src={publicUrl+"assets/img/post/list/11.png"} alt="img" />
			                      <div className="play-btn-small play-btn-gray"><i className="fa fa-play" /></div>
			                    </div>
			                    <div className="media-body align-self-center">
			                      <div className="details">
			                        <div className="post-meta-single">
			                          <ul>
			                            <li><div className="tag-base tag-blue">Tech</div></li>
			                            <li><i className="fa fa-clock-o" />08.22.2020</li>
			                          </ul>
			                        </div>
			                        <h6 className="title mt-2">Google Doodle celebrates modernist sculptor </h6>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </a>
			            </li>
			            <li className="nav-item" role="presentation">
			              <a className="nav-link" id="ex1-tab-4" data-toggle="pill" href="#ex1-tabs-4" role="tab" aria-selected="false">
			                <div className="single-post-list-wrap style-white text-left">
			                  <div className="media">
			                    <div className="media-left">
			                      <img src={publicUrl+"assets/img/post/list/12.png"} alt="img" />
			                      <div className="play-btn-small play-btn-gray"><i className="fa fa-play" /></div>
			                    </div>
			                    <div className="media-body align-self-center">
			                      <div className="details">
			                        <div className="post-meta-single">
			                          <ul>
			                            <li><div className="tag-base tag-blue">Tech</div></li>
			                            <li><i className="fa fa-clock-o" />08.22.2020</li>
			                          </ul>
			                        </div>
			                        <h6 className="title mt-2">Ford recalls 50,000 EV charging cables over fire concerns</h6>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </a>
			            </li>
			          </ul>
			        </div>
			      </div>  
			    </div>
			  </div>
			</div>


        }
}

export default Video