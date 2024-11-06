import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj-1.png";
import timerImg from "../../../assets/images/proj-2.png";
import {Container} from "../../../components/Container";
import {S} from './Works_Styles'

const worksItems = ['All', 'Landing page', 'React', 'Spa']

const WorkData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero porro repellendus dolore quis labore. Inventore, eveniet, ea qui nesciunt at esse tempora excepturi in a nesciut at asse iuq."
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero porro repellendus dolore quis labore. Inventore, eveniet, ea qui nesciunt at esse tempora excepturi in a nesciut at asse iuq."
    }
]

export const Works: React.FC = () => {
    return (
            <S.Works>
                <Container>
                    <SectionTitle>My Works</SectionTitle>
                    <TabMenu menuItems={worksItems}/>
                    <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                        {WorkData.map((w, index) => {
                            return <Work title={w.title}
                                         src={w.src}
                                         text={w.text}/>
                        })}
                    </FlexWrapper>
                </Container>

            </S.Works>
    );
};

