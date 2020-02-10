import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ lang, meta, title, description }) {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={data.site.siteMetadata.title}
            titleTemplate={data.site.siteMetadata.title}
            meta={[
                {
                    name: `description`,
                    content: data.site.siteMetadata.description,
                },
                {
                    property: `og:title`,
                    content: data.site.siteMetadata.title,
                },
                {
                    property: `og:description`,
                    content: data.site.siteMetadata.description,
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
                    content: data.site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: data.site.siteMetadata.title,
                },
                {
                    name: `twitter:description`,
                    content: data.site.siteMetadata.description,
                },
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: `pt`,
    title: ``,
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
