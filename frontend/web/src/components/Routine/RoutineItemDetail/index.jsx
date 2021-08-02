import React from 'react';
import Wrapper from './styles'
import RoutineModalItem from '../RoutineModal/RoutineModalItem/index'
function App(props){
    return(
        <Wrapper>
            <div className='routine-item-list'>
            <RoutineModalItem/>
            <RoutineModalItem/>
            <RoutineModalItem/>
            <RoutineModalItem/>
            </div>
        </Wrapper>
    );
}
export default App;