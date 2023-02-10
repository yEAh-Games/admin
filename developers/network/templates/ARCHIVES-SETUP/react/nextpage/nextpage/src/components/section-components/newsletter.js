import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class NewPapper extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="newsletter-area bg-black pd-top-80  pd-bottom-50">
            <div className="container">
              <div className="row">
                <div className="col-xl-9 col-lg-8">
                  <div className="row">
                    <div className="col-xl-6 col-lg-12">
                      <div className="single-post-list-wrap style-two style-white text-left">
                        <div className="media">
                          <div className="media-left">
                            <img src={publicUrl+"assets/img/video/2.png" }alt="img" />
                            <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-small play-btn-gray mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                          </div>
                          <div className="media-body align-self-center">
                            <div className="details">
                              <div className="post-meta-single">
                                <ul>
                                  <li><Link to="/cat-page" className="tag-base tag-blue">Tech</Link></li>
                                  <li><i className="fa fa-clock-o" />08.22.2020</li>
                                </ul>
                              </div>
                              <h6 className="title mt-2">Here’s our take on the latest technology </h6>
                              <p>Lorem ipsum dolor sit amet, cons ectetur elit, sed do eius mod tempor incididunt </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                      <div className="single-post-list-wrap style-two style-white text-left">
                        <div className="media">
                          <div className="media-left">
                            <img src={publicUrl+"assets/img/video/3.png"} alt="img" />
                            <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-small play-btn-gray mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                          </div>
                          <div className="media-body align-self-center">
                            <div className="details">
                              <div className="post-meta-single">
                                <ul>
                                  <li><Link to="/cat-page" className="tag-base tag-blue">Tech</Link></li>
                                  <li><i className="fa fa-clock-o" />08.22.2020</li>
                                </ul>
                              </div>
                              <h6 className="title mt-2">Here’s our take on the latest technology </h6>
                              <p>Lorem ipsum dolor sit amet, cons ectetur elit, sed do eius mod tempor incididunt </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                      <div className="single-post-list-wrap style-two style-white text-left">
                        <div className="media">
                          <div className="media-left">
                            <img src={publicUrl+"assets/img/video/4.png"} alt="img" />
                            <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-small play-btn-gray mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                          </div>
                          <div className="media-body align-self-center">
                            <div className="details">
                              <div className="post-meta-single">
                                <ul>
                                  <li><Link to="/cat-page" className="tag-base tag-blue">Tech</Link></li>
                                  <li><i className="fa fa-clock-o" />08.22.2020</li>
                                </ul>
                              </div>
                              <h6 className="title mt-2">Here’s our take on the latest technology </h6>
                              <p>Lorem ipsum dolor sit amet, cons ectetur elit, sed do eius mod tempor incididunt </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                      <div className="single-post-list-wrap style-two style-white text-left">
                        <div className="media">
                          <div className="media-left">
                            <img src={publicUrl+"assets/img/video/5.png"} alt="img" />
                            <a href="https://www.youtube.com/watch?v=WwvNiN2_Jlk" className="video-play-btn play-btn-small play-btn-gray mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                          </div>
                          <div className="media-body align-self-center">
                            <div className="details">
                              <div className="post-meta-single">
                                <ul>
                                  <li><Link to="/cat-page" className="tag-base tag-blue">Tech</Link></li>
                                  <li><i className="fa fa-clock-o" />08.22.2020</li>
                                </ul>
                              </div>
                              <h6 className="title mt-2">Here’s our take on the latest technology </h6>
                              <p>Lorem ipsum dolor sit amet, cons ectetur elit, sed do eius mod tempor incididunt </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="col-xl-3 col-lg-4">
                  <form className="single-newsletter-inner bg-blue text-center">
                    <h5>Newsletter</h5>
                    <p>Stay Updated on all that's new add noteworthy</p>
                    <div className="single-input-inner">
                      <input type="text" placeholder="Enter Your Name" />
                    </div>
                    <div className="single-input-inner">
                      <input type="text" placeholder="Enter Your Email" />
                    </div>
                    <a className="btn btn-white w-100" href="#">Subscribe Now</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        }
}

export default NewPapper