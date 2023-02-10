import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Cat from './section-components/cat-sports';
import Footer from './global-components/footer';

const CatSports = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Sports"  />
        <Cat />
        <Footer />
    </div>
}

export default CatSports

