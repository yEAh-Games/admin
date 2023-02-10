import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TrendingV5 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="tranding-area pd-top-75 pd-bottom-50 go-top">
			  <div className="container">
			    <div className="section-title style-two">
			      <div className="row">
			        <div className="col-md-3">
			          <h6 className="title">Trending News</h6>
			        </div>
			        <div className="col-md-9 text-center text-md-right">
			          <div className="nxp-tab-inner nxp-tab-post text-md-right text-center">
			            <ul className="nav nav-tabs" id="ex2" role="tablist">
			              <li className="nav-item" role="presentation">
			                <a className="nav-link active" id="ex2-tab-1" data-toggle="pill" href="#ex2-tabs-1" role="tab" aria-selected="true">
			                  Entertainment
			                </a>
			              </li>
			              <li className="nav-item" role="presentation">
			                <a className="nav-link" id="ex2-tab-2" data-toggle="pill" href="#ex2-tabs-2" role="tab" aria-selected="false">
			                  Politics        
			                </a>
			              </li>
			              <li className="nav-item" role="presentation">
			                <a className="nav-link" id="ex2-tab-3" data-toggle="pill" href="#ex2-tabs-3" role="tab" aria-selected="false">
			                  Fashion        
			                </a>
			              </li>
			              <li className="nav-item" role="presentation">
			                <a className="nav-link" id="ex2-tab-4" data-toggle="pill" href="#ex2-tabs-4" role="tab" aria-selected="false">
			                  Tech        
			                </a>
			              </li>
			              <li className="nav-item" role="presentation">
			                <a className="nav-link" id="ex2-tab-5" data-toggle="pill" href="#ex2-tabs-5" role="tab" aria-selected="false">
			                  Shop        
			                </a>
			              </li>
			            </ul>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="tab-content" id="ex2-content">
			      <div className="tab-pane fade show active" id="ex2-tabs-1" role="tabpanel">
			        <div className="row">
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/30.png"} alt="img" />
			                <Link  className="tag-base tag-red" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John Laber</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/31.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/32.png"} alt="img" />
			                <Link className="tag-base tag-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />Lambert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/33.png"} alt="img" />
			                <Link className="tag-base tag-purple" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />Jmbert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			        </div>  
			      </div>
			      <div className="tab-pane fade" id="ex2-tabs-2" role="tabpanel">
			        <div className="row">
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/31.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />Jbert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/32.png"} alt="img" />
			                <Link className="tag-base tag-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />R. Lambert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/30.png"} alt="img" />
			                <Link  className="tag-base tag-red" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John Lambert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/33.png"} alt="img" />
			                <Link className="tag-base tag-purple" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John Lambert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			        </div>              
			      </div>
			      <div className="tab-pane fade" id="ex2-tabs-3" role="tabpanel">
			        <div className="row">
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/30.png"} alt="img" />
			                <Link  className="tag-base tag-red" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John Lambert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/31.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/32.png"} alt="img" />
			                <Link className="tag-base tag-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />R. Lambert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/33.png"} alt="img" />
			                <Link className="tag-base tag-purple" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John Lambert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			        </div> 
			      </div>
			      <div className="tab-pane fade" id="ex2-tabs-4" role="tabpanel">
			        <div className="row">
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/31.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/32.png"} alt="img" />
			                <Link className="tag-base tag-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />R. Lambert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/30.png"} alt="img" />
			                <Link  className="tag-base tag-red" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John Lambert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/33.png"} alt="img" />
			                <Link className="tag-base tag-purple" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John Lambert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			        </div>  
			      </div>
			      <div className="tab-pane fade" id="ex2-tabs-5" role="tabpanel">
			        <div className="row">
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/33.png"} alt="img" />
			                <Link className="tag-base tag-purple" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John Lambert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/31.png"} alt="img" />
			                <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John R.bert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/32.png"} alt="img" />
			                <Link className="tag-base tag-green" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />R. Lambert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-post-wrap style-overlay">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/30.png"} alt="img" />
			                <Link  className="tag-base tag-red" to="/cat-page">Tech</Link>
			              </div>
			              <div className="details">
			                <div className="post-meta-single">
			                  <ul>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                    <li><i className="fa fa-user" />John Lambert</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Cloud Data Wareh ouse Startup, Files to Go </Link></h6>
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

export default TrendingV5