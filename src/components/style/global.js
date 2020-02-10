import { createGlobalStyle } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${colors.black};
    }

    a {

        &:hover {
            color: ${colors.primary};
        }
    }

   .bg {

       &-primary {
           background-color: ${colors.primary} !important;
       }
   }

   .text {

        &-primary {
            color: ${colors.primary} !important;
        }
   }

   .btn {

        &-outline-primary {
            color: ${colors.primary} !important;
            border-color: ${colors.primary} !important;

            &:hover {
                color: #fff !important;
                background-color: ${colors.primary} !important;
            }
        }
   }
`;