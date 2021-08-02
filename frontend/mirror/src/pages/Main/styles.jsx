import styled from 'styled-components';

const Wrapper = styled.div`
 & .date {
   font-size: 15px;
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
`;

export default Wrapper;
