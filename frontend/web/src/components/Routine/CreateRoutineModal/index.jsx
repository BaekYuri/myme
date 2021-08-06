import React,{useCallback, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DayOfWeek from './DayOfWeek/index';
import DayTimeInput from './DayTimeInput/index';
import Switch from '@material-ui/core/Switch';
import {connect, useDispatch, useSelector} from 'react-redux';
import { CLOSE_CREATE_ROUTINE_MODAL } from '../../../reducers/modal';
import { ADD_ROUTINE_REQUEST, SET_MODAL_INPUT_NAME, SET_MODAL_INPUT_ALARM, SET_MODAL_INPUT_ACTIVE_DAY, MODIFY_ROUTINE, ADD_ROUTINE } from '../../../reducers/routine';
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
    width:400,
    backgroundColor: '#E5E3E3',
    border: '1px solid #66A091',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius:'10px',
  },
  day:{
    textAlign: 'center',
    marginBottom:'20px'
  },
  text:{
    textAlign: "center",
    marginBottom: "10px"
  },
  inputDiv:{
    backgroundColor:'white',
    padding:'10px',
    borderRadius:'20px',
    marginBottom:'20px',
    width:'100%',
    border:'#66A091 1px solid'
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
  floatRight:{
    float:'right',
    color: 'lightgray',
  },
  switch:{
    marginTop: '-7px',
  }
}));

function getDefaultTimes(){
  let arr = new Array();
  for(let i=0;i<7;i++){
    arr.push('00:00');
  }
  return arr;
}

function SimpleModal(props) {
  const dispatch = useDispatch()
  const { createRoutineModal } = useSelector((state) => state.modal)
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const { createRoutineInfo, choosedRoutine } = useSelector((state) => state.routine);
  const dayName = ['월','화','수','목','금','토','일'];

  //모달 닫는 함수
  const handleClose = () => {
    dispatch({type:CLOSE_CREATE_ROUTINE_MODAL});
  };

  const changeDayClicked =(idx) =>{
    let tempClicked = Object.assign({},createRoutineInfo.day_of_week[idx]);
    tempClicked.activeDayOfWeek = !tempClicked.activeDayOfWeek;
    console.log({type: SET_MODAL_INPUT_ACTIVE_DAY, activeDay: tempClicked, "idx":idx })
    dispatch({type: SET_MODAL_INPUT_ACTIVE_DAY, activeDay: tempClicked, "idx":idx });
  };

  const changeName = (e) =>{
    dispatch({type:SET_MODAL_INPUT_NAME, name: e.target.value});
  }
  const changeAlarm = (e) =>{
    dispatch({type:SET_MODAL_INPUT_ALARM, checked : e.target.checked});
  }
  const changeTimeInfo = (e, idx) =>{
    let tempClicked = Object.assign({},createRoutineInfo.day_of_week[idx]);
    tempClicked.time = e.target.value;
    dispatch({type: SET_MODAL_INPUT_ACTIVE_DAY, activeDay: tempClicked, "idx":idx });
  }
  
  const add = () =>{
    if(validate()){
      if(choosedRoutine == -1){
        dispatch({
          type: ADD_ROUTINE_REQUEST,
          data: {
            name: createRoutineInfo.name,
            alarm: createRoutineInfo.alarm,
            "day_of_week": createRoutineInfo.day_of_week
          }
          
        })
      }else{
        dispatch({type:MODIFY_ROUTINE});
      }
    }
    
  }

  const validate = () =>{
    let titlesKorean = ['루틴 이름을']
    let titlesEnglish =['name']
    for(let i=0;i<titlesKorean.length;i++){
      if(!createRoutineInfo[titlesEnglish[i]]){
        alert(titlesKorean[i]+' 입력해주세요')
        return false;
      }
    }
    return true;
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      
           <h2 id="simple-modal-title" style={{marginBottom: "10px"}}>루틴 {choosedRoutine==-1?'생성':'수정'}</h2>
           <input type="text" placeholder="루틴 이름 입력" className={classes.inputDiv} onChange={changeName} defaultValue={createRoutineInfo.name}></input>
            <div className={classes.day}>
                {
                  dayName.map((str, idx) => (
                    <DayOfWeek dayName={str} clicked={createRoutineInfo.day_of_week[idx].activeDayOfWeek} onClick={()=>{changeDayClicked(idx);}}></DayOfWeek>
                  ))
                }
              </div>
            <div className={classes.inputDiv}>
                <h3 className={classes.text}>시작 시간을 선택해주세요.</h3>
                {
                  dayName.map((str, idx) => (
                    <DayTimeInput dayName={str} idx = {idx} clicked={createRoutineInfo.day_of_week[idx].activeDayOfWeek} timeInfo={createRoutineInfo.day_of_week[idx].time} change={changeTimeInfo}/>
                  ))
                }   
              </div>
              <div className={classes.inputDiv}>
                <span className={classes.text}>알림</span><div className={classes.floatRight}><Switch className={classes.switch} onChange={changeAlarm} defaultChecked={createRoutineInfo.alarm}/></div>
              </div>
        <div className={classes.buttonDiv}>
          <button className={classes.buttonLeft +' btn'} onClick={handleClose}>취소</button>
          <button className={classes.buttonRight +' btn'} onClick = {add}>완료</button>
        </div>
    </div>
  );

  return (
    <Modal
      open={createRoutineModal}
      onClose={handleClose}
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