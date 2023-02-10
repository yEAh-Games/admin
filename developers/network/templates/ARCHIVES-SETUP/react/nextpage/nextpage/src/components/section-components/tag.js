import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Tag extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="tag-area mg-top--100 go-top">
              <div className="container">
                <div className="tag-area-shadow">
                  <div className="row custom-gutters-14">
                    <div className="col-lg-2 col-sm-4">
                      <div className="single-category-inner">
                        <img src={publicUrl+"assets/img/category/3.png"} alt="img" />
                        <Link className="tag-base tag-blue" to="/cat-page">Fashion <span className="notice">23</span> </Link>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4">
                      <div className="single-category-inner">
                        <img src={publicUrl+"assets/img/category/4.png"} alt="img" />
                        <Link className="tag-base tag-red" to="/cat-page">Tech <span className="notice">2</span> </Link>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4">
                      <div className="single-category-inner">
                        <img src={publicUrl+"assets/img/category/5.png"} alt="img" />
                        <Link className="tag-base tag-green" to="/cat-page">Game <span className="notice">21</span> </Link>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4">
                      <div className="single-category-inner">
                        <img src={publicUrl+"assets/img/category/6.png"} alt="img" />
                        <Link className="tag-base tag-light-green" to="/cat-page">Helth <span className="notice">36</span> </Link>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4">
                      <div className="single-category-inner">
                        <img src={publicUrl+"assets/img/category/7.png"} alt="img" />
                        <Link className="tag-base tag-blue" to="/cat-page">Tech <span className="notice">08</span> </Link>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4">
                      <div className="single-category-inner">
                        <img src={publicUrl+"assets/img/category/8.png"} alt="img" />
                        <Link className="tag-base tag-purple" to="/cat-page">Tech <span className="notice">12</span> </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            }
}

export default Tag