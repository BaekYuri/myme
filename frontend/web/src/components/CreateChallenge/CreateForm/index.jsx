import React, {useState} from 'react';
import 'date-fns';
import { makeStyles, withStyles, Grid, Paper } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import { teal } from '@material-ui/core/colors';
import Wrapper from './styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import nameData from './name';
import periodData from './period';
import repeatData from './repeat';
import UploadImg from '../UploadImg/';

const GreenCheckbox = withStyles({
  root: {
    color: teal[400],
    '&$checked': {
      color: teal[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

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

 

export default function LayoutTextFields() {
  const classes = useStyles();
  const [state, setState] = React.useState({});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [names, setNames] = useState(nameData);
  const [periods, setPeriods] = useState(periodData);
  const [repeats, setRepeats] = useState(repeatData);
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
                style={{ margin: 1}}
                placeholder="ex. 1일 1커밋"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
            </Grid>
            <Grid item xs={12}>
                <h4>2. 어떤 주제와 관련이 있나요?</h4>
                <FormGroup row>
                    {
                        names.map((e, i)=>{
                            return  <FormControlLabel
                            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name={e.name} />}
                            label={e.label}
                        />
                        })
                    }
                </FormGroup>
            </Grid>
            <Grid item xs={12}>
            <h4>3. 언제부터 시작하나요?</h4>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
               
                </MuiPickersUtilsProvider>
            </Grid> 
            <Grid item xs={12}>
                <h4>4. 얼마동안 할건가요?</h4>
                <FormGroup row>
                    {
                        periods.map((e, i)=>{
                            return  <FormControlLabel
                            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name={e.name} />}
                            label={e.label}
                        />
                        })
                    }
                </FormGroup>
            </Grid>
            <Grid item xs={12}>
                <h4>5. 얼마나 자주 할건가요?</h4>
                <FormGroup row>
                    {
                        repeats.map((e, i)=>{
                            return  <FormControlLabel
                            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name={e.name} />}
                            label={e.label}
                        />
                        })
                    }
                </FormGroup>
            </Grid>
            <Grid item xs={12}>
                <h4>6. 하루에 몇 번 인증이 필요한가요?</h4>
                <TealColor
                id="standard-full-width"
                style={{ margin: 1}}
                
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
            </Grid>
            <Grid item xs={12}>
                <h4>7. 챌린지를 소개해 주세요!</h4>
                  <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{float:'right'}}
                  />
                
            </Grid>
        </Grid>
        </Wrapper>
  );
}