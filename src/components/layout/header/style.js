import styled from 'styled-components';

import { colors } from '../../style/colors';

const Brand = styled.div(props => ({
    maxWidth: `${props.maxWidth}px`,
    width: `${props.maxWidth}px`,
    margin: '0 auto',
}));

const BoxHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    position: relative;
    z-index: 2;

    padding: .5rem !important;
    height: 100vh;

    background: ${colors.black};
    background: -moz-linear-gradient(180deg, rgba(51,51,51,0.8) 0%, ${colors.black} 100%);
    background: -webkit-linear-gradient(180deg, rgba(51,51,51,0.8) 0%, ${colors.black} 100%);
    background: linear-gradient(180deg, rgba(51,51,51,0.8) 0%, ${colors.black} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="${colors.black}",endColorstr="${colors.black}",GradientType=1);
`;

const BoxVideo = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    video {
        max-width: 100%;
        width: 100%;
    }
`;

export {
    Brand,
    BoxHeader,
    BoxVideo
}