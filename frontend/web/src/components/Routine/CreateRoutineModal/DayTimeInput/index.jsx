import React from 'react';
import Wrapper from './styles'

function App(props){
    return(
        <Wrapper>
            <span className={props.clicked?'float-left not-selected':'float-left'}>{props.dayName}요일</span>
            <div className='float-right'>
            <span><input type='time' className='time-input' value={props.timeInfo.hour+':'+props.timeInfo.min}></input></span>
            </div>
        </Wrapper>
    );
}
export default App;