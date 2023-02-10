import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Author from './section-components/author';
import Footer from './global-components/footer';

const AuthorPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Author"  />
        <Author />
        <Footer />
    </div>
}

export default AuthorPage

