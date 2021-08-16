import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Grid,
  IconButton,
  Typography,
  Divider,
  TextField,
  Box,
  Container,
} from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_SIGN_UP_MODE, loginRequestAction } from '../../../reducers/user';

const regExpEm = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const regExpPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;

const LoginForm = () => {
  let history = useHistory()
  const dispatch = useDispatch()
  const { isSignUp } = useSelector((state) => state.user)

  const [email, setEmail] = useState('')
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [email])

  const [password, setPassword] = useState('')
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [password])

  const [disabled, setDisabled] = useState(true)

  const onLogin = useCallback(() => {
    if (!password || !email) {
      alert('You need both email and password.');
      return;
    }

    if (!regExpEm.test(email)) {
      alert('이메일 형식이 맞지 않습니다.');
      return;
    }

    if (!regExpPw.test(password)) {
      alert('비밀번호는 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력하세요.')
      return
    }

    dispatch(loginRequestAction({email, password}))
  }, [email, password])


  const onChangeSignupMode = useCallback(() => {
    dispatch({
      type: CHANGE_SIGN_UP_MODE
    })
  }, []) 


  useEffect(() => {
    if (email !== '' && password !== '') {
      setDisabled(false);
    }

    if (email === '' || password === '') {
      setDisabled(true);
    }
  }, [email, password]);

  return (
    <Container maxWidth="sm" style={{margin: '0 20px', padding: '20px', background: '#ffffff', border: 'solid 1px #eeeeee', borderRadius: '10px', boxShadow: '2px 2px 2px #eeeeee'}}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        className="grid"
      >
        <Grid>
          <AccountBoxIcon fontSize="large" style={{ color: '#89DDBF' }} />
        </Grid>
        <Grid item xs={11}>
          <Typography>
            로그인
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"
            label="이메일"
            className="text-field"
            defaultValue={email}
            variant="outlined"
            style={{background: 'white'}}
            fullWidth={true}
            onChange={onChangeEmail}
            // onFocus={event => {
            //   setIsShowKeyborad(true);
            // }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-password-input"
            label="비밀번호"
            className="text-field"
            type="password"
            autoComplete="current-password"
            defaultValue={password}
            variant="outlined"
            style={{background: 'white'}}
            fullWidth={true}
            onChange={onChangePassword}
            // onFocus={event => {
            //   setIsShowKeyborad(true);
            // }}
          />
        </Grid>
        <Grid item xs={12} className="grid-item">
          <Button
            variant="contained"
            disabled={disabled}
            fullWidth={true}
            color="primary"
            onClick={onLogin}
            className="grid-item-button"
          >
            login
          </Button>
        </Grid>
        <Grid item xs={12} className="grid-item">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={5}>
              <Divider />
            </Grid>

            <Grid item xs={2}>
              <Typography align="center" className="grid-item-typography1">
                or
              </Typography>
            </Grid>

            <Grid item xs={5}>
              <Divider />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} >
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <img src="/images/naver.png" alt="" width="40px"/>
          </Grid>
        </Grid>
        <Grid item xs={3} >
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <img src="/images/facebook.png" alt="" width="40px" />
          </Grid>
        </Grid>
        <Grid item xs={3} >
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <img src="/images/google.png" alt="" width="40px" />
          </Grid>
        </Grid>
        <Grid item xs={3} >
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <img src="/images/kakao.png" alt="" width="40px" />
          </Grid>
        </Grid>

        <Grid item xs={6} >
          <div style={{textAlign: 'center'}}>
            계정이 없으신가요?
          </div>
        </Grid>

        <Grid item xs={6} >
          <Button
            fullWidth={true}
            onClick={onChangeSignupMode}
            className="grid2-item-button"
          >
            회원가입
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginForm