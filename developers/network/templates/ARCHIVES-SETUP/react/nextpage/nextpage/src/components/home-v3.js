import React from 'react';
import Navbar from './global-components/navbar-v3';
import Banner from './section-components/banner-v3';
import Add from './section-components/add-v3';
import TopNews from './section-components/top-news';
import MostViewed from './section-components/most-view';
import NewsArea from './section-components/news-area';
import VideoV4 from './section-components/video-v4';
import Tags from './section-components/tag';
import TopNews2 from './section-components/top-news-v2';
import PopularTags from './section-components/popular-tag';
import Footer from './global-components/footer';

const Home_V3 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Add />
        <TopNews />
        <MostViewed />
        <NewsArea />
        <VideoV4 />
        <Tags />
        <TopNews2 />
        <PopularTags />
        <Footer />
    </div>
}

export default Home_V3

