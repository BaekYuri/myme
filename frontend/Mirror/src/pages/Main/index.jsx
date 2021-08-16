import React, { useState, useEffect } from 'react';
import Wrapper from './styles';
import Clock from '../../components/Clock';
import { withStyles } from '@material-ui/core/styles';
import Weather from '../../components/Weather/WeatherWidget'
import RoutineRootComponent from '../../components/Routine/RoutineRootComponent'
import ChallengeList from '../../components/Challenge/ChallengeList/'
import {
   LinearProgress,
   Grid,
  } from '@material-ui/core';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import CustomCalendar from '../../components/Calendar/index';
import { useDispatch } from 'react-redux';
import {LOAD_TODAY_ROUTINES_REQUEST} from '../../reducers/routine'
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);



const Main = props => {
  const dispatch = useDispatch()
  const [value, onChange] = useState(new Date());
  const events = [{ title: "today's event", date: new Date() }];
  useEffect(()=>{
    dispatch({type:LOAD_TODAY_ROUTINES_REQUEST})
  },[])
  
  return (
        <Wrapper>
          <Grid container spacing={3}>
            <Grid container item xs={12} spacing={0}>
              {/* 날씨*/}
              <Grid item xs={9}>
                <Weather/>
              </Grid>

              {/* 시계 */}
              <Grid item xs={3}  >
                <Clock/>
                <br></br>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={0}>
            {/* 챌린지 */}
            <Grid item xs={6}>
              <ChallengeList/>
              </Grid>
            {/* 거울용 공간 */}
              <Grid item xs={6}>
              </Grid>
            </Grid>
            {/* 아래쪽으로 맞출 공간 */}
            <Grid container item xs={12} spacing={0} style={{height:'104px'}}>

            </Grid>
            {/* 달력 */}
            <Grid container item xs={12} spacing={2}>
            <Grid item xs={6} className="routine">
              <RoutineRootComponent/>
            </Grid>
              <Grid item xs={3} className="routine"></Grid>
              <Grid item xs={3}>
              {/* <Calendar
                onChange={onChange}
                value={value}
                className="react-calendar" 
              /> */}
              {/* 달력 */}
               <CustomCalendar/>
              </Grid>
            </Grid>
          </Grid>
          
        </Wrapper>
      
    
  );
};

export default Main;

