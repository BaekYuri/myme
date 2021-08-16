import React,{useState} from 'react';
import {Grid} from '@material-ui/core'
import RoutineList from '../RoutineList'
import RoutinizedHabitList from '../RoutinizedHabitList'
import ProgressItem from '../ProgressItem'
import {useSelector} from 'react-redux'
function App(){
    let {choosedRoutine, myRoutines, choosedRoutinizedHabit} = useSelector((state)=> {return state.routine})
    return(
        <Grid container>
            <Grid item xs={6}>
                {
                    choosedRoutine==-1?
                    <RoutineList myRoutines={myRoutines}/>
                    :
                    <RoutinizedHabitList routine={myRoutines[choosedRoutine]}/>
                }
            </Grid>
            <Grid item xs={6}>
                {
                    choosedRoutinizedHabit==-1 || choosedRoutine==-1?
                    null:
                    <ProgressItem choosedRoutine={choosedRoutine} choosedRoutinizedHabit={choosedRoutinizedHabit}/>
                }
            </Grid>
        </Grid>
    )
}
export default App