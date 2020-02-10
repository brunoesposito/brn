import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';

import { Container } from 'react-bootstrap';
import { GlobalStyle } from '../style/global';

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
