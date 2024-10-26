import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Link = styled.a`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 10px;
    position: relative;
    z-index: 0;
    
    &::before {
        content: '';
        display: inline-block;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        z-index: -1;
        bottom: 5px;
        left: 0;
        right: 0;
    }
    
    &:hover {
        &::before {
         height: 10px;
        }
       
    }
    
`