import React from 'react';
import Wrapper from './styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { OPEN_CREATE_ROUTINE_MODAL } from '../../../reducers/modal';
import { SET_CHOOSED_ROUTINE } from '../../../reducers/routine';
function App(props){
  
  return(
      <Wrapper>
        <Card className={props.clickedHabit==props.idx?'clicked':' '} onClick={props.onClick}>
            <CardContent>
                <h2 className='text-title'>
                    {props.habit.name}
                </h2>
                <h3 style={{color:'darkgray'}}>
                    {props.habit.time_required}분
                </h3>
                <p className='text-content'>
                    {props.habit.content}
                </p>
            </CardContent>
        </Card>
      </Wrapper>
  );
}
export default App;