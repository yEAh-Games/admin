import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="video-area pd-top-80">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-post-wrap style-overlay">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/video/1.png"} alt="img" />
                        <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-large play-btn-yellow mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                      </div>
                      <div className="details">
                        <div className="post-meta-single">
                          <Link className="tag-base tag-purple" to="/cat-page">Tech</Link>
                          <p><i className="fa fa-clock-o" />08.22.2020</p>
                        </div>
                        <h6 className="title"><Link to="/blog-details">Scientists Discover the Switch That Makes Human</Link></h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-post-wrap style-overlay">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/video/01.png"} alt="img" />
                        <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-large play-btn-yellow mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                      </div>
                      <div className="details">
                        <div className="post-meta-single">
                          <Link className="tag-base tag-blue" to="cat-page">Tech</Link>
                          <p><i className="fa fa-clock-o" />08.22.2020</p>
                        </div>
                        <h6 className="title"><Link to="/blog-details">Scientists Discover the Switch That Makes Human</Link></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
}

export default VideoV3