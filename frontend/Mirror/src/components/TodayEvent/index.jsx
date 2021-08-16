import React from 'react'
import moment from 'moment';
// @material-ui/icons
import {ListItem, ListItemText, Checkbox,TextField }from '@material-ui/core/';
import {
    alpha,
    ThemeProvider,
    withStyles,
    makeStyles,
    createTheme,
  } from '@material-ui/core/styles';
const TodayEvent = (props) => {

    const eventStartDay = props.event.start 
    const eventEndDay = props.event.end
    const todayDate = moment().format('YYYY-MM-DD');
    const eventStartDate = moment(eventStartDay).format('YYYY-MM-DD')
    const eventEndDate = moment(eventEndDay).format('YYYY-MM-DD')
    const eventStartTime = moment(eventStartDay).format('HH:mm')
    const bool = props.event.allDay
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    
    return(
        <>
            <ListItem style={{whiteSpace: 'nowrap', marginLeft:'-30px'}}>
               <Checkbox
                   checked={checked}
                   onChange={handleChange}
                   inputProps={{ 'aria-label': 'primary checkbox' }}
                   style={{marginRight: '10px', color:'white'}}
                   color="white"
                   />
               {
                   bool ? null : <h5 style={{color:'white'}}>({eventStartTime}) &nbsp;</h5> 
               }
               
                {/* <TextField id="standard-basic" defaultValue={props.event.title}  error InputProps={{ readOnly: true}} style={{color:'white'}} color='white'/> */}
                <h4 style={{color:'white'}}>{props.event.title}</h4>
               {/* <ListItemText whiteSpace= 'nowrap' style={{width:'30px', whiteSpace:'nowrap', overflow:'hidden', marginRight:'0'}}>{props.event.title}</ListItemText> */}
           </ListItem>
                <hr color='white' style={{width:'92%', float:'right', marginTop:'-10px'}}/>
           {/* <Divider primary="Inbox" border='2px solid' /> */}
          
            
        </>
    )
}


export default TodayEvent