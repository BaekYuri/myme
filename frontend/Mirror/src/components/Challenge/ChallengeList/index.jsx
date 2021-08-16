import React, { useCallback, useEffect, useState } from 'react';
import Slider from 'react-slick'
import Wrapper from './styles'
import ChallengtItem from '../ChallengeItem'
import { Typography } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = (props) => {
  let challenge= [0,1,2,3]
  let settings = {
    arrows:false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return(
    <Wrapper>
      <Typography variant='h5' style={{marginLeft: "26px"}}>나의 챌린지</Typography>
      <div className='slider-div'>
      <Slider {...settings}>
        {
          challenge.map(()=>(<ChallengtItem/>))
        }
      </Slider>
      </div>
    </Wrapper>
  );
}
export default App;