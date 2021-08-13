import React, { useState, useEffect, useCallback } from 'react';
import { 
  Dialog,
  Slide,
  Grid,
  Container,
  Box
} from '@material-ui/core/';
import Layout from '../../layout/';
import Wrapper from './styles';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ColorButton } from '../../common/Buttons';
import { ColorChip } from '../../common/Chips'
import { useDispatch, useSelector } from 'react-redux';
import { convertCertType } from '../../config/config';
import { PARTICIPATE_CHALLENGE_REQUEST } from '../../reducers/challenge';

const ChallengeDetail = ({match}) => {
  const dispatch = useDispatch()
  const { singleChallenge } = useSelector((state) => state.challenge)

  const onParticipateChallenge = useCallback(() => {
    dispatch({
      type: PARTICIPATE_CHALLENGE_REQUEST,
      data: {
        start_date: singleChallenge.start_date,
        end_date: singleChallenge.end_date,
        period: singleChallenge.period,
        certification_count: 0,
        total_number_of_certification: singleChallenge.total_number_of_certification,
        challengeId: singleChallenge.id
      }
    })
  }, [singleChallenge])

  return (
    <Layout>
      <Wrapper>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            {/* 대표이미지 */}
            <Grid item xs={12} className="titleImg" style={{ textAlign: 'center' }}>
              <img src={singleChallenge?.img_addr} alt={singleChallenge?.name} style={{width: '50%', maxWidth: 300 }} />
            </Grid>
            {/* 제목 */}
            <Grid item xs={12}>
              <h2>{singleChallenge?.name}</h2>
            </Grid>
            {/* 태그 */}
            <Grid item xs={12}>
              <ColorChip className="term" style={{ marginLeft: 0 }} label='분류'/>
              <ColorChip className="term" label={convertCertType(singleChallenge?.certification_cycle)}  />
              
            </Grid>
            <Grid item xs={12}>
              <span>{singleChallenge?.start_date} ~ {singleChallenge?.end_date}</span>
            </Grid>
            {/* 설명 */}
            <Grid item xs={12} >
              <h3>{singleChallenge?.content}</h3>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
              <PersonIcon color="primary"/><span style={{ marginLeft: 10 }}>참가인원 {singleChallenge?.ChallengeParticipations.length} 명</span>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
              <FavoriteIcon color="secondary"/><span style={{ marginLeft: 10 }}>좋아요 0 명</span>
            </Grid>
            <Grid item xs={12}>
            <ColorButton variant="outlined" onClick={onParticipateChallenge}>
              참여하기!
            </ColorButton>
          </Grid>
        </Grid>
      </Wrapper>
    </Layout>
  );
}

export default ChallengeDetail