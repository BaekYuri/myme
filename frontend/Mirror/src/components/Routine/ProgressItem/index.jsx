import React,{useState} from 'react';
import Wrapper from './styles'
import {Typography, Card, CardContent, CardHeader, CardActions, Tabs, Tab, IconButton, Grid} from '@material-ui/core'
import YouTubeIcon from '@material-ui/icons/YouTube';
import NoteIcon from '@material-ui/icons/Note';
import PlayIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import CheckIcon from '@material-ui/icons/CheckCircleOutline'
import NextIcon from '@material-ui/icons/SkipNext'
function App(){
    let [tabValue, setTabValue] = useState(0)

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
      };
    return(
        <Wrapper>
            <CardHeader title ='하루 10분 명상'/>
            <CardContent>
                <div className='video-container content-container' hidden={tabValue !== 0}>
                <Typography className='content-typography'>안녕하세요</Typography>
                </div>
                <div className='video-container' hidden={tabValue !== 1}>
                <iframe src="https://www.youtube.com/embed/1pLXrnBrZ7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                </div>
            </CardContent>
            <CardActions>
                <Grid item xs={4}>
                    <Tabs
                        value={tabValue}
                        onChange={handleChange}
                        variant="fullWidth"
                    >
                        <Tab className={tabValue !==0?'no-active-tab':'active-tab'} icon={<NoteIcon />} />
                        <Tab className={tabValue !==1?'no-active-tab':'active-tab'} icon={<YouTubeIcon />}  />
                    </Tabs>
                </Grid>
                <Grid item xs={3}>
                    00:00/01:00
                </Grid>
                <Grid item xs={5}>
                    {
                            true?<IconButton color="primary"><PlayIcon className="btn progress-btn"></PlayIcon></IconButton>:<IconButton color="primary" ><PauseIcon className="progress-btn"></PauseIcon></IconButton>
                    }
                    <IconButton color="primary" >
                            <CheckIcon className={true?"btn progress-btn complete-btn":"btn progress-btn"} ></CheckIcon>
                            </IconButton>
                            <IconButton color="primary" >
                            <NextIcon className="btn progress-btn"></NextIcon>
                            </IconButton>
                </Grid>
            </CardActions>
        </Wrapper>
    )
}
export default App