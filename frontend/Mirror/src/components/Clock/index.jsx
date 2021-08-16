import React from 'react';
import Clock from 'react-live-clock';

function App(){
    return(
        <div style={{float: 'right'}}>
            <Clock className="date" format={'ddd, MMM D'} ticking={true} /*timezone={'KR/Republic'}*//> &nbsp;
            <Clock className="clock" format={'hh:mm'} ticking={true} /*timezone={'KR/Republic'}*//>
            <Clock className="date" format={'a'} ticking={true} /*timezone={'KR/Republic'}*//>
        </div>
    )
}
export default App