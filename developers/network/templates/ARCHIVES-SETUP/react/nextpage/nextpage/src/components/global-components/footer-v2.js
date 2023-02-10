import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v2 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<div className="footer-area bg-black pd-top-95">
				<div className="container">
					<div className="footer-top text-center">
						<div className="logo">
							<img src={publicUrl + "assets/img/logo.png"} alt="img" />
						</div>
						<ul className="social-area social-area-2">
							<li><a className="facebook-icon" href="https://www.facebook.com/solverwp/"><i className="fa fa-facebook" /></a></li>
							<li><a className="twitter-icon" href="https://www.twitter.com/solverwp/"><i className="fa fa-twitter" /></a></li>
							<li><a className="youtube-icon" href="https://www.youtube.com/solverwp/"><i className="fa fa-youtube-play" /></a></li>
							<li><a className="instagram-icon" href="https://www.instagram.com/solverwp/"><i className="fa fa-instagram" /></a></li>
							<li><a className="google-icon" href="https://www.google.com/solverwp/"><i className="fa fa-google-plus" /></a></li>
						</ul>
					</div>
					<div className="footer-bottom text-center go-top">
						<ul className="widget_nav_menu">
							<li><Link to="/autho">Author</Link></li>
							<li><Link to="/blog">Blog</Link></li>
							<li><Link to="/cat-page">Tech News</Link></li>
							<li><Link to="/cat-fashion">Fashion</Link></li>
						</ul>
						<p>Copyright ©2022 Nextpage</p>
					</div>
				</div>
			</div>

		)
	}
}


export default Footer_v2