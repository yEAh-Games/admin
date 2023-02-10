import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import BlogList from './blog-components/blog-list';
import Footer from './global-components/footer';

const BlofPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog"  />
        <BlogList />
        <Footer />
    </div>
}

export default BlofPage

