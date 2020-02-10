import React from 'react';
import Image from '../../image';
import scrollTo from 'gatsby-plugin-smoothscroll';

import VideoCode from '../../../videos/code.mp4';
import { Brand, BoxHeader, BoxVideo } from './style';

const Header = () => {
    return (
        <>
            <BoxHeader>
                <Brand maxWidth="200">
                    <Image src="BRN.png" maxWidth="200" />
                </Brand>
                <h1 className="text-white mt-5 mb-4">Hi, I'm Bruno Aurichio Esposito.<br />A Full Stack Developer</h1>
                <button onClick={() => scrollTo('#footer')} className="btn btn-outline-primary">Contact me</button>
            </BoxHeader>
            <BoxVideo>
                <video autoplay="true" muted loop>
                    <source src={VideoCode} type="video/mp4" />
                </video>
            </BoxVideo>
        </>
    );
}

export default Header;
