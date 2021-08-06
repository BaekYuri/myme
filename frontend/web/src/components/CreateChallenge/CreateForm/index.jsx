import React, {useState, useEffect, useCallback} from 'react';
import 'date-fns';
import { makeStyles, withStyles, Grid, MenuItem, Typography, TextField, FormGroup, FormControlLabel,FormControl, Checkbox, Radio , RadioGroup, Button, Select} from '@material-ui/core/';

import { teal } from '@material-ui/core/colors';
import Wrapper from './styles';

import { CheckBoxIcon, CheckBoxOutlineBlankIcon, Favorite, FavoriteBorder  } from '@material-ui/icons/';
import EventIcon from '@material-ui/icons/Event';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import ko from "date-fns/locale/ko"
import moment from 'moment';

import nameData from './name';
import periodData from './period';
import repeatData from './repeat';
import UploadImg from '../UploadImg/';

import {connect, useDispatch, useSelector} from 'react-redux';
import { ADD_CHALLENGE_REQUEST, ADD_CHALLENGE } from '../../../reducers/challenge';

const GreenCheckbox = withStyles({
  root: {
    color: teal[400],
    '&$checked': {
      color: teal[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const TealRadio = withStyles({
  root: {
    color: teal[400],
    '&$checked': {
      color: teal[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);


const ColorTeal = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
    '&:hover': {
      backgroundColor: teal[700],
    },
  },
}))

const ColorButton = ColorTeal(Button);


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const TealColor = withStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
          color: 'teal',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'teal',
        },     
      },    
  }))(TextField)


