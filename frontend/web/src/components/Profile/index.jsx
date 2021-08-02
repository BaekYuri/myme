import React, { useContext, useState } from 'react';
import { Grid, Container } from '@material-ui/core/';
import { teal } from '@material-ui/core/colors';
import { makeStyles, withStyles, FilledInput, FormControl, FormHelperText, Input, InputLabel, OutlinedInput, MenuItem, TextField, Paper, InputBase, IconButton, Typography, Button  } from '@material-ui/core/';

import SearchIcon from '@material-ui/icons/Search';

const genders = [
    {
      value: '남',
      label: '남',
    },
    {
      value: '여',
      label: '여',
    },
  ];

  const ColorTeal = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(teal[500]),
      backgroundColor: teal[500],
      '&:hover': {
        backgroundColor: teal[700],
      },
    },
  }))
  
  const ColorButton = ColorTeal(Button);

  const MyInfoContentDefaultComponent = props => {
    const { LefetComponent, RightComponet } = props;

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={2} style={{color: 'teal'}}>
          {LefetComponent}
        </Grid>
        <Grid item xs={8}>
          {RightComponet}
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    );
  };

  const MyInfoInputComponent = props => {
    let { keyValue, title, rows, defaultValue } = props;
   
    return (
      <MyInfoContentDefaultComponent
        LefetComponent={
          <Typography variant="body1" className="title">
            {title}
          </Typography>
        }
        RightComponet={
          <TextField
            id={`outlined-basic-${keyValue}`}
            defaultValue={defaultValue}
            variant="outlined"
            fullWidth={true}
            style={{backgroundColor:"white"}}
            multiline={rows !== null ? true : false}
            rows={rows !== null ? rows : 1}
            rowsMax={3}
          />
        }
      />
    );
  };

  const MyInfoSelectComponent = props => {
    let { keyValue, title, rows, data, handleChange  } = props;
   
    return (
      <MyInfoContentDefaultComponent
        LefetComponent={
          <Typography variant="body1" className="title">
            {title}
          </Typography>
        }
        RightComponet={
          <TextField
            id={`outlined-basic-${keyValue}`}
            select
            value={data}
            style={{backgroundColor:"white"}}
            fullWidth={true}
            onChange={handleChange}
            variant="outlined"
            >
            {genders.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
        </TextField>
        }
      />
    );
  };

  const MyInfoBirthdayComponent = props => {
    let { keyValue, title, rows } = props;
   
    return (
      <MyInfoContentDefaultComponent
        LefetComponent={
          <Typography variant="body1" className="title">
            {title}
          </Typography>
        }
        RightComponet={
            <TextField
            id="date"
            type="date"
            style={{backgroundColor:"white"}}
            variant="outlined"
            defaultValue="1998-01-12"
            fullWidth={true}
            InputLabelProps={{
            shrink: true,
            }}
        />
        }
      />
    );
  }
const Profile = () =>{
    const [name, setName] = React.useState('Composed TextField');
    const [gender, setGender] = React.useState('여');
    const handleChange = (event) => {
      setName(event.target.value);
    };
    
    return(
        <Container maxWidth="lg" style={{background: '#eee'}}>
        <Grid container xs={12} className="grid" style={{padding: '20px', margin: '10px'}}>
            <Grid item xs={12} className="titleGrid">
                <h1>개인 정보</h1>
            </Grid>
            <form noValidate autoComplete="off">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >

                    <Grid item xs={12}>
                    <MyInfoInputComponent title="이름" keyValue="user_id" defaultValue="김민주"/>
                    </Grid>
                    <Grid item xs={12}>
                    <MyInfoInputComponent title="이메일" keyValue="user_nm" defaultValue="minjoo0112@naver.com"/>
                    </Grid>

                    <Grid item xs={12}>
                    <MyInfoInputComponent title="전화번호" keyValue="web_site" defaultValue="010-8296-9303"/>
                    </Grid>

                    <Grid item xs={12}>
                    <MyInfoSelectComponent title="성별" keyValue="web_site" data={gender} handelChange="handelChange" defaultValue="여"/>
                    </Grid>

                    <Grid item xs={12}>
                    <MyInfoBirthdayComponent title="생년월일" keyValue="birthday" />
                    </Grid>

                    <Grid item xs={12}>
                    <MyInfoInputComponent title="주소" keyValue="web_site"/>
                    {/* <IconButton type="submit" aria-label="search">
                            <SearchIcon />
                        </IconButton> */}
                    </Grid>
            
                </Grid>
                <Grid item xs={12} style={{marginTop:'40px'}}>
                    <ColorButton variant="contained" >수정</ColorButton>
                    <Button variant="contained" style={{margin: '10px'}} >취소</Button>
                </Grid>
            </form>
        
        </Grid>
        </Container>
    )
}

export default Profile;