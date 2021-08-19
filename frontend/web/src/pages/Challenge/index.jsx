import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Button, Typography, InputBase, makeStyles, alpha, withStyles, AppBar, Chip, IconButton, Paper } from '@material-ui/core/';
import CardList from '../../components/Challenge/CardList'

import Wrapper from './styles';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';
import Layout from '../../layout/index';
import { useDispatch, useSelector } from 'react-redux';
import {
  LOAD_ABILITY_CHALLENGES_REQUEST,
  LOAD_ASSET_CHALLENGES_REQUEST,
  LOAD_CHALLENGES_REQUEST,
  LOAD_HOBBY_CHALLENGES_REQUEST,
  LOAD_LIFE_CHALLENGES_REQUEST,
  LOAD_MEAL_CHALLENGES_REQUEST,
  LOAD_NEW_CHALLENGES_REQUEST,
  LOAD_REC_CHALLENGES_REQUEST,
  LOAD_STUDY_CHALLENGES_REQUEST,
  LOAD_WORKOUT_CHALLENGES_REQUEST
} from '../../reducers/challenge';
import ChallengeCategory from '../../components/Challenge/ChallengeCategory';

const chipStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1.5),
    },
    background: '#66A091'
  },
}));

const ChallengeHome = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const chipClasses = chipStyles();

  const {
    challenges,
    newChallenges,
    recChallenges,
    workoutChallenges,
    studyChallenges,
    lifeChallenges,
    mealChallenges,
    abilityChallenges,
    hobbyChallenges,
    assetChallenges,
    loadChallengesDone,
    loadNewChallengesDone,
    loadRecChallengesDone,
    loadWorkoutChallengesDone,
    loadStudyChallengesDone,
    loadLifeChallengesDone,
    loadMealChallengesDone,
    loadAbilityChallengesDone,
    loadHobbyChallengesDone,
    loadAssetChallengesDone,
  } = useSelector((state) => state.challenge)

  useEffect(() => {
    dispatch({
      type: LOAD_CHALLENGES_REQUEST
    })
    dispatch({
      type: LOAD_NEW_CHALLENGES_REQUEST
    })
    dispatch({
      type: LOAD_REC_CHALLENGES_REQUEST
    })
    // dispatch({
    //   type: LOAD_WORKOUT_CHALLENGES_REQUEST
    // })
    // dispatch({
    //   type: LOAD_STUDY_CHALLENGES_REQUEST
    // })
    // dispatch({
    //   type: LOAD_LIFE_CHALLENGES_REQUEST
    // })
    // dispatch({
    //   type: LOAD_MEAL_CHALLENGES_REQUEST
    // })
    // dispatch({
    //   type: LOAD_ABILITY_CHALLENGES_REQUEST
    // })
    // dispatch({
    //   type: LOAD_HOBBY_CHALLENGES_REQUEST
    // })
    // dispatch({
    //   type: LOAD_ASSET_CHALLENGES_REQUEST
    // })
  }, [])

  return (  
    <Wrapper>
      <Layout>
        <Grid container >
          {
            loadChallengesDone &&
            loadNewChallengesDone &&
            loadRecChallengesDone
            // loadWorkoutChallengesDone &&
            // loadStudyChallengesDone &&
            // loadLifeChallengesDone &&
            // loadMealChallengesDone &&
            // loadAbilityChallengesDone &&
            // loadHobbyChallengesDone &&
            // loadAssetChallengesDone ?
            ?
              <>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<SearchIcon />}
                    onClick={()=>{history.push('/SearchChallenge/')}}
                  >
                    <Typography>챌린지 검색</Typography>
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<AddIcon />}
                    onClick={()=>{history.push('/CreateChallenge/')}}
                  >
                    <Typography>챌린지 생성</Typography>
                  </Button>
                </Grid>
                <Grid container className="grid">
                  <h3>신규 챌린지</h3>
                  <Grid item xs={12}><hr/></Grid>
                  <Link to="/ChallengeMore/new" style={{ textDecoration: 'none', color: 'GrayText', cursor: 'pointer' }}>더보기</Link>
                  <Grid item xs={12} className="CardContent">
                    <CardList challenges={newChallenges} />
                  </Grid>
                </Grid>
                <Grid container className="grid">
                  <h3>추천 챌린지</h3>
                  <Grid item xs={12}><hr/></Grid>
                  <Link to="/ChallengeHome" style={{ textDecoration: 'none', color: 'GrayText', cursor: 'pointer' }}>더보기</Link>
                  <Grid item xs={12} className="CardContent">
                    <Typography>서비스 준비중입니다!</Typography>
                  </Grid>
                </Grid>
                <Grid container className="grid">
                  <h3>카테고리별 챌린지</h3>
                  <Grid item xs={12}><hr/></Grid>
                  <Grid item xs={12}>
                    <ChallengeCategory />
                  </Grid>
                </Grid>
              </>
              :
                <Grid item xs={12} style={{ marginTop: '20px' }}>
                  <Typography >챌린지를 준비중입니다.</Typography>
                </Grid>
          }
        </Grid>
      </Layout>
    </Wrapper>
  );
}

export default ChallengeHome
