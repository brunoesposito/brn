import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { title as siteTitle, description, author } from './metadata';

function SEO({ lang, meta }) {
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={siteTitle}
            titleTemplate={siteTitle}
            meta={[
                {
                    name: `description`,
                    content: description,
                },
                {
                    property: `og:title`,
                    content: siteTitle,
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: author,
                },
                {
                    name: `twitter:title`,
                    content: siteTitle,
                },
                {
                    name: `twitter:description`,
                    content: description,
                },
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: `pt`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO;
