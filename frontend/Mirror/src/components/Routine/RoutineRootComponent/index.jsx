import React,{useState, useEffect} from 'react';
import {Grid} from '@material-ui/core'
import RoutineList from '../RoutineList'
import RoutinizedHabitList from '../RoutinizedHabitList'
import ProgressItem from '../ProgressItem'
import {useSelector, useDispatch} from 'react-redux'
import {SET_CHOOSED_ROUTINE} from '../../../reducers/routine'
function App(){
    let {choosedRoutine, myRoutines, choosedRoutinizedHabit} = useSelector((state)=> {return state.routine})
    const dispatch = useDispatch()
    let [time, setTime] = useState(0)
    let [timeInterval,setTimeInterval] = useState(false)


    useEffect(()=>{
        function start(){
            return setTimeout(()=>{
                setTime(time+1)
            },1000)
        }
        if(!timeInterval) return undefined
        start()
        return ()=>clearTimeout(start)
    },[time, timeInterval])

    function runInterval(){
        setTimeInterval(true)
    }
    function stopInterval(){
        setTimeInterval(false)
      }
    function goBack(){
        stopInterval()
        clearTime()
        dispatch({type:SET_CHOOSED_ROUTINE, idx:-1})
    }
    function clearTime(){
        setTime(0)
    }
    return(
        <Grid container spacing={3}>
            <Grid item xs={6}>
                {
                    choosedRoutine==-1?
                    <RoutineList myRoutines={myRoutines}/>
                    :
                    <RoutinizedHabitList routine={myRoutines[choosedRoutine]} goBack={goBack} stopInterval={stopInterval} clearTime={clearTime}/>
                }
            </Grid>
            <Grid item xs={6}>
                {
                    !myRoutines[choosedRoutine] || !myRoutines[choosedRoutine].RoutinizedHabits[choosedRoutinizedHabit]?
                    null:
                    <ProgressItem choosedRoutine={choosedRoutine} choosedRoutinizedHabit={choosedRoutinizedHabit} time={time} timeInterval={timeInterval} runInterval={runInterval} stopInterval={stopInterval} clearTime={clearTime}/>
                }
            </Grid>
        </Grid>
    )
}
export default App