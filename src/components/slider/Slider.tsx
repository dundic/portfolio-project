import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {S} from './Slider_Styles'

export const Slider: React.FC = () => {
    return (
            <S.Slider>
                <FlexWrapper>
                <S.Slide>
                    <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur cumque illum, molestiae nesciunt quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ex itaque laborum nam nihil numquam porro, quod ratione vitae voluptates?</S.Text>
                    <S.Name>@ivan ivanov</S.Name>
                </S.Slide>
                </FlexWrapper>
                <S.Pagination>
                    <span> </span>
                    <span className={"active"}> </span>
                    <span> </span>
                </S.Pagination>
            </S.Slider>
    );
};
