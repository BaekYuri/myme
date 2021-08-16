import React,{useState} from 'react';
import Wrapper from './styles'
import {Typography, CardActions, Checkbox, ListItemText, ListItemSecondaryAction} from '@material-ui/core'
import {SET_CHOOSED_ROUTINIZED_HABIT} from '../../../reducers/routine'
import { useDispatch, useSelector } from 'react-redux';
function App(props){
    const dispatch = useDispatch()
    let {choosedRoutinizedHabit} = useSelector((state)=>{return state.routine})
    let {idx, routinizedHabit} = props
    
    function setChoosedRoutinizedHabit(){
        if(choosedRoutinizedHabit!=idx){
            dispatch({type: SET_CHOOSED_ROUTINIZED_HABIT, idx:idx})
        }else{
            dispatch({type: SET_CHOOSED_ROUTINIZED_HABIT, idx:-1})
        }
    }
    return(
        <Wrapper onClick={setChoosedRoutinizedHabit}>
            <ListItemText primary={routinizedHabit.Habit.name}>
                
            </ListItemText>
            <ListItemSecondaryAction>
                <Checkbox
                defaultValue={routinizedHabit.DailyAchieveHabits.length==0?false:true}
                disabled
                />
            </ListItemSecondaryAction>
        </Wrapper>
    )
}
export default App