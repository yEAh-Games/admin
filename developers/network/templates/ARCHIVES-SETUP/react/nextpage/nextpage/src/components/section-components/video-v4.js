import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="video-area bg-black pd-top-75 pd-bottom-150">
              <div className="container">
                <div className="section-title style-white">
                  <div className="row">
                    <div className="col-6">
                      <h6 className="title">Top News</h6>
                    </div>
                    <div className="col-6 text-center text-md-right go-top">
                      <Link className="btn-read-more " to="/blog-details">See More <i className="la la-arrow-right" /></Link>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="tab-content" id="nex1-content">
                      <div className="tab-pane fade show active" id="nex1-tabs-1" role="tabpanel">
                        <div className="single-post-wrap style-overlay mb-0">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/video/6.png"} alt="img" />
                            <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-large play-btn-blue mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                          </div>
                          <div className="details go-top">
                            <div className="post-meta-single">
                              <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
                            </div>
                            <h6 className="title"><Link to="/blog-details">Scientists Discover the Switch That Makes Human</Link></h6>
                            <div className="post-meta-single">
                              <p className="mt-2">By IJM NH . June 21,2020</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nex1-tabs-2" role="tabpanel">
                        <div className="single-post-wrap style-overlay mb-0">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/video/6.png"} alt="img" />
                            <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-large play-btn-blue mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                          </div>
                          <div className="details go-top">
                            <div className="post-meta-single">
                              <Link className="tag-base tag-blue" to="/cat-tech">Tech</Link>
                            </div>
                            <h6 className="title"><Link to="/blog-details">Here’s our take on the latest technology trends that will </Link></h6>
                            <div className="post-meta-single">
                              <p className="mt-2">By IJM NH . June 21,2020</p>
                            </div>
                          </div>
                        </div>               
                      </div>
                      <div className="tab-pane fade" id="nex1-tabs-3" role="tabpanel">
                        <div className="single-post-wrap style-overlay mb-0">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/video/6.png"} alt="img" />
                            <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-large play-btn-blue mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                          </div>
                          <div className="details go-top">
                            <div className="post-meta-single">
                              <Link className="tag-base tag-blue" to="/cat-tech">Tech</Link>
                            </div>
                            <h6 className="title"><Link to="/blog-details">The gear and game plan you need to stay connected </Link></h6>
                            <div className="post-meta-single">
                              <p className="mt-2">By IJM NH . June 21,2020</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nex1-tabs-4" role="tabpanel">
                        <div className="single-post-wrap style-overlay mb-0">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/video/6.png"} alt="img" />
                            <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-large play-btn-blue mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                          </div>
                          <div className="details go-top">
                            <div className="post-meta-single">
                              <Link className="tag-base tag-blue" to="/cat-tech">Tech</Link>
                            </div>
                            <h6 className="title"><Link to="/blog-details">Google Doodle celebrates modernist sculptor </Link></h6>
                            <div className="post-meta-single">
                              <p className="mt-2">By IJM NH . June 21,2020</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 bg-blue">
                    <div className="nxp-tab-inner video-tab-inner video-tab-inner-2 text-center">
                      <ul className="nav nav-tabs" id="nex1" role="tablist">
                        <li className="nav-item" role="presentation">
                          <a className="nav-link active" id="nex1-tab-1" data-toggle="pill" href="#nex1-tabs-1" role="tab" aria-selected="true">
                            <div className="single-post-list-wrap style-white text-left">
                              <div className="media">
                                <div className="media-left">
                                  <img src={publicUrl+"assets/img/post/list/1.png"} alt="img" />
                                </div>
                                <div className="media-body align-self-center">
                                  <div className="details">
                                    <h6 className="title mt-2">Here’s our take on the latest technology trends that will </h6>
                                    <div className="post-meta-single">
                                      <ul>
                                        <li>june 21,2020</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a className="nav-link" id="nex1-tab-2" data-toggle="pill" href="#nex1-tabs-2" role="tab" aria-selected="false">
                            <div className="single-post-list-wrap style-white text-left">
                              <div className="media">
                                <div className="media-left">
                                  <img src={publicUrl+"assets/img/post/list/2.png"} alt="img" />
                                </div>
                                <div className="media-body align-self-center">
                                  <div className="details">
                                    <h6 className="title mt-2">The gear and game plan you need to stay connected </h6>
                                    <div className="post-meta-single">
                                      <ul>
                                        <li>june 21,2020</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a className="nav-link" id="nex1-tab-3" data-toggle="pill" href="#nex1-tabs-3" role="tab" aria-selected="false">
                            <div className="single-post-list-wrap style-white text-left">
                              <div className="media">
                                <div className="media-left">
                                  <img src={publicUrl+"assets/img/post/list/3.png"} alt="img" />
                                </div>
                                <div className="media-body align-self-center">
                                  <div className="details">
                                    <h6 className="title mt-2">Google Doodle celebrates modernist sculptor </h6>
                                    <div className="post-meta-single">
                                      <ul>
                                        <li>june 21,2020</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a className="nav-link" id="nex1-tab-4" data-toggle="pill" href="#nex1-tabs-4" role="tab" aria-selected="false">
                            <div className="single-post-list-wrap style-white text-left">
                              <div className="media">
                                <div className="media-left">
                                  <img src={publicUrl+"assets/img/post/list/4.png"} alt="img" />
                                </div>
                                <div className="media-body align-self-center">
                                  <div className="details">
                                    <h6 className="title mt-2">Ford recalls 50,000 EV charging cables over fire concerns</h6>
                                    <div className="post-meta-single">
                                      <ul>
                                        <li>june 21,2020</li>
                                      </ul>
                                    </div>
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

export default VideoV4