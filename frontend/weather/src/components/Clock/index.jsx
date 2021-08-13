import React, {useState, useEffect} from 'react'
import Wrapper from './styles'
import {Grid, Typography} from '@material-ui/core'
import moment from 'moment'

function App(props) {
    const [time, setTime] = useState(moment())
    const day =['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    useEffect(()=>{
        function timer(){
            setInterval(()=>{setTime(moment())},1000);
        }
        timer()
        return ()=>{clearInterval(timer)}
    })
    return(
        <Wrapper>
            <Typography variant='h5'>
                {time.format('ddd, MMM D')}
            </Typography>
            <Typography variant='h1'>
            {time.format('h:mm')}
            </Typography>
            <Typography variant='h6'>
            {time.format('a')}
            </Typography>

        </Wrapper>
    );
}
export default App