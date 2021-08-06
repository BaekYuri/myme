import React from 'react';
import Wrapper from './styles'
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

function App(props){
    return(
        <Wrapper>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <h2 className='title'>{props.challengeId}</h2>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={6} className='term'>2주</Grid>
                <Grid item xs={6} className='term'>평일 매일</Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={8}><span>21.07.19 ~ 21.08.02</span></Grid>
                <Grid item xs={4}><span className="float-right">✔주 5일</span></Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <h3 className='title'>달성률</h3>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
            <Grid item xs={9}>
                <LinearProgress variant="determinate" value={70}></LinearProgress>
            </Grid>
            <Grid item xs={3}><span className="float-right">70%</span></Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12} className='term confirm-btn btn'>인증하기</Grid>
            </Grid>
        </Wrapper>
    );
}
export default App;