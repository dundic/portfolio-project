import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj-1.png";
import timerImg from "../../../assets/images/proj-2.png";
import {Container} from "../../../components/Container";

const worksItems = ['All', 'Landing page', 'React', 'Spa']

export const Works = () => {
    return (
            <StyledWorks>
                <Container>
                    <SectionTitle>My Works</SectionTitle>
                    <TabMenu menuItems={worksItems}/>
                    <FlexWrapper justify={'space-between'} align={'flex-start'}>
                        <Work title={'Social Network'} src={socialImg}
                              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero porro repellendus dolore quis labore. Inventore, eveniet, ea qui nesciunt at esse tempora excepturi in a nesciut at asse iuq"}/>
                        <Work title={'Timer'} src={timerImg}
                              text={'Sunt, ut odio neque laboriosam illo officiis perferendis accusantium! Possimus, expedita, eius repellendus enim rem perferendis voluptatum dolore autem aliquam voluptate sunt delectus iure exercitationem nisi illo odio ipsam nulla quod similique iusto. Vitae facere non quisquam laborum.'}/>
                    </FlexWrapper>
                </Container>

            </StyledWorks>
    );
};

const StyledWorks = styled.section`

`