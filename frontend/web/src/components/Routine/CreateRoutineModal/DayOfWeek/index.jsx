import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import myStyle from './styles'
const useStyles = makeStyles(() => (myStyle));
function App(props){
    const classes = useStyles();
    return(
        <div style={props.clicked?{backgroundColor:'white'}:{backgroundColor:'#B5E3D8'}} onClick={props.onClick} className={classes.dayDiv}>
            {props.dayName}
        </div>
    );
}
export default App;