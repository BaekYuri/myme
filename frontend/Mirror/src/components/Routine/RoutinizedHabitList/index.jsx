import React,{useState} from 'react';
import Wrapper from './styles'
import RoutinizedHabitItem from '../RoutinizedHabitItem'
import {Typography, List} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function App(props){
    let {routine, goBack} = props
    return(
        <Wrapper>
            <Typography variant='h5' component='p' className='routine-title'><ArrowBackIosIcon onClick={goBack}/>{routine.name}</Typography>
            <List>
                {
                    routine.RoutinizedHabits.map((item,idx)=>(
                        <RoutinizedHabitItem idx={idx} key={idx} routinizedHabit={item} stopInterval={props.stopInterval} clearTime={props.clearTime}/>
                    ))
                }
            </List>
        </Wrapper>
    )
}
export default App