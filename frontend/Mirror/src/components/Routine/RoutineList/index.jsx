import React,{useState} from 'react';
import Wrapper from './styles'
import RoutineItem from '../RoutineItem'
import {Typography, List} from '@material-ui/core'
function App(props){
    let {myRoutines} = props
    return(
        <Wrapper>
            <Typography variant='h5' className='routine-title'>오늘의 루틴</Typography>
            {
                myRoutines.map((item, idx)=>(<RoutineItem routine={item} idx={idx} key={idx}/>))
            }
        </Wrapper>
    )
}
export default App