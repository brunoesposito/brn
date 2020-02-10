import styled from 'styled-components';

import { colors } from '../../style/colors';

const Brand = styled.div(props => ({
    maxWidth: `${props.maxWidth}px`,
    width: `${props.maxWidth}px`,
    margin: '0 auto',
}));

const BoxHeader = styled.header`
    position: relative;
    text-align: center;
    padding: .5rem !important;
    background: ${colors.black};
    z-index: 2;
    
    @media (min-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;

        background: -moz-linear-gradient(180deg, rgba(51,51,51,0.8) 0%, ${colors.black} 100%);
        background: -webkit-linear-gradient(180deg, rgba(51,51,51,0.8) 0%, ${colors.black} 100%);
        background: linear-gradient(180deg, rgba(51,51,51,0.8) 0%, ${colors.black} 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="${colors.black}",endColorstr="${colors.black}",GradientType=1);
    }
`;

const BoxVideo = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 1;

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        @media (min-aspect-ratio: 16/9) {
            height: 300%;
            top: -100%;
        }

        @media (max-aspect-ratio: 16/9) {
            width: 300%;
            left: -100%;
        }

        @media (max-width: 767px) {
            display: none;
        }
    }
`;

export {
    Brand,
    BoxHeader,
    BoxVideo
}