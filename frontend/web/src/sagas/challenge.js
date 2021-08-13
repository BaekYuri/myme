import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from 'axios'
import {
  ADD_CHALLENGE_REQUEST,
  ADD_CHALLENGE_SUCCESS,
  ADD_CHALLENGE_FAILURE,
  LOAD_CHALLENGES_REQUEST,
  LOAD_CHALLENGES_SUCCESS,
  LOAD_CHALLENGES_FAILURE,
  LOAD_MY_CHALLENGES_REQUEST,
  LOAD_MY_CHALLENGES_SUCCESS,
  LOAD_MY_CHALLENGES_FAILURE,
  LOAD_MY_CREATE_CHALLENGES_REQUEST,
  LOAD_MY_CREATE_CHALLENGES_SUCCESS,
  LOAD_MY_CREATE_CHALLENGES_FAILURE,
  UPLOAD_CHALLENGE_IMAGE_REQUEST,
  UPLOAD_CHALLENGE_IMAGE_SUCCESS,
  UPLOAD_CHALLENGE_IMAGE_FAILURE,
  LOAD_NEW_CHALLENGES_REQUEST,
  LOAD_NEW_CHALLENGES_SUCCESS,
  LOAD_NEW_CHALLENGES_FAILURE,
  LOAD_REC_CHALLENGES_REQUEST,
  LOAD_REC_CHALLENGES_SUCCESS,
  LOAD_REC_CHALLENGES_FAILURE,
  LOAD_CHALLENGE_REQUEST,
  LOAD_CHALLENGE_SUCCESS,
  LOAD_CHALLENGE_FAILURE,
  PARTICIPATE_CHALLENGE_REQUEST,
  PARTICIPATE_CHALLENGE_SUCCESS,
  PARTICIPATE_CHALLENGE_FAILURE,
  CERTIFY_CHALLENGE_REQUEST,
  CERTIFY_CHALLENGE_SUCCESS,
  CERTIFY_CHALLENGE_FAILURE,
} from '../reducers/challenge'

function uploadChallengeImageAPI(data) {
  return axios.post('/challenge/image', data)
}
  
function* uploadChallengeImage(action) {
  try {
    const result = yield call(uploadChallengeImageAPI, action.data)
    console.log(result)
    yield put({
      type: UPLOAD_CHALLENGE_IMAGE_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: UPLOAD_CHALLENGE_IMAGE_FAILURE,
      error: error.response.data
    })
  }
}

function addChallengeAPI(data) {
  return axios.post('/challenge', data)
}
  
function* addChallenge(action) {
  try {
    const result = yield call(addChallengeAPI, action.data)
    console.log(result)
    yield put({
      type: ADD_CHALLENGE_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: ADD_CHALLENGE_FAILURE,
      error: error.response.data
    })
  }
}

function loadChallengesAPI() {
  return axios.get('/challenge')
}

function* loadChallenges() {
  try {
    const result = yield call(loadChallengesAPI)
    console.log(result)
    yield put({
      type: LOAD_CHALLENGES_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOAD_CHALLENGES_FAILURE,
      error: error.response.data
    })
  }
}

function loadChallengeAPI(data) {
  return axios.get(`/challenge/${data}`)
}

function* loadChallenge(action) {
  try {
    const result = yield call(loadChallengeAPI, action.data)
    console.log(result)
    yield put({
      type: LOAD_CHALLENGE_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOAD_CHALLENGE_FAILURE,
      error: error.response.data
    })
  }
}

function loadNewChallengesAPI() {
  return axios.get('/challenge/new')
}

function* loadNewChallenges() {
  try {
    const result = yield call(loadNewChallengesAPI)
    console.log(result)
    yield put({
      type: LOAD_NEW_CHALLENGES_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOAD_NEW_CHALLENGES_FAILURE,
      error: error.response.data
    })
  }
}

function loadRecChallengesAPI() {
  return axios.get('/challenge/recommended')
}

function* loadRecChallenges() {
  try {
    const result = yield call(loadRecChallengesAPI)
    console.log(result)
    yield put({
      type: LOAD_REC_CHALLENGES_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOAD_REC_CHALLENGES_FAILURE,
      error: error.response.data
    })
  }
}

// 내가 참여하고 있는 챌린지 목록 불러오기
function loadMyChallengesAPI() {
  return axios.get('/challengeParticipation')
}

function* loadMyChallenges() {
  try {
    const result = yield call(loadMyChallengesAPI)
    yield put({
      type: LOAD_MY_CHALLENGES_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOAD_MY_CHALLENGES_FAILURE,
      error: error.response.data
    })
  }
}

function loadMyCreateChallengesAPI() {
  return axios.get('/challenge/mychallenge')
}

function* loadMyCreateChallenges() {
  try {
    const result = yield call(loadMyCreateChallengesAPI)
    yield put({
      type: LOAD_MY_CREATE_CHALLENGES_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOAD_MY_CREATE_CHALLENGES_FAILURE,
      error: error.response.data
    })
  }
}

function participateChallengeAPI(data) {
  return axios.post('/challengeParticipation', data)
}

function* participateChallenge(action) {
  try {
    const result = yield call(participateChallengeAPI, action.data)
    yield put({
      type: PARTICIPATE_CHALLENGE_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: PARTICIPATE_CHALLENGE_FAILURE,
      error: error.response.data
    })
  }
}

function certifyChallengeAPI(data) {
  return axios.post(`/challengeParticipation/${data.challengeId}`, data)
}

function* certifyChallenge(action) {
  try {
    const result = yield call(certifyChallengeAPI, action.data)
    yield put({
      type: CERTIFY_CHALLENGE_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: CERTIFY_CHALLENGE_FAILURE,
      error: error.response.data
    })
  }
}

function* watchUploadChallengeImage() {
  yield takeLatest(UPLOAD_CHALLENGE_IMAGE_REQUEST, uploadChallengeImage)
}

function* watchAddChallenge() {
  yield takeLatest(ADD_CHALLENGE_REQUEST, addChallenge)
}

function* watchLoadChallenges() {
  yield takeLatest(LOAD_CHALLENGES_REQUEST, loadChallenges)
}

function* watchLoadChallenge() {
  yield takeLatest(LOAD_CHALLENGE_REQUEST, loadChallenge)
}

function* watchLoadNewChallenges() {
  yield takeLatest(LOAD_NEW_CHALLENGES_REQUEST, loadNewChallenges)
}

function* watchLoadRecChallenges() {
  yield takeLatest(LOAD_REC_CHALLENGES_REQUEST, loadRecChallenges)
}

function* watchLoadMyChallenges() {
  yield takeLatest(LOAD_MY_CHALLENGES_REQUEST, loadMyChallenges)
}

function* watchLoadMyCreateChallenges() {
  yield takeLatest(LOAD_MY_CREATE_CHALLENGES_REQUEST, loadMyCreateChallenges)
}

function* watchParticipateChallenge() {
  yield takeLatest(PARTICIPATE_CHALLENGE_REQUEST, participateChallenge)
}

function* watchCertifyChallenge() {
  yield takeLatest(CERTIFY_CHALLENGE_REQUEST, certifyChallenge)
}

export default function* challengeSaga() {
  yield all([
    fork(watchUploadChallengeImage),
    fork(watchAddChallenge),
    fork(watchLoadChallenges),
    fork(watchLoadChallenge),
    fork(watchLoadNewChallenges),
    fork(watchLoadRecChallenges),
    fork(watchLoadMyChallenges),
    fork(watchLoadMyCreateChallenges),
    fork(watchParticipateChallenge),
    fork(watchCertifyChallenge)
  ])
}