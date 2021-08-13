import React, {useState, useCallback} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
/*
import actionCreators from './actions'
import { getHashValues } from './utils'


import CreateEventModal from './createEvent';
*/

import { OPEN_CREATE_EVENT_MODAL } from '../../reducers/modal';
  

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { CLOSE_CREATE_EVENT_MODAL } from '../../reducers/modal';
import { CREATE_EVENT_REQUEST } from '../../reducers/calendar';
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 500
  },
  inputDiv:{
      backgroundColor:'white',
      padding:'10px',
      borderRadius:'20px',
      width:'95%',
      height:'30px',
      border:'#66A091 1px solid'
    },
    btn:{
      width: '50%',
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
}));

const Calendar = (props) => {
  // handlers for user actions
  // ------------------------------------------------------------------------------------------
  const dispatch = useDispatch()
  const openModal=()=>{
    dispatch({type: OPEN_CREATE_EVENT_MODAL});
    
  }
    const { createEventModal } = useSelector((state) => state.modal)
    function closeRoutine(){
        dispatch({
          type: CLOSE_CREATE_EVENT_MODAL
        })
    }

    const classes = useStyles()
  //캘린더에 일정 추가
 
  const [title, setTitle] = useState('')
  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value)
  }, [])

  const add = useCallback(() => {
    dispatch({
      type: CREATE_EVENT_REQUEST,
      data:{
        title
      }
    })
  })

  const handleDateSelect = (selectInfo) => {
    let calendarApi = selectInfo.view.calendar
 

    //calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({ // will render immediately. will call handleEventAdd
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      }, true) // temporary=true, will get overwritten when reducer gives new events
    }
  }

  const handleDates = (rangeInfo) => {
    props.requestEvents(rangeInfo.startStr, rangeInfo.endStr)
      .catch(reportNetworkError)
  }
/*
  const handleDateSelect = (info) => {
    let calendarApi = info.view.calendar
    let title = prompt('Please enter a new title for your event')

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({ // will render immediately. will call handleEventAdd
        title,
        start: info.startStr,
        end: info.endStr,
        allDay: info.allDay
      }, true) // temporary=true, will get overwritten when reducer gives new events
    }
  }
  const handleEventClick = (clickInfo) => {
    if (window.confirm(`정말 '${clickInfo.event.title}' 를 삭제하시겠습니까?`)) {
      clickInfo.event.remove() // will render immediately. will call handleEventRemove
    }
  }

  // handlers that initiate reads/writes via the 'action' props
  // ------------------------------------------------------------------------------------------

  const handleDates = (rangeInfo) => {
    props.requestEvents(rangeInfo.startStr, rangeInfo.endStr)
      .catch(reportNetworkError)
  }

  const handleEventAdd = (addInfo) => {
    props.createEvent(addInfo.event.toPlainObject())
      .catch(() => {
        reportNetworkError()
        addInfo.revert()
      })
  }

  const handleEventChange = (changeInfo) => {
    props.updateEvent(changeInfo.event.toPlainObject())
      .catch(() => {
        reportNetworkError()
        changeInfo.revert()
      })
  }

  const handleEventRemove = (removeInfo) => {
    props.deleteEvent(removeInfo.event.id)
      .catch(() => {
        reportNetworkError()
        removeInfo.revert()
      })
  }

*/



    return(
        <div className='demo-app'>
            <div>
           
            </div>
            <div className='demo-app-main'>
           <Button style={{background: '#89DDBF'}} onClick={openModal}>일정추가</Button>
                <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev',
                    center: 'title',
                    right: 'today next'
                    // dayGridMonth,timeGridWeek,timeGridDay
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                events={[
                  {title:'event1', color:'#89DDBF', start: '2021-08-12', end: '2021-08-13T'},
                  {title:'event2', color:'red', start: '2021-08-12', end: '2021-08-14'},
                  {title:'event2', color:'red', start: '2021-08-12T14:30:00', end: '2021-08-14', allDay: false}
                ]}
                // datesSet={handleDates}
                eventContent={renderEventContent} // custom render function
                //select={openModal}
                /*events={props.events}
                eventClick={handleEventClick}
                eventAdd={handleEventAdd}
                eventChange={handleEventChange} // called for drag-n-drop/resize
                eventRemove={handleEventRemove}*/
                />
               
            </div>
        </div>
    )
  }
  function renderEventContent(eventInfo) {
      return (
        <>
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
        </>
      )
  }
/*
const renderSidebarEvent = (plainEventObject) => {
    var today = new Date();
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);  
  var dateString = year + '-' + month  + '-' + day;
  var eventday = plainEventObject.start;
  return ( 
    <div>
         <h2 style={{color: 'white'}}>오늘의 일정</h2>
        <ul>
         
      {
          eventday.includes(dateString) ? 
          <li key={plainEventObject.id}>
          <b>{plainEventObject.start}</b>
          <i>{plainEventObject.title}</i>
        </li>
        : null
      }
      </ul>
    </div>
  )
  }
function reportNetworkError() {
    alert('에러발생')
}
*/

// function mapStateToProps() {
//   const getEventArray = createSelector(
//       (state) => state.eventsById,
//       getHashValues
//   )
//   return (state) => {
//       return {
//       events: getEventArray(state),
//       weekendsVisible: state.weekendsVisible
//       }
//   }
// }
// export default connect(mapStateToProps, actionCreators)(Calendar)
function reportNetworkError() {
  alert('에러발생')
}
const mapStateToProps = (state) =>{
  return {
      state
  }
}
export default connect(mapStateToProps)(Calendar)