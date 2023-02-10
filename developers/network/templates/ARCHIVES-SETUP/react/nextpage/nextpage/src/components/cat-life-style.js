import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Cat from './section-components/cat-life-style';
import Footer from './global-components/footer';

const CatLifeStyle = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Life Style"  />
        <Cat />
        <Footer />
    </div>
}

export default CatLifeStyle

