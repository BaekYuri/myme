import React, { useState, useEffect, useCallback } from 'react';
import {
  Button,
  Grid,
  Typography,
  Divider,
  TextField,
  Checkbox,
} from '@material-ui/core';
import styled from 'styled-components'
import Wrapper from './styles';

import { useDispatch } from 'react-redux';
import { SIGN_UP_REQUEST, CHANGE_SIGN_UP_MODE } from '../../../reducers/user';

const ErrorMessage = styled.div`
    color: red;
`

const SignupForm = () => {
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(true);

  const [name, setName] = useState('')
  const onChangeName = useCallback((e) => {
    setName(e.target.value)
  }, [])

  const [email, setEmail] = useState('')
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [])

  const [nickname, setNickname] = useState('')
  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value)
  }, [])

  const [password, setPassword] = useState('')
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])

  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const onChangePasswordCheck = useCallback((e) => {
      setPasswordCheck(e.target.value)
      setPasswordError(e.target.value !== password)
  }, [password])

  const [address, setAddress] = useState('')
  const onChangeAddress = useCallback((e) => {
    setAddress(e.target.value)
  }, [])

  const [term, setTerm] = useState(false)
  const [termError, setTermError] = useState(false)
  const onChangeTerm = useCallback((e) => {
      setTerm(e.target.checked)
      setTermError(false)
  }, [])

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
        return setPasswordError(true)
    }
    if (!term) {
        return setTermError(true)
    }
    
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { name, email, nickname, password, address }
    })
    dispatch({
      type: CHANGE_SIGN_UP_MODE
    })
  }, [password, passwordCheck, term])

  const onChangeSignupMode = useCallback(() => {
    dispatch({
      type: CHANGE_SIGN_UP_MODE
    })
  }, [])

  useEffect(() => {
    if (name !== '' && email !== '' && nickname !== '' && password !== '' && passwordCheck !== '' && address !== '' && term === true) {
      setDisabled(false);
    }

    if (name === '' || email === '' || nickname === '' || password === '' || passwordCheck === '' || address === '' || term === false) {
      setDisabled(true);
    }
  }, [name, email, nickname, password, passwordCheck, address, term]);

  return (
    <Wrapper>
      <Typography align="center" className="sign-up1">
        가입하고 더 많은 서비스를 누려보세요!
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        style={{ marginLeft: 4 }}
      >
        <Grid item xs={12} className="sign-up-grid-item1">
          <TextField
            required
            id="outlined-required"
            label="이름"
            value={name}
            className="text-field"
            variant="outlined"
            style={{background: 'white'}}
            placeholder="이름"
            fullWidth={true}
            onChange={onChangeName}
          />
        </Grid>
        <Grid item xs={12} className="sign-up-grid">
          <TextField
            required
            id="outlined-required"
            label="이메일"
            type="email"
            value={email}
            className="text-field"
            variant="outlined"
            style={{background: 'white'}}
            placeholder="이메일"
            fullWidth={true}
            onChange={onChangeEmail}
          />
        </Grid>
        <Grid item xs={12} className="sign-up-grid-item1">
          <TextField
            required
            id="outlined-required"
            label="닉네임"
            value={nickname}
            className="text-field"
            variant="outlined"
            style={{background: 'white'}}
            placeholder="닉네임"
            fullWidth={true}
            onChange={onChangeNickname}
          />
        </Grid>
        <Grid item xs={12} className="sign-up-grid-item2">
          <TextField
            required
            id="outlined-password-input"
            label="비밀번호"
            value={password}
            className="textField"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            style={{background: 'white'}}
            placeholder="비밀번호"
            fullWidth={true}
            onChange={onChangePassword}
          />
        </Grid>
        <Grid item xs={12} className="sign-up-grid-item2">
          <TextField
            required
            id="outlined-password-input"
            label="비밀번호 확인"
            value={passwordCheck}
            className="textField"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            style={{background: 'white'}}
            placeholder="비밀번호 확인"
            fullWidth={true}
            onChange={onChangePasswordCheck}
          />
        </Grid>
        {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        <Grid item xs={12} className="sign-up-grid-item1">
          <TextField
            required
            id="outlined-required"
            label="주소"
            value={address}
            className="text-field"
            variant="outlined"
            style={{background: 'white'}}
            placeholder="주소"
            fullWidth={true}
            onChange={onChangeAddress}
          />
        </Grid>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            {'MYME 약관에 동의합니다.'}
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <Grid item xs={12} className="sign-up-grid-item3">
          <Button
            variant="contained"
            disabled={disabled}
            fullWidth={true}
            color="primary"
            onClick={onSubmit}
            style={{
              fontSize: 14,
              fontFamily: 'Noto Sans KR',
              fontWeight: 500,
            }}
          >
            회원가입
          </Button>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          className="sign-up3-grid-item"
        >
          <Grid item xs={5}>
            <Divider />
          </Grid>

          <Grid item xs={2}>
            <Typography
              align="center"
              className="sign-up3-grid-item-typography"
            >
              or
            </Typography>
          </Grid>

          <Grid item xs={5}>
            <Divider />
          </Grid>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <Typography align="center" className="sign-up4-grid-item-typography">
            {'계정이 있으신가요?'}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Button
            fullWidth={true}
            onClick={onChangeSignupMode}
            className="sign-up4-grid-item-button"
          >
            {'login'}
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default SignupForm