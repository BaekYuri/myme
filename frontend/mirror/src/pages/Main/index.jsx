import React, { useState } from 'react';
import Wrapper from './styles';
import Clock from 'react-live-clock';
import { withStyles } from '@material-ui/core/styles';
import {
   Card, 
   CardActionArea, 
   CardActions, 
   CardContent, 

   Button, 
   Typography,
   LinearProgress,
   Grid,
   Checkbox,
  } from '@material-ui/core';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";



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
  
  const [value, onChange] = useState(new Date());
  const events = [{ title: "today's event", date: new Date() }];

  return (
        <Wrapper>
          <Grid container spacing={3} style={{color: 'white', background: '#000000', padding: '50px'}}>
            {/* 카드 들어갈 자리 */}
            <Grid item xs={3} style={{padding: '50px'}}>
              <h3>나의 챌린지</h3>
              <Card >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      CS공부
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={60} />
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">인증하기</Button>
                </CardActions>
              </Card>
              <br/>
              <Card >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      30분 독서
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={50} />
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">인증하기</Button>
                </CardActions>
              </Card>
              <br/>
              <Card >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      코테 공부하기
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={80} />
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">인증하기</Button>
                </CardActions>
              </Card>
              <br/>
              
            </Grid>
            {/* 거울용 빈자리 */}
            <Grid item xs={6} style={{padding: '50px', marginLeft: '1'}}><img src="/images/weather.png" alt="" style={{width: '90%'}}/></Grid>

            {/* 시계 */}
            <Grid item xs={3}  style={{padding: '50px', float: 'right'}}>
              <div style={{float: 'right'}}>
                <Clock className="date" format={'YYYY 년 MM 월 DD 일'} ticking={true} timezone={'KR/Republic'}/> &nbsp;
                <Clock className="clock" format={'HH:mm'} ticking={true} timezone={'KR/Republic'}/>
              </div>
              <br></br>
            {/* <img src="/images/weather.png" alt="" style={{width: '50%', float: 'right'}}/> */}
            </Grid>

            {/* 달력 */}
            <Grid container item xs={12} spacing={3} style={{padding: '50px'}}>
            <Grid item xs={3} className="routine">
            <h3>아침 루틴</h3>

              <Card >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                    하루 10분 명상
                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}  style={{float: 'right'}}/>
                    </Typography>             
                  </CardContent>
                </CardActionArea>
              </Card>
              <br/>
              <Card >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                   오늘 다짐 작성
                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}  style={{float: 'right'}}/>
                    </Typography>             
                  </CardContent>
                </CardActionArea>
              </Card>
              <br/>
              <Card >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                    아침 공부
                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}  style={{float: 'right'}}/>
                    </Typography>             
                  </CardContent>
                </CardActionArea>
              </Card>
              <br/>
              <Card >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                    아침 운동
                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}  style={{float: 'right'}}/>
                    </Typography>             
                  </CardContent>
                </CardActionArea>
              </Card>    
            </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={5}>
                <FullCalendar
                  defaultView="dayGridMonth"
                  plugins={[dayGridPlugin]}
                  events={events}
                  className="calendar"
                />
              </Grid>
            </Grid>
          </Grid>
          
        </Wrapper>
      
    
  );
};

export default Main;

