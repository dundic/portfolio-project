import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
            <StyledSkills>
                <Container>
                <SectionTitle>MySkills</SectionTitle>
                <FlexWrapper wrap="wrap" justify={'space-between'}>
                    <Skill iconId = 'code' title={'html5'} description={'Lorem ipsum dolor sit amet, consectutor adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua Ut enim'}/>
                    <Skill iconId = 'css' title={'css3'}description={'Lorem ipsum dolor sit amet, consectutor adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua Ut enim'}/>
                    <Skill iconId = 'react' title={'React'}description={'Lorem ipsum dolor sit amet, consectutor adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua Ut enim'}/>
                    <Skill iconId = 'typescript' title={'html5'} description={'Lorem ipsum dolor sit amet, consectutor adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua Ut enim'}/>
                    <Skill iconId = 'styledComponent' title={'css3'}description={'Lorem ipsum dolor sit amet, consectutor adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua Ut enim'}/>
                    <Skill iconId = 'figma' title={'React'}description={'Lorem ipsum dolor sit amet, consectutor adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua Ut enim'}/>

                </FlexWrapper>
                </Container>
            </StyledSkills>
    );
};

const StyledSkills = styled.section`

`