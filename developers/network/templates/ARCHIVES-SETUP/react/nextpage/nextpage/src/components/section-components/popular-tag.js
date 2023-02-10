import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PopularTags extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="tag-area pd-bottom-70 go-top">
            <div className="container">
              <div className="section-title">
                <div className="row">
                  <div className="col-md-9">
                    <h6 className="title">Popular Tags</h6>
                  </div>
                </div>
              </div>
              <div className="row custom-gutters-14">
                <div className="col-md-3 col-sm-4">
                  <div className="single-category-inner">
                    <img src={publicUrl+"assets/img/category/9.png"} alt="img" />
                    <Link className="tag-base tag-blue" to="/cat-page">Fashion <span className="notice">23</span> </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="single-category-inner">
                    <img src={publicUrl+"assets/img/category/10.png"} alt="img" />
                    <Link className="tag-base tag-red" to="/cat-page">Tech <span className="notice">2</span> </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="single-category-inner">
                    <img src={publicUrl+"assets/img/category/11.png"} alt="img" />
                    <Link className="tag-base tag-green" to="/cat-page">Game <span className="notice">21</span> </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="single-category-inner">
                    <img src={publicUrl+"assets/img/category/12.png"} alt="img" />
                    <Link className="tag-base tag-light-green" to="/cat-page">Helth <span className="notice">36</span> </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="single-category-inner">
                    <img src={publicUrl+"assets/img/category/13.png"} alt="img" />
                    <Link className="tag-base tag-blue" to="/cat-page">Tech <span className="notice">08</span> </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="single-category-inner">
                    <img src={publicUrl+"assets/img/category/14.png"} alt="img" />
                    <Link className="tag-base tag-purple" to="/cat-page">Tech <span className="notice">12</span> </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="single-category-inner">
                    <img src={publicUrl+"assets/img/category/15.png"} alt="img" />
                    <Link className="tag-base tag-green" to="/cat-page">Game <span className="notice">21</span> </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="single-category-inner">
                    <img src={publicUrl+"assets/img/category/16.png"} alt="img" />
                    <Link className="tag-base tag-light-green" to="/cat-page">Helth <span className="notice">36</span> </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

            }
}

export default PopularTags