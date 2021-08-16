import React, { useEffect, useState } from 'react';
import Layout from '../../layout/';
import {Wrapper, useStyles} from './styles';
import ChallengeItem from '../../components/Home/ChallengeItem/index';
import Calendar from '../../components/Home/Calendar/index'
import TodayEvent from '../../components/Home/Calendar/TodayEvent/index'
import TodayRoutineTab from './TodayRoutineTab/'
import { LOAD_TODAY_ROUTINES_REQUEST, SET_CHOOSED_ROUTINE } from '../../reducers/routine';
import { LOAD_MY_CHALLENGES_REQUEST } from '../../reducers/challenge';
import { LOAD_EVENT_REQUEST } from '../../reducers/calendar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {LocalMoviesRounded, EventAvailableRounded} from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux';

import { OPEN_CREATE_EVENT_MODAL } from '../../reducers/modal';
import {Card, Grid, Paper, Tabs, Tab, Button, List, Container,Typography} from '@material-ui/core'
import MyChallengeHome from './MyChallenge';
const App = () => {
  const dispatch = useDispatch()
  // const { myRoutines } = useSelector((state) => state.routine)
  const { myChallenges } = useSelector((state) => state.challenge)
  const { events } = useSelector((state) => state.calendar)

  const classes = useStyles()

  //일정 추가 모달
  const openCreateEventModal=()=>{
    dispatch({type: OPEN_CREATE_EVENT_MODAL});
  }

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
          <MyChallengeHome />
        </div>
        <div hidden={tabValue !== 1}>
          <TodayRoutineTab/>
        </div>
        <div hidden={tabValue !== 2}>
          <div className='menu daily-menu'><h3>오늘의 일정</h3><Button className='btn' onClick={openCreateEventModal}>+일정추가</Button></div>
        
          <Paper style={{margin: '0 0 20px 0'}}>
            <List component="nav" aria-label="mailbox folders">
                {
                  events.map((event,idx) => {
                    return <TodayEvent key={idx} event={event}/>
                  })
                }
            </List>
          </Paper>
          <Calendar myEvent={events} />
        </div>
      </div>
        
      </Wrapper>
    </Layout>
  );
}

export default App