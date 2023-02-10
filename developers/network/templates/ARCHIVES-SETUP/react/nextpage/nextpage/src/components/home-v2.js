import React from 'react';
import Navbar from './global-components/navbar-v2';
import Banner from './section-components/banner-v2';
import Trending from './section-components/trending-v3';
import TrendingV4 from './section-components/trending-v4';
import Catv2 from './section-components/cat-section-v2';
import NewsLatter from './section-components/newsletter';
import VideoV3 from './section-components/video-v3';
import Ads from './section-components/add-v2';
import TrendingV5 from './section-components/trending-v5';
import Footer from './global-components/footer-v2';

const Home_V2 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Trending />
        <TrendingV4 />
        <Catv2 />
        <NewsLatter />
        <VideoV3 />
        <Ads />
        <TrendingV5 />
        <Footer />
    </div>
}

export default Home_V2

