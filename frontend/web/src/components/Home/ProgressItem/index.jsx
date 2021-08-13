import React,{useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import Wrapper from './styles'
import {Grid, Card, CardActions,CardContent, IconButton, Button} from '@material-ui/core';
import PlayIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import CheckIcon from '@material-ui/icons/CheckCircleOutline'
import NextIcon from '@material-ui/icons/SkipNext'
import {useDispatch} from 'react-redux';
import {CHECK_ROUTINIZED_HABIT_REQUEST} from '../../../reducers/routine'
import {OPEN_CONFIRM_MODAL} from '../../../reducers/modal'
function App(props){
    const dispatch = useDispatch()
    const history = useHistory()
    const routinizedHabit = props.habit
    const habit = props.habit.Habit

    let [time, setTime] = useState(0)

    let [timeInterval,setTimeInterval] = useState(false)

    let min = Math.floor(time/60)
    let sec = time%60

    let requiredTime = habit.time_required*60 //진짜 코드
    // let requiredTime = 5 //테스트용 코드

    let requiredMin = Math.floor(requiredTime/60)
    let requiredSec = requiredTime%60
    useEffect(()=>{
        function start(){
            return setTimeout(()=>{
                setTime(time+1)
                if(time>=requiredTime) setTimeInterval(false)
            },1000)
        }
        if(isAlreadyComplete()) setTimeInterval(false)
        if(!timeInterval || isAlreadyComplete()) return undefined
        start()
        return ()=>clearTimeout(start)
    },[time, timeInterval])

    function run(){
        if(props.checked){
            dispatch({
                type: OPEN_CONFIRM_MODAL,
                message: '오늘 이미 완료한 습관입니다.'
            })
            return
        }
        if(props.checked || isAlreadyComplete()){
            dispatch({
                type: OPEN_CONFIRM_MODAL,
                message: '이미 필요 시간을 충족하였습니다.'
            })
            return
        }
        setTimeInterval(true)
        
    }

    function checkRoutinizedHabit(){
        if(props.checked){
            dispatch({
                type: OPEN_CONFIRM_MODAL,
                message: '오늘 이미 완료한 습관입니다.'
            })
            return
        }
        if(!isAlreadyComplete()) {
            dispatch({
                type: OPEN_CONFIRM_MODAL,
                message: '먼저 요구 시간을 채워주세요.'
            })
            return
        }
        dispatch({
            type:CHECK_ROUTINIZED_HABIT_REQUEST, 
            routineId: routinizedHabit.RoutineId, 
            habitId: routinizedHabit.HabitId, 
            routineIdx: props.routineIdx,
            routinizedHabitIdx: props.routinizedHabitIdx
        })
        setTimeInterval(false)
    }

    function isAlreadyComplete(){
        if(time< requiredTime) return false
        return true
    }

    return(
        <Wrapper className='progress-item'>
            <Grid container>
                    <Grid item xs={12} md={6}>
                        <Card className='content'>
                        <CardActions className='play-btns'>
                        
                        {
                            !timeInterval?<IconButton color="primary" onClick={run}><PlayIcon className="btn progress-btn"></PlayIcon></IconButton>:<IconButton color="primary"  onClick={()=>{setTimeInterval(false)}}><PauseIcon className="progress-btn"></PauseIcon></IconButton>
                        }
                            <IconButton color="primary" onClick={checkRoutinizedHabit} >
                            <CheckIcon className={isAlreadyComplete()||props.checked?"btn progress-btn complete-btn":"btn progress-btn"} ></CheckIcon>
                            </IconButton>
                            <IconButton color="primary" >
                            <NextIcon className="btn progress-btn"></NextIcon>
                            </IconButton>
                            <span>
                            {(min<10?'0'+min:min)+':'+(sec<10?'0'+sec:sec)} / {(requiredMin<10?'0'+requiredMin:requiredMin)+':'+(requiredSec<10?'0'+requiredSec:requiredSec)}
                            </span>
                        </CardActions>
                        <div className='text-area'>
                        <textarea
                        id="outlined-read-only-input"
                        label="내용"
                        defaultValue={habit.content}
                        readOnly
                        />
                        </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {
                            habit.assist_link?
                            <div className='video-container'>
                                <iframe src={'https://www.youtube.com/embed/'+habit.assist_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            :
                            <Card className='content'>
                                <CardContent style={{height:'77%'}}>
                                습관에 유튜브 링크를 등록하시면,<br/> 습관을 실행하면서 동영상을 감상하실 수 있습니다.
                                </CardContent>
                                <CardActions style={{height:'20%'}} style={{float:'right'}}>
                                <Button color='primary' onClick={()=>{history.push('/HabitSetting')}}>바로가기</Button>
                                </CardActions>
                            </Card>
                        }
                        
                    </Grid>
            </Grid>
        </Wrapper>
    );
}
export default App;