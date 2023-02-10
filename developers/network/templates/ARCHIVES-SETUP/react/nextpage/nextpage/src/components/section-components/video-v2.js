import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="post-area bg-sky pd-top-80 pd-bottom-60">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 order-lg-4">
        <div className="single-post-wrap style-overlay">
          <div className="thumb">
            <img src={publicUrl+"assets/img/video/7.png"} alt="img" />
            <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-large play-btn-yellow mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
          </div>
          <div className="details">
            <div className="post-meta-single">
              <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
              <p><i className="fa fa-clock-o" />08.22.2020</p>
            </div>
            <h6 className="title"><Link to="/blog-details">Scientists Discover the Switch That Makes Human</Link></h6>
          </div>
        </div>
      </div>
      <div className="col-lg-3 order-lg-1">
        <div className="section-title">
          <h6 className="title">Automobile News</h6>
        </div>
        <div className="post-slider owl-carousel">
          <div className="item">
            <div className="single-post-list-wrap">
              <div className="media">
                <div className="media-left">
                  <img src={publicUrl+"assets/img/post/list/1.png"} alt="img" />
                </div>
                <div className="media-body align-self-center">
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
                <div className="media-body align-self-center">
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
                <div className="media-body align-self-center">
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
                <div className="media-body align-self-center">
                  <div className="details">
                    <div className="post-meta-single">
                      <ul>
                        <li><i className="fa fa-clock-o" />08.22.2020</li>
                      </ul>
                    </div>
                    <h6 className="title"><Link to="/blog-details">The FAA will drone detect-ing in airports this</Link></h6>
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
                <div className="media-body align-self-center">
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
                <div className="media-body align-self-center">
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
                <div className="media-body align-self-center">
                  <div className="details">
                    <div className="post-meta-single">
                      <ul>
                        <li><i className="fa fa-clock-o" />08.22.2020</li>
                      </ul>
                    </div>
                    <h6 className="title"><Link to="/blog-details">Detecting technologies in airports this</Link></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-post-list-wrap">
              <div className="media">
                <div className="media-left">
                  <img src={publicUrl+"assets/img/post/list/4.png"} alt="img" />
                </div>
                <div className="media-body align-self-center">
                  <div className="details">
                    <div className="post-meta-single">
                      <ul>
                        <li><i className="fa fa-clock-o" />08.22.2020</li>
                      </ul>
                    </div>
                    <h6 className="title"><Link to="/blog-details">The FAA will drone detect-ing in airports this</Link></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 order-lg-12">
        <form className="single-newsletter-inner bg-yellow text-center">
          <h5>Newsletter</h5>
          <p>Stay Updated on all that's new add noteworthy</p>
          <div className="single-input-inner">
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div className="single-input-inner">
            <input type="text" placeholder="Enter Your Email" />
          </div>
          <a className="btn btn-base w-100" href="#">Subscribe Now</a>
        </form>
      </div>
    </div>
  </div>
</div>


        }
}

export default VideoV2