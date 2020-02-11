module.exports = {
    siteMetadata: {
        title: `BRN`,
        description: `Esse é o site do programador Bruno Aurichio Esposito. Sou formado em Design Gráfico, estudo programação e gosto muito de games.`,
        author: `Bruno Aurichio Esposito`,
        year: new Date().getFullYear(),
        platform: {
            name: 'Gatsby',
            url: 'https://www.gatsbyjs.org'
        },
        siteUrl: `https://brn.netlify.com/`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // `gatsby-plugin-offline`,
        `gatsby-plugin-smoothscroll`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#4F86C6`,
                theme_color: `#4F86C6`,
                display: `minimal-ui`,
                icon: `src/images/favicon.svg`,
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Roboto', 'sans-serif']
                }
            }
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://brn.netlify.com/`,
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://brn.netlify.com/',
                sitemap: 'https://brn.netlify.com/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `/sitemap.xml`,
                query: `
                    {
                    site {
                        siteMetadata {
                            siteUrl
                        }
                    }

                    allSitePage {
                        edges {
                            node {
                                path
                            }
                        }
                    }
                }`,
                serialize: ({ site, allSitePage }) => allSitePage.edges.map(edge => {
                    return {
                        url: site.siteMetadata.siteUrl + edge.node.path,
                        changefreq: `daily`,
                        priority: 0.7,
                    }
                })
            }
        }
    ],
}
