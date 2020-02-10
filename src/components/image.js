import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function Image({ src, maxWidth }) {
    const dataImg = useStaticQuery(
        graphql`
            query(
                $src: String,
                $maxWidth: Int
            ) {
                placeholderImage: file(relativePath: { eq: $src }) 
                    {
                        childImageSharp {
                            fluid(maxWidth: $maxWidth) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
            }
        `
    );

    return <Img fluid={dataImg.placeholderImage.childImageSharp.fluid} />
}

Image.defaultProps = {
    src: '',
    maxWidth: 300
}

Image.propTypes = {
    src: PropTypes.string,
    maxWidth: PropTypes.number
}

export default Image;
