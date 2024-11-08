import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../styles/slider.css'
import {S} from './Slider_Styles'

type SlidePropsType = {
    text: string,
    userName: string
}

const Slide = (props: SlidePropsType) => {
    return (
            <S.Slide>
                <S.Text>{props.text}</S.Text>
                <S.Name>{props.userName}</S.Name>
            </S.Slide>
    )
}

const items = [
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur cumque illum, molestiae nesciunt quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ex itaque laborum nam nihil numquam porro, quod ratione vitae voluptates?"} userName={"ivan ivanow"}/>,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur cumque illum, molestiae nesciunt quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ex itaque laborum nam nihil numquam porro, quod ratione vitae voluptates?"} userName={"garry gudini"}/>,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur cumque illum, molestiae nesciunt quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ex itaque laborum nam nihil numquam porro, quod ratione vitae voluptates?"} userName={"michael jordan"}/>
];

export const Slider = () => (
        <S.Slider>
        <AliceCarousel
                mouseTracking
                items={items}
        />
        </S.Slider>
);
