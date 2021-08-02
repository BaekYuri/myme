import React from 'react';
import { makeStyles, Grid, Container, withStyles, Switch, Typography, TextField } from '@material-ui/core/';
import { teal } from '@material-ui/core/colors';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Wrapper from './styles';

const TealSwitch = withStyles({
    switchBase: {
      color: teal[300],
      '&$checked': {
        color: teal[500],
      },
      '&$checked + $track': {
        backgroundColor: teal[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const category = [
    { title: '스포츠'},
    { title: '정치'},
    { title: '연예'},
    { title: '경제'},
    { title: '사회'},
    { title: '생활/문화'},
    { title: 'IT/과학'},
  ];

const MirrorSetting = () => {

    return(
        <Container maxWidth="lg" style={{background: '#eee'}}>
            <Wrapper>
            <Grid container xs={12} className="grid" style={{padding: '20px', margin: '10px'}}>
                <Grid item xs={12} className="titleGrid">
                    <h1>미러 관리</h1>
                </Grid>
                <Grid item xs={12} style={{height: '50px'}}></Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                    style={{background: '#fff', height: '50px'}}
                >
                    <Grid item xs={1}></Grid>
                    <Grid item xs={9} className="title"><Typography>   코로나19</Typography></Grid>
                    <Grid item xs={2}><TealSwitch/></Grid>
                    
                </Grid>
                <Grid item xs={12} style={{height: '50px'}}></Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                    style={{background: '#fff', height: '50px'}}
                >
                    <Grid item xs={1}></Grid>
                    <Grid item xs={9} className="title"><Typography>나의 주식</Typography></Grid>
                    <Grid item xs={2}><TealSwitch/></Grid>
                    
                </Grid>
                <Grid item xs={12} style={{height: '50px'}}></Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                    style={{background: '#fff', height: '50px'}}
                >
                    
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4}><Typography>오늘의 뉴스</Typography></Grid>
                    <Grid item xs={6}>   
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        style={{color: 'teal'}}
                        options={category}
                        getOptionLabel={(option) => option.title}
                        // defaultValue={[category[0]]}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                        
                        />
                        )}
                    />
                    </Grid>   
                    <Grid item xs={1}></Grid>
                   
                </Grid>
                
            </Grid>
        </Wrapper>
        </Container>
    );
}

export default MirrorSetting;