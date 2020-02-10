import { useStaticQuery, graphql } from 'gatsby';

export 
    const { 
        site: {
            siteMetadata: {
                title,
                description,
                author,
                year,
                platform: {
                    name: platformName,
                    url: platformUrl
                }
            }
        } 
    } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author,
                        year,
                        platform {
                            name,
                            url
                        }
                    }
                }
            }
        `
    );