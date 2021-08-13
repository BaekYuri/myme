import React, { useEffect, useState } from 'react';
import Layout from '../../layout/';
import {Wrapper, useStyles} from './styles';
import ChallengeItem from '../../components/Home/ChallengeItem/index';
import Calendar from '../../components/Home/Calendar/index'
import TodayEvent from '../../components/Home/Calendar/TodayEvent/index'
import TodayRoutineTab from './TodayRoutineTab/'
import DashboardIcon from '@material-ui/icons/Dashboard';
import {LocalMoviesRounded, EventAvailableRounded} from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_TODAY_ROUTINES_REQUEST, SET_CHOOSED_ROUTINE } from '../../reducers/routine';
import { LOAD_MY_CHALLENGES_REQUEST } from '../../reducers/challenge';
import { LOAD_EVENT_REQUEST } from '../../reducers/calendar';
import {Card, Grid, Paper, Tabs, Tab} from '@material-ui/core'
const App = () => {
  const dispatch = useDispatch()
  // const { myRoutines } = useSelector((state) => state.routine)
  const { myChallenges } = useSelector((state) => state.challenge)
  const { events } = useSelector((state) => state.calendar)
  const classes = useStyles()
  let [tabValue, setTabValue] = useState(0)
  
  useEffect(() => {
    dispatch({
      type: LOAD_TODAY_ROUTINES_REQUEST
    })
    dispatch({
      type: LOAD_MY_CHALLENGES_REQUEST
    })
    dispatch({
      type: LOAD_EVENT_REQUEST
    })
    dispatch({type: SET_CHOOSED_ROUTINE, idx:-1})
    // dispatch({
    //   type: LOAD_CHALLENGES_REQUEST
    // })
    // dispatch({
    //   type: LOAD_NEW_CHALLENGES_REQUEST
    // })
    // dispatch({
    //   type: LOAD_REC_CHALLENGES_REQUEST
    // })
  }, [])
  var today = new Date();
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);  
  var dateString = year + '-' + month  + '-' + day;

  
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return(
    <Layout>
      <Wrapper>
      <div>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="fullWidth"
          classes={{
            indicator: classes.indicator,
          }}
          className='tab'
          aria-label="icon label tabs example"
        >
          <Tab className={tabValue !==0?'':'active-tab'} icon={<DashboardIcon />} label="나의 챌린지" />
          <Tab className={tabValue !==1?'':'active-tab'} icon={<LocalMoviesRounded />} label="오늘의 루틴" />
          <Tab className={tabValue !==2?'':'active-tab'} icon={<EventAvailableRounded />} label="나의 일정" />
        </Tabs>
        <div hidden={tabValue !== 0}>
          <Grid container>
          {
            myChallenges.length !== 0
              ?
                myChallenges.map((challenge) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                      <ChallengeItem key={challenge.id} challenge={challenge} />
                    </Grid>
                  ) 
                })
              :
                <div>나에게 맞는 챌린지에 참여해보세요!</div>
          }
          </Grid>
        </div>
        <div hidden={tabValue !== 1}>
          <TodayRoutineTab/>
        </div>
        <div hidden={tabValue !== 2}>
          <h3>오늘의 일정</h3>
          {
            
            events.map((event) => {
              return <TodayEvent key={event.id} event={event}/>
            })
          
          }
          {/* <TodayEvent eventTitle={myEvents} ></TodayEvent> */}
          <Calendar myEvent={events} />
        </div>
      </div>
        {/* <div className='menu' style={{ display: 'flex', alignItems: 'center' }} >
          <DashboardIcon color="primary" fontSize="large" style={{ marginRight: 10 }} />
          <h1>나의 챌린지</h1>
        </div>
        <hr/> */}
        
        {/* <div className='menu'><span className='menu-text'>오늘의 루틴</span>
        <div style={{float:'right'}}>
        <span className='menu-text' style={{color:'#776D61'}}>■</span><span>완료</span>
        <span className='menu-text' style={{color:'#89DDBF'}}>■</span><span>할일</span>
        </div>
        </div>
        <hr/> */}
        
        {/* <div className='menu'><h2>나의 일정</h2></div>
        <hr/> */}
        
      </Wrapper>
    </Layout>
  );
}

export default App