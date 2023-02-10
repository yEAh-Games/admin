import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TrendingV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="tranding-area pd-top-75 pd-bottom-50 ">
			  <div className="container">
			    <div className="section-title">
			      <div className="row">
			        <div className="col-md-3 mb-2 mb-md-0">
			          <h6 className="title">Trending News</h6>
			        </div>
			        <div className="col-md-9">
			          <div className="nxp-tab-inner nxp-tab-post text-md-right">
			            <ul className="nav nav-tabs" id="enx1" role="tablist">
			              <li className="nav-item" role="presentation">
			                <a className="nav-link active" id="enx1-tab-1" data-toggle="pill" href="#enx1-tabs-1" role="tab" aria-selected="true">
			                  Entertainment
			                </a>
			              </li>
			              <li className="nav-item" role="presentation">
			                <a className="nav-link" id="enx1-tab-2" data-toggle="pill" href="#enx1-tabs-2" role="tab" aria-selected="false">
			                  Politics        
			                </a>
			              </li>
			              <li className="nav-item" role="presentation">
			                <a className="nav-link" id="enx1-tab-3" data-toggle="pill" href="#enx1-tabs-3" role="tab" aria-selected="false">
			                  Fashion        
			                </a>
			              </li>
			              <li className="nav-item" role="presentation">
			                <a className="nav-link" id="enx1-tab-4" data-toggle="pill" href="#enx1-tabs-4" role="tab" aria-selected="false">
			                  Tech        
			                </a>
			              </li>
			              <li className="nav-item" role="presentation">
			                <a className="nav-link" id="enx1-tab-5" data-toggle="pill" href="#enx1-tabs-5" role="tab" aria-selected="false">
			                  Shop        
			                </a>
			              </li>
			            </ul>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="tab-content" id="enx1-content go-top">
			      <div className="tab-pane fade show active" id="enx1-tabs-1" role="tabpanel">
			        <div className="row">
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/19.png"} alt="img" />
			                <Link className="tag-base tag-light-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Snowflake a Cloud Data Files Warehouse, to Go Public </Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/20.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Mirzapur Season 2 Is Coming Soon, Amazon Prime Video</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/21.png"} alt="img" />
			                <Link className="tag-base tag-light-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Tesla Seeks Approval for Sensor That Could Child</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/22.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Nokia C3 With HD+ Display, 3,04 0mAh Battery May </Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			        </div>  
			      </div>
			      <div className="tab-pane fade" id="enx1-tabs-2" role="tabpanel">
			        <div className="row">
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/20.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Mirzapur Season 2 Is Coming Soon, Amazon Prime Video</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/21.png"} alt="img" />
			                <Link className="tag-base tag-light-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Tesla Seeks Approval for Sensor That Could Child</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/19.png"} alt="img" />
			                <Link className="tag-base tag-light-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Snowflake a Cloud Data Files Warehouse, to Go Public </Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/22.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Nokia C3 With HD+ Display, 3,04 0mAh Battery May </Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			        </div>                 
			      </div>
			      <div className="tab-pane fade" id="enx1-tabs-3" role="tabpanel">
			        <div className="row">
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/19.png"} alt="img" />
			                <Link className="tag-base tag-light-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Snowflake a Cloud Data Files Warehouse, to Go Public </Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/20.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Mirzapur Season 2 Is Coming Soon, Amazon Prime Video</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/21.png"} alt="img" />
			                <Link className="tag-base tag-light-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Tesla Seeks Approval for Sensor That Could Child</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/22.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Nokia C3 With HD+ Display, 3,04 0mAh Battery May </Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			        </div> 
			      </div>
			      <div className="tab-pane fade" id="enx1-tabs-4" role="tabpanel">
			        <div className="row">
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/20.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Mirzapur Season 2 Is Coming Soon, Amazon Prime Video</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/21.png"} alt="img" />
			                <Link className="tag-base tag-light-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Tesla Seeks Approval for Sensor That Could Child</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/19.png"} alt="img" />
			                <Link className="tag-base tag-light-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Snowflake a Cloud Data Files Warehouse, to Go Public </Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/22.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Nokia C3 With HD+ Display, 3,04 0mAh Battery May </Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			        </div> 
			      </div>
			      <div className="tab-pane fade" id="enx1-tabs-5" role="tabpanel">
			        <div className="row">
			          <div className="col-lg-3 col-md-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/20.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Mirzapur Season 2 Is Coming Soon, Amazon Prime Video</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-md-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/21.png"} alt="img" />
			                <Link className="tag-base tag-light-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Tesla Seeks Approval for Sensor That Could Child</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-md-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/19.png"} alt="img" />
			                <Link className="tag-base tag-light-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Snowflake a Cloud Data Files Warehouse, to Go Public </Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-md-6">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/22.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-3">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R. Lambert</li>
			                  </ul>
			                </div>
			                <h6><Link to="/blog-details">Nokia C3 With HD+ Display, 3,04 0mAh Battery May </Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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

export default TrendingV2