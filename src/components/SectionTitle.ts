import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30})};
    
    text-align: center;
    //font: 600 36px "Josefin Sans", sans-serif;
    letter-spacing: 0.14em;
    margin-bottom: 90px;
    
    position: relative;
    
    &::before {
        content: '';
        display: inline-block;
        height: 1px;
        width: 55px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);

        @media ${theme.media.mobile} {
            bottom: -24px;
        }
        
    }
`