function CreateChallenge() {
  const dispatch = useDispatch()

  const classes = useStyles();
  const [state, setState] = React.useState({});
  // const [selectedValue, setSelectedValue] = React.useState('');
  const [value, setValue] = React.useState('female');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [selectedDate, setSelectedDate] = React.useState(Date.now());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [names, setNames] = useState(nameData);
  // const [periods, setPeriods] = useState(periodData);
  // const [repeats, setRepeats] = useState(repeatData);
  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(startDate);
  
  var diffDay = (endDate - startDate) / (1000*60*60*24);
  
// 인증 횟수
 
  const [check, setCheck] = useState(false);

  const [name, setName] = useState('')
  const onChangeName = useCallback((e) => {
    setName(e.target.value)
  }, [])

  const [subject, setSubject] = useState('')
  const onChangeSubject = useCallback((e) => {
    setSubject(e.target.value)
  }, [])

  const [start_date, setStart] = useState('')
  const onChangeStart = useCallback((e) => {
    setStart(e.target.value)
  }, [])

  const [end, setEnd] = useState('')
  const onChangeEnd = useCallback((e) => {
    setEnd(e.target.value)
  }, [])

  const [period, setDays] = useState('')
  const onChangeDays = useCallback((e) => {
    setDays(e.target.value)
  }, [])

  const [repeat_cycle, setRepeat] = useState(1)
  const onChangeRepeat = useCallback((e) => {
    setRepeat(e.target.value)
  }, [])

  const [auth_count, setProof] = useState('1')
  const onChangeProof = useCallback((e) => {
    setProof(e.target.value)
  }, [])

  const [content, setIntroduce] = useState('')
  const onChangeIntroduce = useCallback((e) => {
    setIntroduce(e.target.value)
  }, [])

  const add = useCallback(() =>{
    dispatch({
      type: ADD_CHALLENGE_REQUEST,
      data:{
        name,
        // subject,
        start_date: startDate,
        // end,
        period: diffDay,
        repeat_cycle,
        auth_count,
        content
      }
    })
  },[name, start_date, period, repeat_cycle, auth_count, content]);



  return (
    <Wrapper>
        <Grid container xs={10} className="grid">
            <Grid item xs={12} className="titleGrid">
                <h1 style={{margin: 0}}>챌린지 생성</h1>
            </Grid>
            <Grid item xs={12}>
                <h4>1. 개설하려는 챌린지에 이름을 붙여주세요!</h4>
                <TealColor
                id="standard-full-width"
                style={{ margin: '10px'}}
                placeholder="ex. 1일 1커밋"
                value={name}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={onChangeName}
                />
            </Grid>
            <Grid item xs={12}>
                <h4>2. 어떤 주제와 관련이 있나요?</h4>
                <FormControl component="fieldset" style={{ margin: '10px'}}>
                  <RadioGroup name="주제" value={subject} onChange={onChangeSubject}>
                      {
                          names.map((e, i)=>{
                              return  <FormControlLabel value={e.label} control={<TealRadio />} label={e.label} />
                          })
                      }
                  </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
              <h4>3. 얼마동안 할건가요?</h4>
              
              <Grid container spacing={3} style={{margin: '10px'}}>
                <Grid item xs={3}>
                  
                  <h4 className="dateTitle">시작일</h4>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="yyyy/MM/dd"
                      margin="normal"
                      id="date-picker-inline"
                      value={startDate}
                      onChange={date => setStartDate(date)}
                      startDate={startDate}
                      selected={startDate}
                      minDate={Date.now()}
                      locale={ko}
                      KeyboardButtonProps={{
                          'aria-label': 'change date',
                      }}
                      />

                
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={3}>
                    <h4 className="dateTitle">종료일</h4>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      
                  <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="yyyy/MM/dd"
                          margin="normal"
                          id="date-picker-inline"
                          value={endDate}
                          minDate={startDate}
                          onChange={date => setEndDate(date)}
                          locale={ko}
                          KeyboardButtonProps={{
                              'aria-label': 'change date',
                          }}
                          />

                      </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4} float='right'>
                  <h4 className="dateTitle" style={{marginBottom: '50px'}}> </h4>
                  <Typography variant='h5' onChange={onChangeDays}>🏃‍♂️ {diffDay} 일</Typography>
                </Grid>
              </Grid>
            </Grid> 
          
            <Grid item xs={12}>
                <h4>4. 얼마나 자주 할건가요?</h4>
                <FormControl component="fieldset" style={{ margin: '10px'}}>
                  <RadioGroup name="주제" value={repeat_cycle} onChange={onChangeRepeat}>
                      {/* {
                          repeats.map((e, i)=>{
                              return  <FormControlLabel value={e.label} control={<TealRadio />} label={e.label} />
                          })
                      } */}
                      <FormControlLabel value="7" control={<TealRadio />} label="월~일 매일" />
                      <FormControlLabel value="5" control={<TealRadio />} label="월~금 매일" />
                      <FormControlLabel value="2" control={<TealRadio />} label="토~일 매일" />
                      <FormControlLabel value="1" control={<TealRadio />}label="선택">
                        
                          
                      </FormControlLabel>
                  </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <h4>5. 하루에 몇 번 인증이 필요한가요?</h4>
                <FormControl className={classes.formControl} style={{ margin: '10px'}}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={auth_count}
                    onChange={onChangeProof}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>


            </Grid>
            <Grid item xs={12}>
                <h4>6. 챌린지를 소개해 주세요!</h4>
                  <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    multiline
                    value={content}
                    rows={4}
                    variant="outlined"
                    style={{ margin:'10px'}}
                    onChange={onChangeIntroduce}
                  />
                
            </Grid>
            <Grid item xs={12} style={{margin:'40px 10px'}}>
                    <ColorButton variant="contained" onClick={add}>개설하고 멋있게 도전하기!</ColorButton>
                    <Button variant="contained" style={{margin: '10px'}} >취소</Button>
                </Grid>
        </Grid>
        </Wrapper>
  );
}

// const mapStateToProps = (state) =>{
//   return {
//       state
//   }
// }
// export default connect(mapStateToProps)(CreateChallenge);
export default CreateChallenge