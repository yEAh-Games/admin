import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="banner-area banner-inner-3">
		  <div className="container-fluid p-0">
		    <div className="row custom-gutters-20">
		      <div className="col-lg-2">
		        <div className="row">
		          <div className="col-lg-12 col-sm-6">
		            <div className="thumb">
		              <img className="w-100" src={publicUrl+"assets/img/banner/2.png"} alt="img" />
		            </div>
		          </div>
		          <div className="col-lg-12 col-sm-6">
		            <div className="thumb">
		              <img className="w-100" src={publicUrl+"assets/img/banner/3.png"} alt="img" />
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-5">
		        <div className="single-post-wrap style-overlay-bg">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/banner/4.png"} alt="img" />
		          </div>
		          <div className="details">
		            <div className="post-meta-single mb-3">
		              <ul>
		                <li><Link className="tag-base tag-blue" to="/cat-page">Fashion</Link></li>
		                <li><p> - 2032 Views</p></li>
		              </ul>
		            </div>
		            <h5 className="title"><Link to="/blog-details">Its Great The Goverment is Will Tightening Grmbling</Link></h5>
		            <div className="media author-meta mt-2">
		              <div className="media-left mr-2">
		                <img src={publicUrl+"assets/img/banner/01.png"} alt="img" />
		              </div>
		              <div className="media-body align-self-center">
		                <p className="m-0"><span>Prando</span> - JUNE 21 , 2020 - 36 Comment</p>
		              </div>    
		            </div>
		          </div>
		        </div>
		      </div>  
		      <div className="col-lg-3 col-sm-7">
		        <div className="single-post-wrap style-overlay">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/banner/5.png"} alt="img" />
		          </div>
		          <div className="details">
		            <div className="post-meta-single">
		              <Link className="tag-base tag-blue" to="/cat-page">Fashion</Link>
		            </div>
		            <h6 className="title"><Link to="/blog-details">55 per cent emissions cuts in EU </Link></h6>
		            <p className="mt-0">By Ashliey Grahand</p>
		          </div>
		        </div>
		        <div className="single-post-wrap style-overlay">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/banner/6.png"} alt="img" />
		          </div>
		          <div className="details">
		            <div className="post-meta-single">
		              <Link className="tag-base tag-blue" to="/cat-page">Fashion</Link>
		            </div>
		            <h6 className="title"><Link to="/blog-details">55 per cent emissions cuts in EU </Link></h6>
		            <p className="mt-0">By Ashliey Grahand</p>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-2 col-sm-5">
		        <div className="thumb">
		          <img className="w-100" src={publicUrl+"assets/img/banner/7.png"} alt="img" />
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

        }
}

export default BannerV3