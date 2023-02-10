import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Trending from './section-components/trending';
import Fashion from './section-components/fashion';
import CatSection from './section-components/cat-section';
import Video from './section-components/video';
import Add from './section-components/add';
import VideoV2 from './section-components/video-v2';
import TrendingV2 from './section-components/trending-v2';
import Footer from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Trending />
        <Fashion />
        <CatSection />
        <Video />
        <Add />
        <VideoV2 />
        <TrendingV2 />
        <Footer />
    </div>
}

export default Home_V1

