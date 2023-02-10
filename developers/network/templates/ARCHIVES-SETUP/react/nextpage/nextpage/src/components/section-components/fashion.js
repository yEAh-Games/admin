import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Fashion extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="bg-sky pd-top-80 pd-bottom-50 go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-overlay-bg">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/9.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="post-meta-single mb-3">
			              <ul>
			                <li><Link className="tag-base tag-blue" to="/cat-page">fashion</Link></li>
			                <li><p><i className="fa fa-clock-o" />08.22.2020</p></li>
			              </ul>
			            </div>
			            <h6 className="title"><Link to="/blog-details">A Comparison of the Sony FE 85mm f/1.4 GM and Sigma</Link></h6>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/10.png"} alt="img" />
			            <p className="btn-date"><i className="fa fa-clock-o" />08.22.2020</p>
			          </div>
			          <div className="details">
			            <h6 className="title"><Link to="/blog-details">Rocket Lab will resume launches no sooner than</Link></h6>
			          </div>
			        </div>
			        <div className="single-post-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/11.png"} alt="img" />
			            <p className="btn-date"><i className="fa fa-clock-o" />08.22.2020</p>
			          </div>
			          <div className="details">
			            <h6 className="title"><Link to="/blog-details">P2P Exchanges in Africa Pivot: Nigeria and Kenya the</Link></h6>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/12.png"} alt="img" />
			            <p className="btn-date"><i className="fa fa-clock-o" />08.22.2020</p>
			          </div>
			          <div className="details">
			            <h6 className="title"><Link to="/blog-details">Bitmex Restricts Ontario Residents as Mandated by</Link></h6>
			          </div>
			        </div>
			        <div className="single-post-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/13.png"} alt="img" />
			            <p className="btn-date"><i className="fa fa-clock-o" />08.22.2020</p>
			          </div>
			          <div className="details">
			            <h6 className="title"><Link to="/blog-details">The Bitcoin Network Now 7 Plants Worth of Power</Link></h6>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="trending-post style-box">
			          <div className="section-title">
			            <h6 className="title">Trending News</h6>
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
			                      <h6 className="title"><Link to="/blog-details">Important to rate more liquidity</Link></h6>
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
			                      <h6 className="title"><Link to="/blog-details">Sounds like John got the Josh</Link></h6>
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
			                      <h6 className="title"><Link to="/blog-details">Grayscale's and Bitcoin Trusts</Link></h6>
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
			                      <h6 className="title"><Link to="/blog-details">Sounds like John got the Josh</Link></h6>
			                    </div>
			                  </div>
			                </div>
			              </div>
			              <div className="single-post-list-wrap mb-0">
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
			                      <h6 className="title"><Link to="/blog-details">Grayscale's and Bitcoin Trusts</Link></h6>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
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
			                      <h6 className="title"><Link to="/blog-details">Important to rate more liquidity</Link></h6>
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
			                      <h6 className="title"><Link to="/blog-details">Sounds like John got the Josh</Link></h6>
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
			                      <h6 className="title"><Link to="/blog-details">Grayscale's and Bitcoin Trusts</Link></h6>
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
			                      <h6 className="title"><Link to="/blog-details">Sounds like John got the Josh</Link></h6>
			                    </div>
			                  </div>
			                </div>
			              </div>
			              <div className="single-post-list-wrap mb-0">
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
			                      <h6 className="title"><Link to="/blog-details">Grayscale's and Bitcoin Trusts</Link></h6>
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

export default Fashion