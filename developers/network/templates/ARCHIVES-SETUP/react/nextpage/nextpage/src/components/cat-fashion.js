import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Cat from './section-components/cat-fashion';
import Footer from './global-components/footer';

const CatFashion = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Fashion"  />
        <Cat />
        <Footer />
    </div>
}

export default CatFashion

