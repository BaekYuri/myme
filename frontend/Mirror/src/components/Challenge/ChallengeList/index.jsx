import React, { useCallback, useEffect, useState } from 'react';
import Slider from 'react-slick'
import Wrapper from './styles'
import ChallengtItem from '../ChallengeItem'
import { Typography, Grid } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useSelector} from 'react-redux'
import Cert from '../CertModal';
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
  return(
    <Wrapper>
      <Grid container>
        <Grid item md={8} className='challenge-div'>
          <Typography variant='h5' style={{marginLeft: "26px"}}>나의 챌린지</Typography>
          <div className='slider-div'>
          <Slider {...settings}>
            {
              myChallenges.map((item, idx)=>(<ChallengtItem key={idx} challenge={item} idx={idx} changeChoosedChellenge={changeChoosedChellenge}/>))
            }
          </Slider>
          </div>
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