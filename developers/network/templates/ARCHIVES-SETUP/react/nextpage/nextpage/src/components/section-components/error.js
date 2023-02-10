import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Error extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="blog-page-area go-top">
              <div className="container">
                <div className="error-area-inner text-center">
                  <h2>404</h2>
                  <h3>Sorry, This Page Doesn't Exist.</h3>
                  <Link className="btn btn-base" to="/">Back To Homepage</Link>
                </div>
              </div>
            </div>

        }
}

export default Error