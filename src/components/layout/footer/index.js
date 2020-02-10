import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { BoxFooter } from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsappSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
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

    return (
        <BoxFooter id="footer">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="http://api.whatsapp.com/send?phone=5514996763669&text=Ol%C3%A1%20Bruno,%20vamos%20conversar?" target="_blank" rel="noopener noreferrer" className="text-white" title="WhatsApp">
                        <FontAwesomeIcon icon={faWhatsappSquare} size="2x" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.facebook.com/brunoaesposito" target="_blank" rel="noopener noreferrer" className="text-white" title="Facebook">
                        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/brunoesposito/" target="_blank" rel="noopener noreferrer" className="text-white" title="Linkedin">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </li>
            </ul>
            <div className="bg-primary p-2 mt-2">
                <p className="m-0">{data.site.siteMetadata.author} © {data.site.siteMetadata.year}, Built with <a href={data.site.siteMetadata.platform.url} title="Gatsby" className="text-white" rel="noopener noreferrer" target="_blank">{data.site.siteMetadata.platform.name}</a></p>
            </div>
        </BoxFooter>
    );
}

export default Footer;
