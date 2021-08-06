import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from 'axios'
import {
  ADD_ROUTINE_REQUEST,
  ADD_ROUTINE_SUCCESS,
  ADD_ROUTINE_FAILURE,
  LOAD_MY_ROUTINES_REQUEST,
  LOAD_MY_ROUTINES_SUCCESS,
  LOAD_MY_ROUTINES_FAILURE,
  ADD_HABIT_REQUEST,
  ADD_HABIT_SUCCESS,
  ADD_HABIT_FAILURE,
  LOAD_MY_HABITS_REQUEST,
  LOAD_MY_HABITS_SUCCESS,
  LOAD_MY_HABITS_FAILURE,
  ADD_ROUTINIZED_HABIT_REQUEST,
  ADD_ROUTINIZED_HABIT_SUCCESS,
  ADD_ROUTINIZED_HABIT_FAILURE,
  LOAD_ROUTINIZED_HABIT_SUCCESS,
  LOAD_ROUTINIZED_HABIT_REQUEST,
  LOAD_ROUTINIZED_HABIT_FAILURE
} from '../reducers/routine'

function addRoutineAPI(data) {
  console.log('요청함!')
  return axios.post('/routine', data)
}

function* addRoutine(action) {
  try {
    const result = yield call(addRoutineAPI, action.data)
    console.log(result)
    yield put({
      type: ADD_ROUTINE_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: ADD_ROUTINE_FAILURE,
      error: error.response.data
    })
  }
}

function loadRoutinesAPI() {
  console.log('요청함!')
  return axios.get('/routine')
}

function* loadRoutines() {
  try {
    const result = yield call(loadRoutinesAPI)
    console.log(result)
    yield put({
      type: LOAD_MY_ROUTINES_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOAD_MY_ROUTINES_FAILURE,
      error: error.response.data
    })
  }
}

function loadHabitsAPI(){
  console.log('습관 로드')
  return axios.get('/habit')
}

function* loadHabits(){
  try{
    const result = yield call(loadHabitsAPI)
    console.log(result)
    yield put({
      type: LOAD_MY_HABITS_SUCCESS,
      data: result.data
    })
  }catch(error){
    yield put({
      type: LOAD_MY_HABITS_FAILURE,
      error: error.response.data
    })
  }
}

function addHabitAPI(data) {
  console.log('습관 등록 요청')
  return axios.post('/habit', data)
}

function* addHabit(action) {
  try {
    const result = yield call(addHabitAPI, action.data)
    console.log(result)
    yield put({
      type: ADD_HABIT_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: ADD_HABIT_FAILURE,
      error: error.response.data
    })
  }
}

function addRoutinizedHabitAPI(data, id) {
  console.log('루틴 습관 등록 요청')
  return axios.post('/routinizedHabit/'+id, data)
}

function* addRoutinizedHabit(action) {
  try {
    const result = yield call(addRoutinizedHabitAPI, action.data, action.id)
    console.log(result)
    yield put({
      type: ADD_ROUTINIZED_HABIT_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: ADD_ROUTINIZED_HABIT_FAILURE,
      error: error.response.data
    })
  }
}

function loadRoutinizedHabitAPI(data, id){
  console.log('습관 로드')
  return axios.get('/routinizedHabit'+id)
}

function* loadRoutinizedHabit(){
  try{
    const result = yield call(loadRoutinizedHabitAPI)
    console.log(result)
    yield put({
      type: LOAD_ROUTINIZED_HABIT_SUCCESS,
      data: result.data
    })
  }catch(error){
    yield put({
      type: LOAD_ROUTINIZED_HABIT_FAILURE,
      error: error.response.data
    })
  }
}

function* watchAddRoutine() {
  yield takeLatest(ADD_ROUTINE_REQUEST, addRoutine)
}

function* watchLoadRoutines() {
  yield takeLatest(LOAD_MY_ROUTINES_REQUEST, loadRoutines)
}

function* watchLoadHabits(){
  yield takeLatest(LOAD_MY_HABITS_REQUEST, loadHabits)
}

function* watchAddHabit() {
  yield takeLatest(ADD_HABIT_REQUEST, addHabit)
}

function* watchAddRoutinizedHabit() {
  yield takeLatest(ADD_ROUTINIZED_HABIT_REQUEST, addRoutinizedHabit)
}

function* watchLoadRoutinizedHabit() {
  yield takeLatest(LOAD_ROUTINIZED_HABIT_REQUEST, loadRoutinizedHabit)
}

export default function* routineSaga() {
  yield all([
    fork(watchAddRoutine),
    fork(watchLoadRoutines),
    fork(watchLoadHabits),
    fork(watchAddHabit),
    fork(watchAddRoutinizedHabit),
    // fork(watchLoadRoutinizedHabit)
  ])
}