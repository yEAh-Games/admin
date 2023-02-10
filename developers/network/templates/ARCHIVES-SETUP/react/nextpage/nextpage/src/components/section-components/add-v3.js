import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AddV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="add-area">
			  <div className="container">
			    <a href="#"><img src={publicUrl+"assets/img/add/4.png"} alt="img" /></a>
			  </div>
			</div>
        }
}

export default AddV3