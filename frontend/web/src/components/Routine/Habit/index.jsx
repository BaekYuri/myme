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
                <Typography variant="h5" component="h2">
                    {props.habit.name}
                </Typography>
                <Typography color="textSecondary">
                    {props.habit.time_required}분
                </Typography>
                <Typography variant="body2" component="p">
                    {props.habit.content}
                </Typography>
            </CardContent>
        </Card>
      </Wrapper>
  );
}
export default App;