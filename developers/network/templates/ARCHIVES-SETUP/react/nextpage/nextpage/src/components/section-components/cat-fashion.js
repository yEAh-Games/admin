import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CatFashion extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="cat-page-area pd-bottom-80 go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-9 pd-top-50">
			        <div className="row">
			          <div className="col-lg-4 col-md-6">
			            <div className="single-post-wrap style-box">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/fashion/1.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-4 pt-1">
			                  <ul>
			                    <li><Link className="tag-base tag-light-blue" to="/cat-page">Tech</Link></li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			                <Link className="btn btn-base mt-4" to="/blog-details">Read more</Link>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-post-wrap style-box">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/fashion/2.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-4 pt-1">
			                  <ul>
			                    <li><Link className="tag-base tag-light-blue" to="/cat-page">Tech</Link></li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			                <Link className="btn btn-base mt-4" to="/blog-details">Read more</Link>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-post-wrap style-box">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/fashion/3.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-4 pt-1">
			                  <ul>
			                    <li><Link className="tag-base tag-light-blue" to="/cat-page">Tech</Link></li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			                <Link className="btn btn-base mt-4" to="/blog-details">Read more</Link>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-post-wrap style-box">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/fashion/4.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-4 pt-1">
			                  <ul>
			                    <li><Link className="tag-base tag-light-blue" to="/cat-page">Tech</Link></li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			                <Link className="btn btn-base mt-4" to="/blog-details">Read more</Link>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-post-wrap style-box">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/fashion/5.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-4 pt-1">
			                  <ul>
			                    <li><Link className="tag-base tag-light-blue" to="/cat-page">Tech</Link></li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			                <Link className="btn btn-base mt-4" to="/blog-details">Read more</Link>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-post-wrap style-box">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/fashion/6.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-4 pt-1">
			                  <ul>
			                    <li><Link className="tag-base tag-light-blue" to="/cat-page">Tech</Link></li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			                <Link className="btn btn-base mt-4" to="/blog-details">Read more</Link>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="add-area mb-4">
			          <a href="#"><img src={publicUrl+"assets/img/add/2.png"} alt="img" /></a>
			        </div>
			        <div className="row">
			          <div className="col-lg-4 col-md-6">
			            <div className="single-post-wrap style-box">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/fashion/7.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-4 pt-1">
			                  <ul>
			                    <li><Link className="tag-base tag-light-blue" to="/cat-page">Tech</Link></li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			                <Link className="btn btn-base mt-4" to="/blog-details">Read more</Link>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-post-wrap style-box">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/fashion/8.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-4 pt-1">
			                  <ul>
			                    <li><Link className="tag-base tag-light-blue" to="/cat-page">Tech</Link></li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			                <Link className="btn btn-base mt-4" to="/blog-details">Read more</Link>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-post-wrap style-box">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/fashion/9.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-4 pt-1">
			                  <ul>
			                    <li><Link className="tag-base tag-light-blue" to="/cat-page">Tech</Link></li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			                <Link className="btn btn-base mt-4" to="/blog-details">Read more</Link>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-post-wrap style-box">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/fashion/3.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-4 pt-1">
			                  <ul>
			                    <li><Link className="tag-base tag-light-blue" to="/cat-page">Tech</Link></li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			                <Link className="btn btn-base mt-4" to="/blog-details">Read more</Link>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-post-wrap style-box">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/fashion/4.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-4 pt-1">
			                  <ul>
			                    <li><Link className="tag-base tag-light-blue" to="/cat-page">Tech</Link></li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			                <Link className="btn btn-base mt-4" to="/blog-details">Read more</Link>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-post-wrap style-box">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/fashion/6.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-4 pt-1">
			                  <ul>
			                    <li><Link className="tag-base tag-light-blue" to="/cat-page">Tech</Link></li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
			                <Link className="btn btn-base mt-4" to="/blog-details">Read more</Link>
			              </div>
			            </div>
			          </div>
			        </div>
			        <nav className="mt-4 text-center">
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
			      <div className="col-lg-3 pd-top-50">
			        <div className="category-sitebar">
			          <div className="widget widget-category">
			            <h6 className="widget-title">Category</h6>
			            <div className="row custom-gutters-14">
			              <div className="col-lg-6 col-sm-6">
			                <div className="single-category-inner">
			                  <img src={publicUrl+"assets/img/category/9.png"} alt="img" />
			                  <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			                </div>
			              </div>
			              <div className="col-lg-6 col-sm-6">
			                <div className="single-category-inner">
			                  <img src={publicUrl+"assets/img/category/10.png"} alt="img" />
			                  <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			                </div>
			              </div>
			              <div className="col-lg-6 col-sm-6">
			                <div className="single-category-inner">
			                  <img src={publicUrl+"assets/img/category/11.png"} alt="img" />
			                  <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			                </div>
			              </div>
			              <div className="col-lg-6 col-sm-6">
			                <div className="single-category-inner">
			                  <img src={publicUrl+"assets/img/category/12.png"} alt="img" />
			                  <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			                </div>
			              </div>
			              <div className="col-lg-6 col-sm-6">
			                <div className="single-category-inner">
			                  <img src={publicUrl+"assets/img/category/13.png"} alt="img" />
			                  <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			                </div>
			              </div>
			              <div className="col-lg-6 col-sm-6">
			                <div className="single-category-inner">
			                  <img src={publicUrl+"assets/img/category/14.png"} alt="img" />
			                  <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			                </div>
			              </div>
			              <div className="col-lg-6 col-sm-6">
			                <div className="single-category-inner">
			                  <img src={publicUrl+"assets/img/category/15.png"} alt="img" />
			                  <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			                </div>
			              </div>
			              <div className="col-lg-6 col-sm-6">
			                <div className="single-category-inner">
			                  <img src={publicUrl+"assets/img/category/16.png"} alt="img" />
			                  <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="widget widget-add">
			            <div className="add">
			              <img className="w-100" src={publicUrl+"assets/img/add/3.png"} alt="img" />
			            </div>
			          </div>
			          <div className="widget widget-social">
			            <h6 className="widget-title">Join to Us</h6>
			            <ul className="social-area social-area-2">
			              <li><a className="facebook-icon" href="#"><i className="fa fa-facebook" /></a></li>
			              <li><a className="twitter-icon" href="#"><i className="fa fa-twitter" /></a></li>
			              <li><a className="youtube-icon" href="#"><i className="fa fa-youtube-play" /></a></li>
			              <li><a className="instagram-icon" href="#"><i className="fa fa-instagram" /></a></li>
			              <li><a className="google-icon" href="#"><i className="fa fa-google-plus" /></a></li>
			            </ul>
			          </div>
			          <div className="widget">
			            <h6 className="widget-title">Category</h6>
			            <div className="post-slider owl-carousel">
			              <div className="item">
			                <div className="trending-post">
			                  <div className="single-post-wrap style-overlay">
			                    <div className="thumb">
			                      <img src={publicUrl+"assets/img/post/5.png"} alt="img" />
			                    </div>
			                    <div className="details">
			                      <div className="post-meta-single">
			                        <p><i className="fa fa-clock-o" />December 26, 2018</p>
			                      </div>
			                      <h6 className="title"><Link to="/blog-details">The FAA will test drone </Link></h6>
			                    </div>
			                  </div>
			                  <div className="single-post-wrap style-overlay">
			                    <div className="thumb">
			                      <img src={publicUrl+"assets/img/post/6.png"} alt="img" />
			                    </div>
			                    <div className="details">
			                      <div className="post-meta-single">
			                        <p><i className="fa fa-clock-o" />December 26, 2018</p>
			                      </div>
			                      <h6 className="title"><Link to="/blog-details">Flight schedule and quarantine</Link></h6>
			                    </div>
			                  </div>
			                  <div className="single-post-wrap style-overlay mb-0">
			                    <div className="thumb">
			                      <img src={publicUrl+"assets/img/post/7.png"} alt="img" />
			                    </div>
			                    <div className="details">
			                      <div className="post-meta-single">
			                        <p><i className="fa fa-clock-o" />December 26, 2018</p>
			                      </div>
			                      <h6 className="title"><Link to="/blog-details">Indore bags cleanest city</Link></h6>
			                    </div>
			                  </div>
			                </div>
			              </div>
			              <div className="item">
			                <div className="trending-post">
			                  <div className="single-post-wrap style-overlay">
			                    <div className="thumb">
			                      <img src={publicUrl+"assets/img/post/5.png"} alt="img" />
			                    </div>
			                    <div className="details">
			                      <div className="post-meta-single">
			                        <p><i className="fa fa-clock-o" />December 26, 2018</p>
			                      </div>
			                      <h6 className="title"><Link to="/blog-details">The FAA will test drone </Link></h6>
			                    </div>
			                  </div>
			                  <div className="single-post-wrap style-overlay">
			                    <div className="thumb">
			                    	<img src={publicUrl+"assets/img/post/6.png"} alt="img" />
			                    </div>
			                    <div className="details">
			                      <div className="post-meta-single">
			                        <p><i className="fa fa-clock-o" />December 26, 2018</p>
			                      </div>
			                      <h6 className="title"><Link to="/blog-details">Flight schedule and quarantine</Link></h6>
			                    </div>
			                  </div>
			                  <div className="single-post-wrap style-overlay mb-0">
			                    <div className="thumb">
			                      <img src={publicUrl+"assets/img/post/7.png"} alt="img" />
			                    </div>
			                    <div className="details">
			                      <div className="post-meta-single">
			                        <p><i className="fa fa-clock-o" />December 26, 2018</p>
			                      </div>
			                      <h6 className="title"><Link to="/blog-details">Indore bags cleanest city</Link></h6>
			                    </div>
			                  </div>
			                </div>
			              </div>
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
			            <div className="tab-content" id="nx1-content">
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
			          <div className="widget">
			            <form className="single-newsletter-inner bg-blue text-center">
			              <h5>Newsletter</h5>
			              <p>Stay Updated on all that's new add noteworthy</p>
			              <div className="single-input-inner">
			                <input type="text" placeholder="Enter Your Name" />
			              </div>
			              <div className="single-input-inner">
			                <input type="text" placeholder="Enter Your Email" />
			              </div>
			              <a className="btn btn-white w-100" href="#">Subscribe Now</a>
			            </form>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default CatFashion