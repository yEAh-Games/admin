import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Cat from './section-components/cat-tech';
import Footer from './global-components/footer';

const CatPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Tech"  />
        <Cat />
        <Footer />
    </div>
}

export default CatPage

