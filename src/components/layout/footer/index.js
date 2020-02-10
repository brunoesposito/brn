import React from 'react';

import { author, year, platformName, platformUrl } from '../../metadata';
import { BoxFooter } from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsappSquare, faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <BoxFooter id="footer">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="http://api.whatsapp.com/send?phone=5514996763669&text=Ol%C3%A1%20Bruno,%20vamos%20conversar?" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FontAwesomeIcon icon={faWhatsappSquare} size="2x" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.facebook.com/brunoaesposito" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/brunoesposito/" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="https://github.com/brunoesposito" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                    </a>
                </li>
            </ul>
            <div className="bg-primary p-2 mt-2">
                <p className="m-0">{author} © {year}, Built with <a href={platformUrl} title="Gatsby" className="text-white" rel="noopener noreferrer" target="_blank">{platformName}</a></p>
            </div>
        </BoxFooter>
    );
}

export default Footer;
