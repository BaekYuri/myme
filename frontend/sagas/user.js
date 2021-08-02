import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios'
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
} from '../reducers/user'

function loadMyInfoAPI() {
  return axios.get('/user')
}

function* loadMyInfo(action) {
  try {
      const result = yield call(loadMyInfoAPI)
      yield put({
          type: LOAD_MY_INFO_SUCCESS,
          data: result.data
      })
  } catch (err) {
      yield put({
          type: LOAD_MY_INFO_FAILURE,
          error: err.response.data
      })
  }
}

function logInAPI(data) {
  return axios.post('/user/login', data)
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data)
    console.log(result)
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
      error: error.response.data
    })
  }
}

function logOutAPI() {
  return axios.post('/user/logout')
}

function* logOut() {
  try {
    const result = yield call(logOutAPI)
    console.log(result)
    yield put({
      type: LOG_OUT_SUCCESS
    })
  } catch (error) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: error.response.data
    })
  }
}

function signUpAPI(data) {
  return axios.post('/user/join', data)
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data)
    console.log(result)
    yield put({
      type: SIGN_UP_SUCCESS,
    })
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: error.response.data
    })
  }
}

function* watchLogIn() {
  console.log('LOGIN')
  yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut)
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp)
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo)
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchLoadMyInfo),
  ])
}