import React, {useState, useCallback} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Moment from 'react-moment';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const TodayEvent = (props) => {


var today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);  
var dateString = year + '-' + month  + '-' + day;

var eventDay = props.event.start 
var eeday = <Moment format="YYYY-MM-DD">{eventDay}</Moment>
    return(
        <div className='demo-app'>
            <h4>{eeday} :  {props.event.title}</h4>
           {/* {
               eeday == { dateString } ?
               <h4>- {props.event.title}</h4>
               : <h4>없음</h4>
           } */}
       

        </div>
    )
  }
 

export default TodayEvent