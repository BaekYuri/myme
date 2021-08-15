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

import { ColorButton } from '../../../common/Buttons';

import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory } from 'react-router-dom';
import { LOAD_CHALLENGE_REQUEST } from '../../../reducers/challenge';
import { OPEN_CONFIRM_MODAL } from '../../../reducers/modal';

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
      type: LOAD_CHALLENGE_REQUEST,
      data: id,
    })
  }, [dispatch])

  useEffect(() => {
    if (loadChallengeDone) {
      history.push(`/Challenge/${singleChallenge.id}`)
    }
    if (loadChallengeError) {
      dispatch({
        type: OPEN_CONFIRM_MODAL,
        message: loadChallengeError
      })
    }
  }, [loadChallengeDone, loadChallengeError])

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
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          {/* 챌린지 이름 */}
                          <Typography gutterBottom variant="h6" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', fontFamily: 'SCDream4' }}>
                            {challenge.name}
                          </Typography>
                        </Grid>
                      </Grid>
                      {/* 챌린지 설명 */}
                      <Typography variant="body2" color="textSecondary" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', fontFamily: 'SCDream4' }}>
                        {challenge.content}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Grid container>
                    <Grid item xs={12}>
                      <CardActions>
                        <ColorButton fullWidth onClick={() => onChallengeDetail(challenge.id)} >
                          상세보기
                        </ColorButton>
                      </CardActions>
                    </Grid>
                    <Grid item xs={12}>
                      <CardActions>
                        <PersonIcon color='primary' /> {challenge.ChallengeParticipations.length}
                        <FavoriteIcon color='secondary' fontSize='small' /> {challenge.Likers.length}
                      </CardActions>
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