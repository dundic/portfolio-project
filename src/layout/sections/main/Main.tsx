import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo.webp";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";


export const Main = () => {
    return (
            <StyledMain>
                <Container>
                    <FlexWrapper align="center" justify="space-between">
                        <div>
                            <SmallText>Hi There</SmallText>
                            <Name>I am <span>Svetlana Dyablo</span></Name>
                            <MainTitle>A Web Developer.</MainTitle>
                        </div>
                        <PhotoWrapper>
                            <Photo src={photo} alt="Photo"/>
                        </PhotoWrapper>
                    </FlexWrapper>
                </Container>


            </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #fff5e7;
    display: flex;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const MainTitle = styled.h1`
    font: 400 27px "Poppins", sans-serif;
    color: #fff;
`
const Name = styled.h2`
    font: 700 50px "Josefin Sans", sans-serif;
    letter-spacing: 0.05em;
    color: #fff;
    margin: 10px 0;
    
    span {
        position: relative;
        z-index: 1;
        
        &::before {
            position: absolute;
            bottom: 0;
            z-index: -1;
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
        }
    }
`

const SmallText = styled.span`
    font-size: 14px;
    font-weight: 400;
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 1;
    
    &::before {
        content: '';
        width: 360px;
        height: 470px;
        border: ${theme.colors.accent} 5px solid;
        
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
    }
`
