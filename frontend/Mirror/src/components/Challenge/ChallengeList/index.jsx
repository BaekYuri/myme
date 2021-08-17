import React, { useCallback, useEffect, useState } from 'react';
import Slider from 'react-slick'
import Wrapper from './styles'
import ChallengtItem from '../ChallengeItem'
import { Typography, Grid, CardContent,CardActions } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useSelector} from 'react-redux'
import Cert from '../CertModal';
import CustomCard from '../../Routine/CustomCard'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { advice } from '../../../config/config';
const App = (props) => {

  let {myChallenges} = useSelector((state)=>{return state.challenge})
  let [choosedChellenge, setChoosedChellenge] = useState(-1)

  function changeChoosedChellenge(num){
    setChoosedChellenge(num)
  }
  function closeCert(){
    setChoosedChellenge(-1)
  }
  let settings = {
    arrows:false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
  return(
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item md={8} className='challenge-div'>
          <CustomCard className='challenge-card'>
          <CardActions className='progress-header'>
          <EmojiEventsIcon/>
            <Typography variant='h5'>나의 챌린지</Typography>
            </CardActions>
            <CardContent className='slider-div'>
            <Slider {...settings}>
              {
                myChallenges.map((item, idx)=>(<ChallengtItem key={idx} challenge={item} idx={idx} changeChoosedChellenge={changeChoosedChellenge}/>))
              }
            </Slider>
            </CardContent>
            <CardActions>
              <Typography variant='p'>{advice(getRandomInt(0,10))}</Typography>
            </CardActions>
          </CustomCard>
        </Grid>
        <Grid item md={4}>
            {
              myChallenges[choosedChellenge]?
              <Cert challenge={myChallenges[choosedChellenge]} closeCertModal={closeCert}/>
              :
              null
            }
        </Grid>
      </Grid>
      
    </Wrapper>
  );
}
export default App;