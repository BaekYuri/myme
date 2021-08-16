import React,{useState} from 'react';
import Wrapper from './styles'
import {Typography, CardActions, Checkbox, ListItemText, ListItemSecondaryAction} from '@material-ui/core'
import {SET_CHOOSED_ROUTINE} from '../../../reducers/routine'
import {useDispatch} from 'react-redux'
function App(props){
    const dispatch = useDispatch()
    let {routine, idx} = props

    function getDay(){
        let day = new Date()
        day = day.getDay()==0?6:day.getDay()-1
        return day
      }
    function getTime(time){
        let timeArr = time.split(':')
        
        let am= Math.floor(timeArr[0]/12)==0?'오전':'오후'
        let hour= timeArr[0]%12==0?12:timeArr[0]%12
        return am+' '+hour+':'+timeArr[1]
    }
    function setChoosedRoutine(){
        dispatch({
            type:SET_CHOOSED_ROUTINE,
            idx:idx,
        })
    }
    return(
        <Wrapper onClick={setChoosedRoutine}>
            <ListItemText primary={routine.name}>
            </ListItemText>
            <ListItemSecondaryAction>
                {getTime(routine.RoutineActiveDays[getDay()].start_time)} 시작
            </ListItemSecondaryAction>
        </Wrapper>
    )
}
export default App