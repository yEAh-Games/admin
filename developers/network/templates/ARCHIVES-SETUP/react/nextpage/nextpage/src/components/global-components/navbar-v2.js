import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV2 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
           	<div className="navbar-area">
				  {/* topbar end*/}
				  <div className="topbar-area">
				    <div className="container">
				      <div className="row justify-content-center">
				        <div className="col-lg-6 col-md-7 align-self-center">
				          <div className="topbar-menu text-md-left text-center">
				            <ul className="align-self-center">
				              <li><Link to="/author">Author</Link></li>
				              <li><Link to="/cat-page">Tech News</Link></li>
				              <li><Link to="/cat-fashion">Fashion</Link></li>
				              <li><Link to="/cat-life-style">Life Style</Link></li>
				            </ul>
				          </div>
				        </div>
				        <div className="col-lg-6 col-md-5 text-md-right text-center mt-2 mt-md-0">
				          <div className="topbar-social">
				            <div className="topbar-date d-none d-lg-inline-block"><i className="fa fa-calendar" /> Saturday, October 7</div>
				            <ul className="social-area social-area-2">
					           <li><a className="facebook-icon" href="https://www.facebook.com/solverwp/"><i className="fa fa-facebook" /></a></li>
				              <li><a className="twitter-icon" href="https://www.twitter.com/solverwp/"><i className="fa fa-twitter" /></a></li>
				              <li><a className="youtube-icon" href="https://www.youtube.com/solverwp/"><i className="fa fa-youtube-play" /></a></li>
				              <li><a className="instagram-icon" href="https://www.instagram.com/solverwp/"><i className="fa fa-instagram" /></a></li>
				              <li><a className="google-icon" href="https://www.google.com/solverwp/"><i className="fa fa-google-plus" /></a></li>
				            </ul>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				  {/* topbar end*/}
				  {/* adbar end*/}
				  <div className="adbar-area d-none d-lg-block">
				    <div className="container">
				      <div className="row">
				        <div className="col-xl-6 col-lg-5 align-self-center">
				          <div className="logo text-md-left text-center">
				            <Link className="main-logo" to="/"><img src={publicUrl+"assets/img/logo-2.png"} alt="img" /></Link>
				          </div>
				        </div>
				        <div className="col-xl-6 col-lg-7 text-md-right text-center">
				          <a href="#" className="adbar-right">
				            <img src={publicUrl+"assets/img/add/1.png"} alt="img" />
				          </a>
				        </div>
				      </div>
				    </div>
				  </div>
				  {/* adbar end*/}
				  {/* navbar start */}
				  <nav className="navbar navbar-expand-lg">
				    <div className="container nav-container">
				      <div className="responsive-mobile-menu">
				        <div className="logo d-lg-none d-block">
				          <Link className="main-logo" to="/"><img src="assets/img/logo.png" alt="img" /></Link>
				        </div>
				        <button className="menu toggle-btn d-block d-lg-none" data-target="#nextpage_main_menu" aria-expanded="false" aria-label="Toggle navigation">
				          <span className="icon-left" />
				          <span className="icon-right" />
				        </button>
				      </div>
				      <div className="nav-right-part nav-right-part-mobile">
				        <a className="search header-search" href="#"><i className="fa fa-search" /></a>
				      </div>
				      <div className="collapse navbar-collapse" id="nextpage_main_menu">
				        <ul className="navbar-nav menu-open">
				          <li className="menu-item-has-children current-menu-item">
				            <Link to="/">Home</Link>
				            <ul className="sub-menu">
				              <li><Link to="/">Home 01</Link></li>
				              <li><Link to="/home-v2">Home 02</Link></li>
				              <li><Link to="/home-v3">Home 03</Link></li>
				            </ul>
				          </li>
				          <li className="menu-item-has-children current-menu-item">
				            <Link to="/cat-page">Category</Link>
				            <ul className="sub-menu">
				              <li><Link to="/cat-page">Tech</Link></li>
				              <li><Link to="/cat-sports">Sports</Link></li>
				              <li><Link to="/cat-life-style">Lifestyle</Link></li>
				              <li><Link to="/cat-fashion">Fashion</Link></li>
				            </ul>
				          </li>
				          <li className="menu-item-has-children current-menu-item">
				            <a href="#">Pages</a>
				            <ul className="sub-menu">
				              <li><Link to="/error">Error</Link></li>
				              <li><Link to="/author">Author</Link></li>
				              <li><Link to="/blog">Blog</Link></li>
				              <li><Link to="/blog-details">Blog Details</Link></li>
				            </ul>
				          </li>
				          <li className="menu-item-has-children current-menu-item">
				            <Link to="/blog">Blog</Link>
				            <ul className="sub-menu">
				              <li><Link to="/blog">Blog</Link></li>
				              <li><Link to="/blog-details">Blog Details</Link></li>
				            </ul>
				          </li>
				        </ul>
				      </div>
				      <div className="nav-right-part nav-right-part-desktop">
				        <div className="menu-search-inner">
				          <input type="text" placeholder="Search For" />
				          <button type="submit" className="submit-btn"><i className="fa fa-search" /></button>
				        </div>
				      </div>
				    </div>
				  </nav>
				</div>

        )
    }
}


export default NavbarV2