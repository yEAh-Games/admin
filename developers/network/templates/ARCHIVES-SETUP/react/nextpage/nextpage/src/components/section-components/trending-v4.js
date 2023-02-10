import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TrendingV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="home2-trending-tab pd-top-80 pd-bottom-50 go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-xl-6 order-xl-4">
			        <div className="section-title">
			          <div className="row">
			            <div className="col-md-4 mb-2 mb-md-0">
			              <h6 className="title">Trending News</h6>
			            </div>
			            <div className="col-md-8">
			              <div className="nxp-tab-inner nxp-tab-post text-md-right">
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
			                </ul>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="tab-content " id="ex1-content">
			          <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel">
			            <div className="row">
			              <div className="col-12">
			                <div className="thumb mb-4">
			                  <img className="w-100" src={publicUrl+"assets/img/post/29.png"} alt="img" />
			                </div>
			              </div>
			              <div className="col-sm-6">
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
			              </div> 
			              <div className="col-sm-6">
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
			              </div>        
			            </div>  
			          </div>
			          <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel">
			            <div className="row">
			              <div className="col-12">
			                <div className="thumb mb-4">
			                  <img className="w-100" src={publicUrl+"assets/img/post/29.png"} alt="img" />
			                </div>
			              </div>
			              <div className="col-sm-6">
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
			              </div> 
			              <div className="col-sm-6">
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
			              </div>        
			            </div>              
			          </div>
			          <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel">
			            <div className="row">
			              <div className="col-12">
			                <div className="thumb mb-4">
			                  <img className="w-100" src={publicUrl+"assets/img/post/29.png"} alt="img" />
			                </div>
			              </div>
			              <div className="col-sm-6">
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
			              </div> 
			              <div className="col-sm-6">
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
			              </div>        
			            </div> 
			          </div>
			          <div className="tab-pane fade" id="ex1-tabs-4" role="tabpanel">
			            <div className="row">
			              <div className="col-12">
			                <div className="thumb mb-4">
			                  <img className="w-100" src={publicUrl+"assets/img/post/29.png"} alt="img" />
			                </div>
			              </div>
			              <div className="col-sm-6">
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
			              </div> 
			              <div className="col-sm-6">
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
			              </div>        
			            </div> 
			          </div>
			        </div>
			      </div>
			      <div className="col-xl-3 order-xl-1 col-sm-6">
			        <div className="single-post-wrap style-overlay-bg">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/25.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="post-meta-single mb-3">
			              <ul>
			                <li><Link className="tag-base tag-blue" to="/cat-page">Tech</Link></li>
			                <li><p><i className="fa fa-clock-o" />08.22.2020</p></li>
			              </ul>
			            </div>
			            <h6 className="title"><Link to="/blog-details">A Comparison of the Sony FE 85mm f/1.4 GM and Sigma</Link></h6>
			          </div>
			        </div>
			        <div className="single-post-wrap style-overlay-bg">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/26.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="post-meta-single mb-3">
			              <ul>
			                <li><Link className="tag-base tag-blue" to="/cat-page">Tech</Link></li>
			                <li><p><i className="fa fa-clock-o" />08.22.2020</p></li>
			              </ul>
			            </div>
			            <h6 className="title"><Link to="/blog-details">A Comparison of the Sony FE 85mm f/1.4 GM and Sigma</Link></h6>
			          </div>
			        </div>
			      </div>
			      <div className="col-xl-3 col-sm-6 order-xl-12">
			        <div className="single-post-wrap style-overlay-bg">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/27.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="post-meta-single mb-3">
			              <ul>
			                <li><Link className="tag-base tag-blue" to="/cat-page">Tech</Link></li>
			                <li><p><i className="fa fa-clock-o" />08.22.2020</p></li>
			              </ul>
			            </div>
			            <h6 className="title"><Link to="/blog-details">A Comparison of the Sony FE 85mm f/1.4 GM and Sigma</Link></h6>
			          </div>
			        </div>
			        <div className="single-post-wrap style-overlay-bg">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/28.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="post-meta-single mb-3">
			              <ul>
			                <li><Link className="tag-base tag-blue" to="/cat-page">Tech</Link></li>
			                <li><p><i className="fa fa-clock-o" />08.22.2020</p></li>
			              </ul>
			            </div>
			            <h6 className="title"><Link to="/blog-details">A Comparison of the Sony FE 85mm f/1.4 GM and Sigma</Link></h6>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default TrendingV4