import React,{useState} from 'react';
import Wrapper from './styles'
import RoutinizedHabitItem from '../RoutinizedHabitItem'
import {Typography, List} from '@material-ui/core'
function App(props){
    let {routine} = props
    return(
        <Wrapper>
            <Typography variant='h5' className='routine-title'>아침 루틴</Typography>
            <List>
                {
                    routine.RoutinizedHabits.map((item,idx)=>(
                        <RoutinizedHabitItem idx={idx} key={idx} routinizedHabit={item}/>
                    ))
                }
            </List>
        </Wrapper>
    )
}
export default App