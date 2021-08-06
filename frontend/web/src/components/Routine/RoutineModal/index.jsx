import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {connect, useDispatch, useSelector} from 'react-redux';
import { CLOSE_ROUTINE_MODAL } from '../../../reducers/modal';
import { ADD_HABIT_REQUEST, ADD_ROUTINIZED_HABIT_REQUEST } from '../../../reducers/routine';
import {Paper, Grid, TextField} from '@material-ui/core';
import {Create, Event} from '@material-ui/icons';
import Habit from '../Habit/';
function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#E5E3E3',
    border: '1px solid #66A091',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius:'10px',
  },
  routineItemList:{
    marginBottom:'60px',
  },
  input:{
    border:'#66A091 1px solid',
    fontFamily: 'auto',
    width: '100%',
    height:'40px',
    borderRadius: '5px',
    padding: '20px',
    resize:'none',
    outline:'none',
    marginBottom: "10px",
    backgroundColor: 'white',
  },
  textArea:{
    height:'80px',
  },
  buttonLeft:{
    width: '47.5%',
    marginRight: '2.5%',
    border: 'none',
    padding: '5px',
    borderRadius: '20px',
    height:'40px',
    backgroundColor: '#776D61',
    color:'white',
    fontWeight:'bold'
  },
  buttonRight:{
    width: '47.5%',
    marginLeft: '2.5%',
    border: 'none',
    padding: '5px',
    borderRadius: '20px',
    height:'40px',
    backgroundColor: '#89DDBF',
    color:'white',
    fontWeight:'bold'
  },
  buttonDiv:{
    marginTop:'20px',
  },
  habitBtn:{
    textAlign : 'center',
    margin: '10px',
    padding: '20px'
  },
  habitIcon:{
    width: '100%',
    height: '50px',
    display: 'block'
  }
}));

function SimpleModal(props) {
  const { routineModal } = useSelector((state) => state.modal)
  const { myHabits, choosedRoutine, myRoutines } = useSelector((state) => state.routine)
  const dispatch = useDispatch()
  let [title,setTitle] = useState('');
  let [content,setContent] = useState('');
  let [time,setTime] = useState(10);

  let [newHabit, setNewHabit] = useState(false);
  let [existHabit, setExistHabit] = useState(false);
  let [clickedHabit, setClickedHabit] = useState(0);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  //모달 닫는 함수
  function closeRoutine(){
    dispatch({
      type: CLOSE_ROUTINE_MODAL
    })
    goBack()
  }

  //습관 추가 함수
  function addHabit(){
    if(validate()){
      dispatch({
        type: ADD_HABIT_REQUEST,
        data: {
          name: title,
          content,
          "time_required": time
        }
      })
      connectRoutinizedHabit(myHabits[myHabits.length-1].id)
    }
    
  }

  function connectRoutinizedHabit(habitId){
    dispatch({
      type: ADD_ROUTINIZED_HABIT_REQUEST,
      data: {
        "order": 0,
        "achieve_count": 0,
        "HabitId": habitId
      },
      id:myRoutines[choosedRoutine].id
    })
    closeRoutine()
  }

  function goBack(){
    setNewHabit(false);
    setExistHabit(false);
  }

  const validate = () =>{
    let titlesKorean = ['습관 이름을','내용을', '소요 시간을']
    let titlesEnglish =[title, content, time]
    for(let i=0;i<titlesKorean.length;i++){
      if(!titlesEnglish[i]){
        alert(titlesKorean[i]+' 입력해주세요')
        return false;
      }
    }
    return true;
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" style={{marginBottom:'20px'}}>습관 추가하기</h2>
      {
        !newHabit && !existHabit?
        <Grid container md={12}>
          <Grid item md={6}>
            <Paper className={classes.habitBtn+' btn'} onClick={()=>{setNewHabit(true)}}>
            <Create className={classes.habitIcon} style={{color:'tan'}}></Create>
            새로운 습관 생성
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper className={classes.habitBtn+' btn'} onClick={()=>{setExistHabit(true)}}>
            <Event className={classes.habitIcon} style={{color:'lightgray'}}></Event>
            기존 습관 추가
            </Paper>
          </Grid>
          <Grid item md={12} className={classes.buttonDiv}>
            <button className={classes.buttonLeft} onClick={closeRoutine}>취소</button>
          </Grid>
        </Grid>
        :null
      }
      {
        newHabit?
        <>
        <input onChange={(e)=>{setTitle(e.target.value)}} placeholder='제목' className={classes.input}></input>
        <textarea onChange ={(e)=>{setContent(e.target.value)}} className={classes.textArea+' '+classes.input} placeholder='내용'></textarea>
        <div className={classes.input} style={{height:'auto',textAlign: '-webkit-center'}}><TextField type="number" onChange ={(e)=>{setTime(e.target.value)}} InputLabelProps={{ shrink: true }} placeholder='분' style={{textAlign:'center'}}></TextField></div>
        
        <div className={classes.buttonDiv}>
            <button className={classes.buttonLeft} onClick={goBack}>뒤로가기</button>
            <button className={classes.buttonRight} onClick={addHabit}>저장</button>
          </div>
        </>:
        null
      }
      {
        existHabit?
        <>
        {
          myHabits.map((item, idx) =>(<Habit habit={item} clickedHabit={clickedHabit} idx={idx} onClick={()=>{setClickedHabit(idx)}}></Habit>))
        }
        <div className={classes.buttonDiv}>
            <button className={classes.buttonLeft} onClick={goBack}>뒤로가기</button>
            <button className={classes.buttonRight} onClick={()=>{connectRoutinizedHabit(myHabits[clickedHabit].id)}}>저장</button>
          </div>
        </>
        :null
      }
    </div>
  );

  return (
    <Modal
        open={routineModal}
        onClose={closeRoutine}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
  );
}

const mapStateToProps = (state) =>{
  return {
      state
  }
}
export default connect(mapStateToProps)(SimpleModal);