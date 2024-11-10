import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles';
import { Fade } from "react-awesome-reveal";

const skillData = [
    {
        iconId: "code",
        title: "html5",
        description: "Lorem ipsum dolor sit amet, consectutor adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua Ut enim",
    },
    {
        iconId: "css",
        title: "css3",
        description: "Lorem ipsum dolor sit amet, consectutor adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua Ut enim",
    },
    {
        iconId: "react",
        title: "react",
        description: "Lorem ipsum dolor sit amet, consectutor adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua Ut enim",
    },
    {
        iconId: "typescript",
        title: "typescript",
        description: "Lorem ipsum dolor sit amet, consectutor adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua Ut enim",
    },
    {
        iconId: "styledComponent",
        title: "styled component",
        description: "Lorem ipsum dolor sit amet, consectutor adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua Ut enim",
    },
    {
        iconId: "figma",
        title: "WEB DESIgN",
        description: "Lorem ipsum dolor sit amet, consectutor adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua Ut enim",
    },
]

export const Skills = () => {
    return (
            <S.Skills id={'skills'}>
                <Container>
                    <SectionTitle>MySkills</SectionTitle>
                    <FlexWrapper wrap="wrap" justify={'space-between'}>
                        <Fade cascade={true} damping={0.2}>
                            {skillData.map((s, index) => {
                                return <Skill iconId={s.iconId} key={index}
                                              title={s.title}
                                              description={s.description}/>
                            })}
                        </Fade>
                    </FlexWrapper>
                </Container>
            </S.Skills>
    );
};

