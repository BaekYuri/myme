import React, {useState, useEffect, useCallback} from 'react';
import 'date-fns';
import { makeStyles, withStyles, Grid, MenuItem, Typography, TextField, FormGroup, FormControlLabel,FormControl, Checkbox, Radio , RadioGroup, Button, Select, InputAdornment, FormHelperText} from '@material-ui/core/';

import { teal } from '@material-ui/core/colors';
import Wrapper from './styles';

import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import ko from "date-fns/locale/ko"
import category from './category';

import { useDispatch } from 'react-redux';
import { ADD_CHALLENGE_REQUEST } from '../../../reducers/challenge';
import { useHistory } from 'react-router-dom';
import { TrendingUpOutlined } from '@material-ui/icons';

import Alert from '@material-ui/lab/Alert';

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


const CreateChallenge = () => {
  const dispatch = useDispatch()
  let history = useHistory()

  const classes = useStyles();

  const [categories, setCategories] = useState(category);
  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(startDate);
  const [maxDate, setMaxDate] = useState(null)
  
  let diffDay = Math.ceil((endDate - startDate) / (1000*60*60*24));
  
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

  const [period, setPeriod] = useState(0)
  const onChangePeriod = useCallback((e) => {
    setPeriod(e.target.value)
  }, [])

  const [openPeriodInput, setOpenPeriodInput] = useState(false)

  const [selectWeek, setSelectWeek] = useState(0)
  const onChangeSelectWeek = useCallback((e) => {
    if (e.target.value === '5') {
      setOpenPeriodInput(true)
      setSelectWeek(e.target.value)
      setWeek(e.target.value*1)
    } else {
      setOpenPeriodInput(false)
      setSelectWeek(e.target.value)
      setWeek(e.target.value*1)
    }
  }, [])

  const [week, setWeek] = useState(0)
  const onChangeWeek = useCallback((e) => {
    if (isNaN(e.target.value)) {
      setWeekError(true)
    } else {
      setWeek(e.target.value)
      if (e.target.value > 52 || e.target.value < 5) {
        setWeekError(true)
      } else {
        setWeekError(false)
      }
    }
  }, [])

  const [weekError, setWeekError] = useState(false)

  const [repeatCycle, setRepeatCycle] = useState(1)
  const onChangeRepeatCycle = useCallback((e) => {
    setRepeatCycle(e.target.value)
  }, [])

  const [activeWeekDay, setActiveWeekDay] = useState({
    mon: true,
    tue: true,
    wed: true,
    thu: true,
    fri: true,
    sat: true,
    sun: true
  })
  const onChangeActiveWeekDay = (e) => {
    setActiveWeekDay({ ...activeWeekDay, [e.target.name]: e.target.checked })
  }
  const { mon, tue, wed, thu, fri, sat, sun } = activeWeekDay
  const activeWeekError = [mon, tue, wed, thu, fri, sat, sun].filter((v) => v).length < (10-repeatCycle)

  const [authCount, setAuthCount] = useState('1')
  const onChangeAuthCount = useCallback((e) => {
    setAuthCount(e.target.value)
  }, [])

  const [content, setIntroduce] = useState('')
  const onChangeIntroduce = useCallback((e) => {
    setIntroduce(e.target.value)
  }, [])

  // useEffect(() => {
  //   console.log([mon, tue, wed, thu, fri, sat, sun].filter((v) => v).length)
  //   console.log(activeWeekError)
  // }, [mon, tue, wed, thu, fri, sat, sun])

  useEffect(() => {
    setPeriod(week*7)
  }, [week])
  
  useEffect(() => {
    const d = new Date(period*24*60*60*1000+startDate.valueOf())
    setEndDate(d)
  }, [period])
  
  useEffect(() => {
    const d = new Date(startDate.valueOf()+(1000*60*60*24*365))
    setMaxDate(d)
  }, [startDate])
  
  const add = useCallback(() =>{
    if(!name){
      alert('챌린지 이름을 입력하세요.')
      return
    }
    // if(!subject){
    //   alert('관련 주제를 선택하세요.')
    //   return
    // }
    if(!startDate){
      alert('시작일을 선택하세요.')
      return
    }
    // if(!repeat_cycle){
    //   alert('반복일을 선택하세요.')
    //   return
    // }
    // if(!auth_count){
    //   alert('인증횟수를 선택하세요')
    //   return
    // }
    if(!content){
      alert('챌린지 소개글을 입력하세요.')
      return
    }
    dispatch({
      type: ADD_CHALLENGE_REQUEST,
      data:{
        name,
        // subject,
        start_date: startDate,
        end_date: end,
        period: diffDay,
        repeatCycle,
        authCount,
        content
      }
    })
    history.push('/Home')
  },[name, start_date, period, repeatCycle, authCount, content]);

  return (
    <Wrapper>
      <Grid container xs={10} className="grid">
        <Grid item xs={12} className="titleGrid">
          <h1 style={{margin: 0}}>챌린지 생성</h1>
        </Grid>
        {/* **************************************************************** */}
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
        {/* **************************************************************** */}
        <Grid item xs={12}>
          <h4>2. 어떤 주제와 관련이 있나요?</h4>
          <FormControl component="fieldset" style={{ margin: '10px'}}>
            <RadioGroup name="주제" value={subject} onChange={onChangeSubject}>
              {
                categories.map((e, i)=>{
                  return  <FormControlLabel value={e.label} control={<TealRadio />} label={e.label} />
                })
              }
            </RadioGroup>
          </FormControl>
        </Grid>
        {/* **************************************************************** */}
        <Grid item xs={12}>
          <h4>3. 얼마나 자주 할건가요?</h4>
          <FormControl component="fieldset" style={{ margin: '10px'}}>
            <RadioGroup name="주제" value={repeatCycle} onChange={onChangeRepeatCycle}>
              <FormControlLabel value="1" control={<TealRadio />} label="매일" />
              <FormControlLabel value="2" control={<TealRadio />} label="평일 매일" />
              <FormControlLabel value="3" control={<TealRadio />} label="주말 매일" />
              <FormControlLabel value="4" control={<TealRadio />} label="주 6일" />
              <FormControlLabel value="5" control={<TealRadio />} label="주 5일" />
              <FormControlLabel value="6" control={<TealRadio />} label="주 4일" />
              <FormControlLabel value="7" control={<TealRadio />} label="주 3일" />
              <FormControlLabel value="8" control={<TealRadio />} label="주 2일" />
              <FormControlLabel value="9" control={<TealRadio />} label="주 1일" />
            </RadioGroup>
          </FormControl>
        </Grid>
        {/* **************************************************************** */}
        <Grid item xs={12}>
          <h4>4. 얼마동안 할건가요?</h4>
          {repeatCycle <= 3
            ? (
            <Grid Grid container spacing={3} style={{margin: '10px'}}>
              <Grid item xs={3}>
                <h4 className="dateTitle">시작일</h4>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="yyyy/MM/dd"
                    margin="normal"
                    invalidDateMessage="날짜 형식에 맞게 입력해주세요!"
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
                    invalidDateMessage="날짜 형식에 맞게 입력해주세요!"
                    value={endDate}
                    minDate={startDate}
                    minDateMessage="시작일 보다 이전 일을 선택할 수 없습니다."
                    maxDate={maxDate}
                    maxDateMessage="챌린지 기한은 1년을 넘길 수 없습니다."
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
                <Typography variant='h5' >🏃‍♂️ {diffDay ? diffDay : 0} 일</Typography>
              </Grid>
            </Grid>
            )
            : (
            <>
              <Grid Grid container spacing={3} style={{margin: '10px'}}>
                <Grid item xs={3}>
                  <h4 className="dateTitle">시작일</h4>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="yyyy/MM/dd"
                      margin="normal"
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
                      value={endDate}
                      maxDate={maxDate}
                      maxDateMessage="챌린지 기한은 1년을 넘길 수 없습니다."
                      locale={ko}
                      disabled
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4} float='right'>
                  <h4 className="dateTitle" style={{marginBottom: '50px'}}> </h4>
                  <Typography variant='h5' >🏃‍♂️ {period} 일</Typography>
                </Grid>
              </Grid>
              <FormControl component="fieldset" style={{ margin: '10px'}}>
                <RadioGroup name="주제" value={selectWeek} onChange={onChangeSelectWeek}>
                  <FormControlLabel value="1" control={<TealRadio />} label="1 주" />
                  <FormControlLabel value="2" control={<TealRadio />} label="2 주" />
                  <FormControlLabel value="3" control={<TealRadio />} label="3 주" />
                  <FormControlLabel value="4" control={<TealRadio />} label="4 주" />
                  <FormControlLabel value="5" control={<TealRadio />} label="기타" />
                  {
                    openPeriodInput ? (
                    <>
                      <TealColor
                        id="standard-number"
                        error={weekError}
                        value={week}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">주</InputAdornment>
                        }}
                        onChange={onChangeWeek}
                        helperText="5~52주 범위로 설정할 수 있습니다."
                      />
                    </>
                    ) : null
                  }
                </RadioGroup>
              </FormControl>
            </>
            )
          }
        </Grid>
        {/* **************************************************************** */}
        {
          repeatCycle >= 4
            ?
            <Grid item xs={12}>
              <h4>+ 어떤 요일에 인증이 가능한가요?</h4>
              <FormControl error={activeWeekError} component="fieldset" style={{ margin: '10px'}}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox checked={mon} onChange={onChangeActiveWeekDay} name="mon"/>} label="월" />
                  <FormControlLabel control={<Checkbox checked={tue} onChange={onChangeActiveWeekDay} name="tue"/>} label="화" />
                  <FormControlLabel control={<Checkbox checked={wed} onChange={onChangeActiveWeekDay} name="wed"/>} label="수" />
                  <FormControlLabel control={<Checkbox checked={thu} onChange={onChangeActiveWeekDay} name="thu"/>} label="목" />
                  <FormControlLabel control={<Checkbox checked={fri} onChange={onChangeActiveWeekDay} name="fri"/>} label="금" />
                  <FormControlLabel control={<Checkbox checked={sat} onChange={onChangeActiveWeekDay} name="sat"/>} label="토" />
                  <FormControlLabel control={<Checkbox checked={sun} onChange={onChangeActiveWeekDay} name="sun"/>} label="일" />
                  {
                    activeWeekError
                      ? <FormHelperText>최소 인증 일 수 보다 요일 수를 적게 고를 수 없습니다!</FormHelperText>
                      : null
                  }
                </FormGroup>
              </FormControl>
            </Grid>
            : null
        }
        {/* **************************************************************** */}
        <Grid item xs={12}>
          <h4>5. 하루에 몇 번 인증이 필요한가요?</h4>
          <FormControl className={classes.formControl} style={{ margin: '10px'}}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={authCount}
              onChange={onChangeAuthCount}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* **************************************************************** */}
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
        {/* **************************************************************** */}
        <Grid item xs={12} style={{margin:'40px 10px'}}>
          <ColorButton variant="contained" onClick={add}>개설하고 멋있게 도전하기!</ColorButton>
          <Button variant="contained" style={{margin: '10px'}} >취소</Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default CreateChallenge