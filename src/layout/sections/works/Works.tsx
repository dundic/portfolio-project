import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj-1.png";
import timerImg from "../../../assets/images/proj-2.png";

const worksitems = ['All', 'Landing page', 'React', 'Spa']

export const Works = () => {
    return (
            <StyledWorks>
                <SectionTitle>My Works</SectionTitle>
                <Menu menuItems={worksitems}/>
                <FlexWrapper justify={'space-around'}>
                    <Work title={'Social Network'} src={socialImg} text={"\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Libero porro repellendus dolore quis labore. Inventore, eveniet, ea qui nesciunt at esse tempora excepturi in accusamus quasi reiciendis quaerat enim quod doloribus sit delectus sint vero omnis quis laborum amet voluptatibus suscipit voluptas quos fugiat minus doloremque commodi dolorum sed a temporibus aut ipsam itaque consequuntur id et autem maxime sequi facere ullam! "}/>
                    <Work title={'Timer'} src={timerImg} text={'Sunt, ut odio neque laboriosam illo officiis perferendis accusantium! Possimus, expedita, eius repellendus enim rem perferendis voluptatum dolore autem aliquam voluptate sunt delectus iure exercitationem nisi illo odio ipsam nulla quod similique iusto. Vitae facere non quisquam laborum.'}/>
                </FlexWrapper>
            </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #deefff;
`