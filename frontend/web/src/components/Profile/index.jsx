import React, { useState, useEffect, useCallback } from 'react';
import { Grid, Container } from '@material-ui/core/';
import { teal } from '@material-ui/core/colors';
import { withStyles, MenuItem, TextField, Typography, Button } from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_MY_INFO_REQUEST, UPDATE_MY_INFO_REQUEST } from '../../reducers/user';

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
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={2} style={{ color: 'teal' }}>
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
  let { title, data, defaultValue, handleChange, disabled } = props;

  return (
    <MyInfoContentDefaultComponent
      LefetComponent={
        <Typography variant="body1" className="title">
          {title}
        </Typography>
      }
      RightComponet={
        <TextField
          value={data}
          defaultValue={defaultValue}
          variant="outlined"
          fullWidth={true}
          onChange={handleChange}
          style={{ backgroundColor: "white" }}
          disabled={ disabled }
        />
      }
    />
  );
};

const MyInfoSelectComponent = props => {
  let { title, data, handleChange, defaultValue, arrays } = props;

  return (
    <MyInfoContentDefaultComponent
      LefetComponent={
        <Typography variant="body1" className="title">
          {title}
        </Typography>
      }
      RightComponet={
        <TextField
          select
          value={data}
          defaultValue={defaultValue}
          style={{ backgroundColor: "white" }}
          fullWidth={true}
          onChange={handleChange}
          variant="outlined"
        >
          {arrays.map((option, i) => (
            <MenuItem key={i} value={option} >
              {option}
            </MenuItem>
          ))}
        </TextField>
      }
    />
  );
};

// const MyInfoBirthdayComponent = props => {
//   let { title } = props;

//   return (
//     <MyInfoContentDefaultComponent
//       LefetComponent={
//         <Typography variant="body1" className="title">
//           {title}
//         </Typography>
//       }
//       RightComponet={
//         <TextField
//           id="date"
//           type="date"
//           style={{ backgroundColor: "white" }}
//           variant="outlined"
//           fullWidth={true}
//           InputLabelProps={{ shrink: true }}
//         />
//       }
//     />
//   );
// }

const Profile = () => {
  const dispatch = useDispatch()
  const { me } = useSelector((state) => state.user)

  const genders = ['남', '여', '기타'];

  const [nickname, setNickname] = useState('')
  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value)
  }, [])

  const [phoneNumber, setPhoneNumber] = useState('')
  const onChangePhoneNumber = useCallback((e) => {
    setPhoneNumber(e.target.value)
  }, [])

  const [gender, setGender] = useState('');
  const onChangeGender = useCallback((e) => {
    setGender(e.target.value)
  }, [])

  const [age, setAge] = useState('')
  const onChangeAge = useCallback((e) => {
    setAge(e.target.value)
  }, [])

  const [address, setAddress] = useState('')
  const onChangeAddress = useCallback((e) => {
    setAddress(e.target.value)
  }, [])
  

  const onSubmit = useCallback(() => {
    dispatch({
      type: UPDATE_MY_INFO_REQUEST,
      data: {

      }
    })
  }, [])

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST
    })
  }, [])

  useEffect(() => {
    console.log(nickname)
  }, [nickname])

  
  return (
    <Container maxWidth="lg" style={{background: '#eee'}}>
      <Grid container xs={12} className="grid" style={{padding: '20px', margin: '10px'}}>
        <Grid item xs={12} className="titleGrid">
          <h1>개인 정보</h1>
        </Grid>
        <form noValidate autoComplete="off">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12}>
              <MyInfoContentDefaultComponent
                LefetComponent={
                  <Typography className="title">
                    이름
                  </Typography>
                }
                RightComponet={
                  <TextField
                    defaultValue={me?.name}
                    variant="outlined"
                    fullWidth={true}
                    style={{ backgroundColor: "white" }}
                    disabled
                  />
                }
              />
            </Grid>

            <Grid item xs={12}>
              <MyInfoContentDefaultComponent
                LefetComponent={
                  <Typography className="title">
                    이메일
                  </Typography>
                }
                RightComponet={
                  <TextField
                    defaultValue={me?.email}
                    variant="outlined"
                    fullWidth={true}
                    style={{ backgroundColor: "white" }}
                    disabled
                  />
                }
              />
            </Grid>

            <Grid item xs={12}>
              <MyInfoContentDefaultComponent
                LefetComponent={
                  <Typography className="title">
                    닉네임
                  </Typography>
                }
                RightComponet={
                  <TextField
                    value={nickname}
                    placeholder={me?.nickname}
                    variant="outlined"
                    fullWidth={true}
                    onChange={onChangeNickname}
                    style={{ backgroundColor: "white" }}
                  />
                }
              />
            </Grid>

            <Grid item xs={12}>
              <MyInfoContentDefaultComponent
                LefetComponent={
                  <Typography className="title">
                    전화번호
                  </Typography>
                }
                RightComponet={
                  <TextField
                    value={phoneNumber}
                    placeholder={me?.phone_number}
                    variant="outlined"
                    fullWidth={true}
                    onChange={onChangePhoneNumber}
                    style={{ backgroundColor: "white" }}
                  />
                }
              />
            </Grid>

            <Grid item xs={12}>
              <MyInfoContentDefaultComponent
                LefetComponent={
                  <Typography className="title">
                    성별
                  </Typography>
                }
                RightComponet={
                  <TextField
                    select
                    value={gender}
                    placeholder={me?.gender}
                    style={{ backgroundColor: "white" }}
                    fullWidth={true}
                    onChange={onChangeGender}
                    variant="outlined"
                  >
                    {genders.map((option, i) => (
                      <MenuItem key={i} value={option} >
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                }
              />
            </Grid>

            <Grid item xs={12}>
              <MyInfoContentDefaultComponent
                LefetComponent={
                  <Typography className="title">
                    나이
                  </Typography>
                }
                RightComponet={
                  <TextField
                    select
                    value={age}
                    placeholder={me?.age}
                    style={{ backgroundColor: "white" }}
                    fullWidth={true}
                    onChange={onChangeAge}
                    variant="outlined"
                  >
                    {[...Array(100).keys()].map(x => ++x).map((age, i) => (
                      <MenuItem key={i} value={age} >
                        {age}
                      </MenuItem>
                    ))}
                  </TextField>
                }
              />
            </Grid>

            <Grid item xs={12}>
              <MyInfoContentDefaultComponent
                LefetComponent={
                  <Typography className="title">
                    주소
                  </Typography>
                }
                RightComponet={
                  <TextField
                    value={address}
                    placeholder={me?.address}
                    variant="outlined"
                    fullWidth={true}
                    onChange={onChangeAddress}
                    style={{ backgroundColor: "white" }}
                  />
                }
              />
            </Grid>
          </Grid>
          <Grid item xs={12} style={{marginTop:'40px'}}>
            <ColorButton variant="contained" onSubmit={onSubmit} >수정</ColorButton>
            <Button variant="contained" style={{margin: '10px'}} >취소</Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  )
}

export default Profile;
