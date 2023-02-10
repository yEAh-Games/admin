import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CategorySectionV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="post-area bg-sky pd-top-80 pd-bottom-60 go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-xl-3 col-md-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/24.png"} alt="img" />
			            <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <p><i className="fa fa-clock-o" />December 26, 2018</p>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Lifting Weights Makes Your Nervous</Link></h6>
			          </div>
			        </div>
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
			      <div className="col-xl-3 col-md-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/24.png"} alt="img" />
			            <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <p><i className="fa fa-clock-o" />December 26, 2018</p>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Lifting Weights Makes Your Nervous</Link></h6>
			          </div>
			        </div>
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
			      <div className="col-xl-3 col-md-6">
			        <div className="single-post-wrap style-overlay">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/24.png"} alt="img" />
			            <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <div className="post-meta-single">
			              <p><i className="fa fa-clock-o" />December 26, 2018</p>
			            </div>
			            <h6 className="title"><Link to="/blog-details">Lifting Weights Makes Your Nervous</Link></h6>
			          </div>
			        </div>
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
			      <div className="col-xl-3 col-md-6">
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
			</div>

        }
}

export default CategorySectionV2