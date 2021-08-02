import React from 'react';
import Wrapper from './styles'
function App(props){
    return(
        <Wrapper onClick={props.onClick}>
            + 루틴 생성
        </Wrapper>
    );
}
export default App;