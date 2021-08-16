import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import RoutineListItem from '../../../components/Home/RoutineListItem/index';
import Container from '@material-ui/core/Container';
import {Card,CardActions} from '@material-ui/core'
function App (props) {
  const dispatch = useDispatch()
  const { myRoutines } = useSelector((state) => state.routine)

  return(
    <Container>
        {
            myRoutines.length?
            <>
              {
                myRoutines.map((routine,idx) => {
                  return <RoutineListItem key={idx} routine={routine} routineIdx={idx} />
                })
              }
            </>
            :
            <Card>
              <h4 style={{height: "50px",lineHeight: "50px", textAlign: "center"}}>오늘은 일정이 없어요!</h4>
            </Card>
          }
        <CardActions style={{float:'right'}}>
        <span className='menu-text' style={{color:'#776D61'}}>■</span><span>완료</span>
        <span className='menu-text' style={{color:'#89DDBF'}}>■</span><span>할일</span>
        </CardActions>
    </Container>
  );
}

export default App;