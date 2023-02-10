import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class NewsArea extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="news-area pd-bottom-50 ">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 pd-top-80 go-top">
                  <div className="how-news">
                    <div className="section-title style-two mb-3">
                      <div className="nxp-tab-inner nxp-tab-post style-two">
                        <ul className="nav nav-tabs" id="ex1" role="tablist">
                          <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="ex1-tab-1" data-toggle="pill" href="#ex1-tabs-1" role="tab" aria-selected="true">
                              Game
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a className="nav-link" id="ex1-tab-2" data-toggle="pill" href="#ex1-tabs-2" role="tab" aria-selected="false">
                              Politics        
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a className="nav-link" id="ex1-tab-3" data-toggle="pill" href="#ex1-tabs-3" role="tab" aria-selected="false">
                              Fashion        
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a className="nav-link" id="ex1-tab-4" data-toggle="pill" href="#ex1-tabs-4" role="tab" aria-selected="false">
                              Tech        
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a className="nav-link" id="ex1-tab-5" data-toggle="pill" href="#ex1-tabs-5" role="tab" aria-selected="false">
                              Music        
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a className="nav-link" id="ex1-tab-6" data-toggle="pill" href="#ex1-tabs-6" role="tab" aria-selected="false">
                              Spotrs        
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-content nxp-tab-content-2" id="ex1-content">
                      <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel">
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/2.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur ipsum dolor adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/3.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/4.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur ipsum dolor adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel">
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/2.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur ipsum dolor adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/3.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur ipsum dolor adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/4.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div>              
                      </div>
                      <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel">
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/2.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/3.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/4.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="ex1-tabs-4" role="tabpanel">
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/2.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur ipsum dolor adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/3.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur ipsum dolor adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/4.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur ipsum dolor adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="ex1-tabs-5" role="tabpanel">
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/2.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/3.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/4.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="ex1-tabs-6" role="tabpanel">
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/2.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/3.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="single-post-list-wrap style-two">
                          <div className="media">
                            <div className="media-left">
                              <img src={publicUrl+"assets/img/video/4.png"} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li>by IJM NH </li>
                                    <li>june 25,2020</li>
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hot-news-2">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="single-post-wrap style-overlay">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/post/bb.png"} alt="img" />
                          </div>
                          <div className="details">
                            <h5 className="title"><Link to="/cat-page">Lifestyle</Link></h5>
                            <p className="mt-2">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit Lorem ipsum dolor sit  consectetur</p>
                            <div className="post-meta-single">
                              <ul>
                                <li>By IJM NH </li>
                                <li>june 25,2020</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-post-wrap style-overlay">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/post/24.png"} alt="img" />
                          </div>
                          <div className="details">
                            <div className="post-meta-single">
                              <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
                            </div>
                            <h5 className="title"><Link to="/blog-details">UK to legally targets to tackle climate crisis</Link></h5>
                            <div className="post-meta-single">
                              <ul>
                                <li>By IJM NH </li>
                                <li>june 25,2020</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-post-wrap style-overlay">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/post/24.png"} alt="img" />
                          </div>
                          <div className="details">
                            <div className="post-meta-single">
                              <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
                            </div>
                            <h5 className="title"><Link to="/blog-details">UK to legally targets to tackle climate crisis</Link></h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                  <div className="hot-news-3">
                    <div className="single-post-list-wrap style-two">
                      <div className="media">
                        <div className="media-left">
                          <img src={publicUrl+"assets/img/video/2.png"} alt="img" />
                        </div>
                        <div className="media-body align-self-center">
                          <div className="details">
                            <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                            <div className="post-meta-single">
                              <ul>
                                <li>by IJM NH </li>
                                <li>june 25,2020</li>
                              </ul>
                            </div>
                            <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-post-list-wrap style-two">
                      <div className="media">
                        <div className="media-left">
                          <img src={publicUrl+"assets/img/video/3.png"} alt="img" />
                        </div>
                        <div className="media-body align-self-center">
                          <div className="details">
                            <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                            <div className="post-meta-single">
                              <ul>
                                <li>by IJM NH </li>
                                <li>june 25,2020</li>
                              </ul>
                            </div>
                            <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                        </div>
                      </div>
                    </div> 
                    <div className="single-post-list-wrap style-two">
                      <div className="media">
                        <div className="media-left">
                          <img src={publicUrl+"assets/img/video/4.png"} alt="img" />
                        </div>
                        <div className="media-body align-self-center">
                          <div className="details">
                            <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                            <div className="post-meta-single">
                              <ul>
                                <li>by IJM NH </li>
                                <li>june 25,2020</li>
                              </ul>
                            </div>
                            <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                        </div>
                      </div>
                    </div> 
                    <div className="single-post-list-wrap style-two">
                      <div className="media">
                        <div className="media-left">
                          <img src={publicUrl+"assets/img/video/5.png"} alt="img" />
                        </div>
                        <div className="media-body align-self-center">
                          <div className="details">
                            <h6 className="title"><Link to="/blog-details">Robotics surgery may improve outcomes in mouth and throat cancer.</Link></h6>
                            <div className="post-meta-single">
                              <ul>
                                <li>by IJM NH </li>
                                <li>june 25,2020</li>
                              </ul>
                            </div>
                            <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit  consectetur adipisicing elit, iusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 pd-top-80">
                  <div className="category-sitebar">
                    <div className="widget widget-add">
                      <img className="w-100" src={publicUrl+"assets/img/add/5.png"} alt="img" />
                    </div>
                    <div className="widget">
                      <form className="single-newsletter-inner bg-black">
                        <h5>Newsletter</h5>
                        <p>Stay Updated on all that's new add noteworthy</p>
                        <div className="single-input-inner">
                          <input type="text" placeholder="Enter Your Email" />
                        </div>
                        <a className="btn btn-white w-100" href="#">Subscribe Now</a>
                      </form>
                    </div>
                    <div className="widget">
                      <div className="category-bar">
                        <div className="row">
                          <div className="col-6">
                            <div className="single-category-inner text-center">
                              <img className="w-100" src={publicUrl+"assets/img/category/3.png"} alt="img" />
                              <span className="total-cat">13+ <br /> Sports</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="single-category-inner text-center">
                              <img className="w-100" src={publicUrl+"assets/img/category/4.png"} alt="img" />
                              <span className="total-cat">21+ <br /> Sports</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="single-category-inner text-center">
                              <img className="w-100" src={publicUrl+"assets/img/category/5.png"} alt="img" />
                              <span className="total-cat">11+ <br /> Sports</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="single-category-inner text-center">
                              <img className="w-100" src={publicUrl+"assets/img/category/6.png"} alt="img" />
                              <span className="total-cat">23+ <br /> Sports</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget widget-social">
                      <h6 className="widget-title">Join to Us</h6>
                      <div className="social-area-list style-two">
                        <ul>
                          <li><a className="facebook" href="#"><i className="fa fa-facebook social-icon" /><span>12,300</span><span>Like</span> <span className="sr-intro">Like</span></a></li>
                          <li><a className="twitter" href="#"><i className="fa fa-twitter social-icon" /><span>12,300</span><span>Followers</span> <span className="sr-intro">Followers</span></a></li>
                          <li><a className="youtube" href="#"><i className="fa fa-youtube-play social-icon" /><span>12,300</span><span>Subscribers</span> <span className="sr-intro">Subscribers</span></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget">
                      <div className="nxp-tab-inner nxp-tab-post-two mb-4">
                        <ul className="nav nav-tabs" id="nx1" role="tablist">
                          <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="nx1-tab-1" data-toggle="pill" href="#nx1-tabs-1" role="tab" aria-selected="true">
                              Recent
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a className="nav-link" id="nx1-tab-2" data-toggle="pill" href="#nx1-tabs-2" role="tab" aria-selected="false">
                              Populer        
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a className="nav-link" id="nx1-tab-3" data-toggle="pill" href="#nx1-tabs-3" role="tab" aria-selected="false">
                              Comment        
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content go-top" id="nx1-content">
                        <div className="tab-pane fade show active" id="nx1-tabs-1" role="tabpanel">
                          <div className="single-post-list-wrap">
                            <div className="media">
                              <div className="media-left">
                                <img src={publicUrl+"assets/img/post/list/1.png"} alt="img" />
                              </div>
                              <div className="media-body">
                                <div className="details">
                                  <div className="post-meta-single">
                                    <ul>
                                      <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                  </div>
                                  <h6 className="title"><Link to="/blog-details">Himachal Pradesh rules in order to allow tourists </Link></h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single-post-list-wrap">
                            <div className="media">
                              <div className="media-left">
                                <img src={publicUrl+"assets/img/post/list/2.png"} alt="img" />
                              </div>
                              <div className="media-body">
                                <div className="details">
                                  <div className="post-meta-single">
                                    <ul>
                                      <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                  </div>
                                  <h6 className="title"><Link to="/blog-details">Online registration, booking for Vaishno Devi </Link></h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single-post-list-wrap mb-0">
                            <div className="media">
                              <div className="media-left">
                                <img src={publicUrl+"assets/img/post/list/3.png"} alt="img" />
                              </div>
                              <div className="media-body">
                                <div className="details">
                                  <div className="post-meta-single">
                                    <ul>
                                      <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                  </div>
                                  <h6 className="title"><Link to="/blog-details">Detecting technologies in airports this year</Link></h6>
                                </div>
                              </div>
                            </div>
                          </div> 
                        </div>
                        <div className="tab-pane fade" id="nx1-tabs-2" role="tabpanel">
                          <div className="single-post-list-wrap">
                            <div className="media">
                              <div className="media-left">
                                <img src={publicUrl+"assets/img/post/list/2.png"} alt="img" />
                              </div>
                              <div className="media-body">
                                <div className="details">
                                  <div className="post-meta-single">
                                    <ul>
                                      <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                  </div>
                                  <h6 className="title"><Link to="/blog-details">Online registration, booking for Vaishno Devi </Link></h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single-post-list-wrap">
                            <div className="media">
                              <div className="media-left">
                                <img src={publicUrl+"assets/img/post/list/3.png"} alt="img" />
                              </div>
                              <div className="media-body">
                                <div className="details">
                                  <div className="post-meta-single">
                                    <ul>
                                      <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                  </div>
                                  <h6 className="title"><Link to="/blog-details">Detecting technologies in airports this year</Link></h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single-post-list-wrap mb-0">
                            <div className="media">
                              <div className="media-left">
                                <img src={publicUrl+"assets/img/post/list/3.png"} alt="img" />
                              </div>
                              <div className="media-body">
                                <div className="details">
                                  <div className="post-meta-single">
                                    <ul>
                                      <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                  </div>
                                  <h6 className="title"><Link to="/blog-details">Detecting technologies in airports this year</Link></h6>
                                </div>
                              </div>
                            </div>
                          </div>            
                        </div>
                        <div className="tab-pane fade" id="nx1-tabs-3" role="tabpanel">
                          <div className="single-post-list-wrap">
                            <div className="media">
                              <div className="media-left">
                                <img src={publicUrl+"assets/img/post/list/2.png"} alt="img" />
                              </div>
                              <div className="media-body">
                                <div className="details">
                                  <div className="post-meta-single">
                                    <ul>
                                      <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                  </div>
                                  <h6 className="title"><Link to="/blog-details">Online registration, booking for Vaishno Devi </Link></h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single-post-list-wrap">
                            <div className="media">
                              <div className="media-left">
                                <img src={publicUrl+"assets/img/post/list/2.png"} alt="img" />
                              </div>
                              <div className="media-body">
                                <div className="details">
                                  <div className="post-meta-single">
                                    <ul>
                                      <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                  </div>
                                  <h6 className="title"><Link to="/blog-details">Online registration, booking for Vaishno Devi </Link></h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single-post-list-wrap mb-0">
                            <div className="media">
                              <div className="media-left">
                                <img src={publicUrl+"assets/img/post/list/3.png"} alt="img" />
                              </div>
                              <div className="media-body">
                                <div className="details">
                                  <div className="post-meta-single">
                                    <ul>
                                      <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                  </div>
                                  <h6 className="title"><Link to="/blog-details">Detecting technologies in airports this year</Link></h6>
                                </div>
                              </div>
                            </div>
                          </div> 
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

export default NewsArea