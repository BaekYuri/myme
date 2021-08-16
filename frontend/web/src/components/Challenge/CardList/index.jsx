import React, { useCallback, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { 
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Box
} from '@material-ui/core/';

import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory } from 'react-router-dom';
import { ColorButton } from '../../../common/Buttons';
import { LOAD_CHALLENGE_REQUEST, SHOW_CHALLENGE } from '../../../reducers/challenge';
import { OPEN_CONFIRM_MODAL } from '../../../reducers/modal';
import { convertCertType } from '../../../config/config';
import './style.css'

const CardList = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { challenges } = props
  const { loadChallengeDone, loadChallengeError, singleChallenge } = useSelector((state) => state.challenge)

  // 슬라이더 세팅
  const settings = {
    dots: false,           // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
    speed: 500,            // 애미메이션의 속도, 단위는 milliseconds
    slidesToShow: ( challenges?.length > 4 ? 4 : challenges?.length ),    // 한번에 몇개의 슬라이드를 보여줄 지
    slidesToScroll: 1,     // 한번 스크롤시 몇장의 슬라이드를 넘길지
    swipeToSlide: true,
    centerMode: true,
    arrows: false,
    
    responsive: [
      {
        breakpoint: 1660,
        settings: {
          slidesToShow: ( challenges?.length > 3 ? 3 : challenges?.length ),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: ( challenges?.length > 2 ? 2 : challenges?.length ),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: ( challenges?.length > 1 ? 1 : challenges?.length ),
          slidesToScroll: 1,
        }
      },
    ]
  };

  const onChallengeDetail = useCallback((id) => {
    dispatch({
      type: SHOW_CHALLENGE,
      data: id,
    })
    history.push(`/Challenge/${id}`)
  }, [dispatch])

  // useEffect(() => {
  //   if (loadChallengeDone) {
  //     history.push(`/Challenge/${singleChallenge.id}`)
  //   }
  //   if (loadChallengeError) {
  //     dispatch({
  //       type: OPEN_CONFIRM_MODAL,
  //       message: loadChallengeError
  //     })
  //   }
  // }, [loadChallengeDone, loadChallengeError])

  return (
        <Slider
          {...settings}
          initialSlide={0}
          style={{ padding: 0}}
        >
          {challenges ? challenges.map(challenge => {
            return (
              <Box key={challenge.id} >
                <Card style={{ maxWidth: 270, marginRight: 5, marginLeft: 5 }} >
                  <CardActionArea>
                    <CardMedia
                      style={{ maxWidth: '270px', maxHeight: '100px' }}
                      component="img"
                      alt="Contemplative Reptile"
                      image={challenge.img_addr}
                      title="Contemplative Reptile"
                    />
                    <CardContent style={{ padding: '15px', paddingBottom: '5px' }}>
                      <Grid container >
                        <Grid item xs={12}>
                          <h3 style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', fontFamily: 'SCDream4' }}>
                            {challenge.name}
                          </h3>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: '5px' }}>
                          <span style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', fontFamily: 'SCDream4', color: '#AAAAAA' }}>
                            {challenge.content}
                          </span>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                  <Grid container style={{ padding: '5px' }}>
                    <Grid item xs={6} style={{ padding: '5px' }}>
                      <div className="term" style={{ margin: 0 }}>{challenge.Categories[0]?.name}</div>
                    </Grid>
                    <Grid item xs={6} style={{ padding: '5px' }}>
                      <div className="term" style={{ margin: 0 }}>{convertCertType(challenge.certification_cycle)}</div>
                    </Grid>
                    <Grid item xs={12} style={{ padding: '5px', fontSize: 12 }}>
                      <div className="term" style={{ margin: 0, color: 'black', backgroundColor: 'white' }}><span role="img">📅 </span>{challenge.start_date} ~ {challenge.end_date}</div>
                    </Grid>
                    <Grid item xs={6} style={{ padding: '5px', display: 'flex', justifyContent: 'center' }}>
                      <div style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
                        <PersonIcon color='primary' /> {challenge.ChallengeParticipations.length}
                        <FavoriteIcon color='secondary' fontSize='small' /> {challenge.Likers.length}
                      </div>
                    </Grid>
                    <Grid item xs={6} style={{ padding: '5px' }}>
                      <ColorButton fullWidth onClick={() => onChallengeDetail(challenge.id)} >
                        상세보기
                      </ColorButton>
                    </Grid>
                  </Grid>
                </Card>
              </Box>
            );
          }) : null
        }
        </Slider>
  );
}

export default CardList