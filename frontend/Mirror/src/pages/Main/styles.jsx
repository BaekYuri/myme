import styled from 'styled-components';

const Wrapper = styled.div`
  color:white;
  background-color:black;
  padding:30px;
 & .date {
   font-size: 20px;
 }
  & .clock {  
    font-size: 80px;
  }  
& .calendarTop{
  height: 300px;
}
  & .calendar{
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
  }
  & .routine{
    
  }
& .MuiTabs-indicator {
    display: none;
  }
  & .appbar {
    top: 48px;
    box-shadow: none;
    /* transition: all 0.4s; */
    &.appbar-shift {
      width: calc(100% -280px);
      margin-left: 280px;
      /* transition: all 0.4s; */
    }
  }
  & .tab {
    padding: 0;
    margin: 10px 5px;
    border-radius: 5px;
    min-width: 160px;
    width: 200px;
  }
  & .tab-panel {
    padding: 170px 0 20px 0;
  }
  .react-calendar {
    width: 500px;
  max-width: 100%;
  border: 1px solid #a0a096;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.500em;
  float: right;
  }
 
  .react-calendar .react-calendar__navigation .react-calendar__navigation__label {
    font-size: 25px;
  }
  .react-calendar .react-calendar__tile {
    height: 70px;
  }

  .react-calendar .react-calendar__tile--active:enabled:hover, .react-calendar .react-calendar__tile--active:enabled:focus {
    background: #e70220;
  }
  .react-calendar .react-calendar__tile, .react-calendar .react-calendar__month-view__days__day {
    font-size: 18px;
  }
`;

export default Wrapper;
