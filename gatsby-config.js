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
        siteUrl: `https://build-2fbf4f0e-8a26-49bb-a5ea-b65625e7cfcd.gtsb.io/`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // `gatsby-plugin-offline`,
        `gatsby-plugin-smoothscroll`,
        'gatsby-plugin-robots-txt',
        `gatsby-plugin-sitemap`,
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
                siteUrl: `https://build-2fbf4f0e-8a26-49bb-a5ea-b65625e7cfcd.gtsb.io/`,
            },
        }
    ],
}
