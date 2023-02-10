import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="banner-area banner-inner-1 bg-black">
			  {/* banner area start */}
			  <div className="banner-inner pt-5 go-top">
			    <div className="container">
			      <div className="row">
			        <div className="col-lg-6">
			          <div className="thumb after-left-top">
			            <img src={publicUrl+"assets/img/banner/1.png"} alt="img" />
			          </div>
			        </div>
			        <div className="col-lg-6 align-self-center">
			          <div className="banner-details mt-4 mt-lg-0">
			            <div className="post-meta-single">
			              <ul>
			                <li><Link className="tag-base tag-blue" to="/cat-page">Tech</Link></li>
			                <li className="date"><i className="fa fa-clock-o" />08.22.2020</li>
			              </ul>
			            </div>
			            <h2>ReZoom outage left some people locked out.</h2>
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			            <Link className="btn btn-blue" to="/blog-details">Read More</Link>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  {/* banner area end */}
			  <div className="container go-top">
			    <div className="row">
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-white">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/1.png"} alt="img" />
			            <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <h6 className="title"><Link to="/blog-details">The FAA will test drone detecting technologies in airports this year</Link></h6>
			            <div className="post-meta-single mt-3">
			              <ul>
			                <li><i className="fa fa-clock-o" />08.22.2020</li>
			              </ul>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-white">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/2.png"} alt="img" />
			            <Link className="tag-base tag-orange" to="/cat-page">Food</Link>
			          </div>
			          <div className="details">
			            <h6 className="title"><Link to="/cat-page">Rocket Lab will resume launches no sooner than August 27th</Link></h6>
			            <div className="post-meta-single mt-3">
			              <ul>
			                <li><i className="fa fa-clock-o" />08.22.2020</li>
			              </ul>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-white">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/3.png"} alt="img" />
			            <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
			          </div>
			          <div className="details">
			            <h6 className="title"><Link to="/blog-details">Google Drive flaw may attackers fool you into install malware</Link></h6>
			            <div className="post-meta-single mt-3">
			              <ul>
			                <li><i className="fa fa-clock-o" />08.22.2020</li>
			              </ul>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-post-wrap style-white">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/post/4.png"} alt="img" />
			            <Link className="tag-base tag-orange" to="/cat-page">Food</Link>
			          </div>
			          <div className="details">
			            <h6 className="title"><Link to="/blog-details">TikTok will sue the US over threatened ban</Link></h6>
			            <div className="post-meta-single mt-3">
			              <ul>
			                <li><i className="fa fa-clock-o" />08.22.2020</li>
			              </ul>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>  
			</div>

        }
}

export default Banner