import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DayOfWeek from './DayOfWeek/index';
import DayTimeInput from './DayTimeInput/index';
import Switch from '@material-ui/core/Switch';
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
  day:{
    textAlign: 'center',
    marginBottom:'20px'
  },
  text:{
    margin:'0px'
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
    marginTop:'50px',
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
    arr.push({isAm:true, hour:'00', min:'00'});
  }
  return arr;
}
export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const open = props.createRoutineModal;
  const setOpen = props.setCreateRoutineModal;
  const dayName = ['월','화','수','목','금','토','일'];
  let [dayClicked, setDayClicked] = useState([true, false, true, false, true, false, true]);
  let [timeInfo, setTimeInfo] = useState(getDefaultTimes);
  let [timeSetClicked, setTimeSetClicked] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setTimeSetClicked(false);
  };
  const changeDayClicked =(idx) =>{
    let tempClicked = [...dayClicked];
    tempClicked[idx] = !tempClicked[idx];
    setDayClicked(tempClicked);
  };
  const changeAM =(idx) =>{
    
    let tempTimeInfo = [...timeInfo];
    tempTimeInfo[idx].isAm = !tempTimeInfo[idx].isAm;
    setTimeInfo(tempTimeInfo);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      {
        timeSetClicked?
        <>
        <h2 id="simple-modal-title">시간 설정</h2>
        <div className={classes.day}>
          {
            dayName.map((str, idx) => (
              <DayTimeInput dayName={str} clicked={dayClicked[idx]} timeInfo={timeInfo[idx]} setIsAm={()=>{changeAM(idx)}}/>
            ))
          }          
          <div className={classes.buttonDiv}>
          <button className={classes.buttonLeft} onClick={()=>{setTimeSetClicked(false);}}>뒤로 가기</button>
          <button className={classes.buttonRight}>완료</button>
          </div>
        </div>
        </>
        :
        <>
        <h2 id="simple-modal-title">새로운 루틴</h2>
        <input type="text" placeholder="루틴 이름 입력" className={classes.inputDiv}></input>
        <div className={classes.day}>
          {
            dayName.map((str, idx) => (
              <DayOfWeek dayName={str} clicked={dayClicked[idx]} onClick={()=>{changeDayClicked(idx);}}></DayOfWeek>
            ))
          }
        </div>
        <div className={classes.inputDiv}>
          <span className={classes.text}>시간</span><span className={classes.floatRight} onClick={()=>{setTimeSetClicked(true);}}>시간 선택</span>
        </div>
        <div className={classes.inputDiv}>
          <span className={classes.text}>알림</span><div className={classes.floatRight}><Switch className={classes.switch}/></div>
        </div>
        <div className={classes.buttonDiv}>
          <button className={classes.buttonLeft} onClick={handleClose}>취소</button>
          <button className={classes.buttonRight}>완료</button>
        </div>
        </>
      }
    </div>
  );

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
  );
}