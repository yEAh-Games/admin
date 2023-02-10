import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import CatPage from './components/cat-page';
import CatSports from './components/cat-sports';
import lifeStyle from './components/cat-life-style';
import Fashion from './components/cat-fashion';
import Author from './components/author';
import Error from './components/error';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';



class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
	                    <Route  path="/home-v2" component={HomeV2} />
	                    <Route  path="/home-v3" component={HomeV3} />
	                    <Route  path="/cat-page" component={CatPage} />
	                    <Route  path="/cat-sports" component={CatSports} />
	                    <Route  path="/cat-life-style" component={lifeStyle} />
	                    <Route  path="/cat-fashion" component={Fashion} />
	                    <Route  path="/author" component={Author} />
	                    <Route  path="/error" component={Error} />
	                    <Route  path="/blog" component={Blog} />
	                    <Route  path="/blog-details" component={BlogDetails} />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('nextpage'));
