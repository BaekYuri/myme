import React from 'react';
import Wrapper from './styles'
import Grid from '@material-ui/core/Grid';
import PlayIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import CheckIcon from '@material-ui/icons/CheckCircleOutline'
import NextIcon from '@material-ui/icons/SkipNext'
import {connect} from 'react-redux';

function App(props){
    return(
        <Wrapper className='progress-item'>
            <Grid container spacing={0}>
                <Grid container item xs={8}>
                    <Grid item xs={4}>
                    {
                        true?<PlayIcon className="btn progress-btn"></PlayIcon>:<PauseIcon className="progress-btn"></PauseIcon>
                }
                    </Grid>
                    <Grid item xs={4}>
                        <CheckIcon className="btn progress-btn"></CheckIcon>
                    </Grid>
                    <Grid item xs={4}>
                        <NextIcon className="btn progress-btn"></NextIcon>
                    </Grid>
                </Grid>
                <Grid item xs={4} className='assist'>
                    <h2>Assist</h2>
                    <a href={props.state.routineStore.routine[props.listIdx].routinizedHabit[props.itemIdx].assistLink}>{props.state.routineStore.routine[props.listIdx].routinizedHabit[props.itemIdx].assistContent}</a>
                </Grid>
            </Grid>
        </Wrapper>
    );
}
const mapStateToProps = (state) =>{
    return {
        state
    }
}
export default connect(mapStateToProps)(App);