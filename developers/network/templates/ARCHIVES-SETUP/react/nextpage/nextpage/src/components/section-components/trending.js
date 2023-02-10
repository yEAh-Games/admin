import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Trending extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="post-area pd-top-75 pd-bottom-50 go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-3 col-md-6">
			        <div className="section-title">
			          <h6 className="title">Trending News</h6>
			        </div>
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
			              <div className="single-post-wrap style-overlay">
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
			              <div className="single-post-wrap style-overlay">
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
			      <div className="col-lg-3 col-md-6">
			        <div className="section-title">
			          <h6 className="title">Latest News</h6>
			        </div>
			        <div className="post-slider owl-carousel">
			          <div className="item">
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
			                  <img src={publicUrl+"assets/img/post/list/4.png"} alt="img" />
			                </div>
			                <div className="media-body">
			                  <div className="details">
			                    <div className="post-meta-single">
			                      <ul>
			                        <li><i className="fa fa-clock-o" />08.22.2020</li>
			                      </ul>
			                    </div>
			                    <h6 className="title"><Link to="/blog-details">The FAA will drone detect-ing in airports this year</Link></h6>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div className="single-post-list-wrap">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/post/list/5.png"} alt="img" />
			                </div>
			                <div className="media-body">
			                  <div className="details">
			                    <div className="post-meta-single">
			                      <ul>
			                        <li><i className="fa fa-clock-o" />08.22.2020</li>
			                      </ul>
			                    </div>
			                    <h6 className="title"><Link to="/blog-details">Thailand makes it mand-atory for tourists to stay</Link></h6>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="item">
			            <div className="single-post-list-wrap">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/post/list/1.png" }alt="img" />
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
			                  <img src={publicUrl+"assets/img/post/list/4.png"} alt="img" />
			                </div>
			                <div className="media-body">
			                  <div className="details">
			                    <div className="post-meta-single">
			                      <ul>
			                        <li><i className="fa fa-clock-o" />08.22.2020</li>
			                      </ul>
			                    </div>
			                    <h6 className="title"><Link to="/blog-details">The FAA will drone detect-ing in airports this year</Link></h6>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div className="single-post-list-wrap">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/post/list/5.png"} alt="img" />
			                </div>
			                <div className="media-body">
			                  <div className="details">
			                    <div className="post-meta-single">
			                      <ul>
			                        <li><i className="fa fa-clock-o" />08.22.2020</li>
			                      </ul>
			                    </div>
			                    <h6 className="title"><Link to="/blog-details">Thailand makes it mand-atory for tourists to stay</Link></h6>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="section-title">
			          <h6 className="title">What’s new</h6>
			        </div>
			        <div className="post-slider owl-carousel">
			          <div className="item">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/8.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-4 pt-1">
			                  <ul>
			                    <li><Link className="tag-base tag-blue" to="/cat-page">Tech</Link></li>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Uttarakhand’s Hemkund Sahib yatra to start from September 4</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			              </div>
			            </div>
			          </div>
			          <div className="item">
			            <div className="single-post-wrap">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/post/8.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="post-meta-single mb-4 pt-1">
			                  <ul>
			                    <li><Link className="tag-base tag-blue" to="/cat-page">Tech</Link></li>
			                    <li><i className="fa fa-clock-o" />08.22.2020</li>
			                  </ul>
			                </div>
			                <h6 className="title"><Link to="/blog-details">Uttarakhand’s Hemkund Sahib yatra to start from September 4</Link></h6>
			                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="section-title">
			          <h6 className="title">Join With Us</h6>
			        </div>
			        <div className="social-area-list mb-4">
			          <ul>
			            <li><a className="facebook" href="#"><i className="fa fa-facebook social-icon" /><span>12,300</span><span>Like</span> <i className="fa fa-plus" /></a></li>
			            <li><a className="twitter" href="#"><i className="fa fa-twitter social-icon" /><span>12,600</span><span>Followers</span> <i className="fa fa-plus" /></a></li>
			            <li><a className="youtube" href="#"><i className="fa fa-youtube-play social-icon" /><span>1,300</span><span>Subscribers</span> <i className="fa fa-plus" /></a></li>
			            <li><a className="instagram" href="#"><i className="fa fa-instagram social-icon" /><span>52,400</span><span>Followers</span> <i className="fa fa-plus" /></a></li>
			            <li><a className="google-plus" href="#"><i className="fa fa-google social-icon" /><span>19,101</span><span>Subscribers</span> <i className="fa fa-plus" /></a></li>
			          </ul>
			        </div>
			        <div className="add-area">
			          <Link to="/blog-details"><img className="w-100" src={publicUrl+"assets/img/add/6.png"} alt="img" /></Link>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Trending