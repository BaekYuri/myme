import { all, fork, put, takeLatest, call, select } from 'redux-saga/effects'
import axios from 'axios'
import {
  LOAD_MY_HABITS_REQUEST,
  LOAD_MY_HABITS_SUCCESS,
  LOAD_MY_HABITS_FAILURE,

  ADD_MY_HABIT_REQUEST,
  ADD_MY_HABIT_SUCCESS,
  ADD_MY_HABIT_FAILURE,

  ADD_JUST_HABIT_REQUEST,
  ADD_JUST_HABIT_SUCCESS,
  ADD_JUST_HABIT_FAILURE,

  MODIFY_MY_HABIT_REQUEST,
  MODIFY_MY_HABIT_SUCCESS,
  MODIFY_MY_HABIT_FAILURE,

  DELETE_MY_HABIT_REQUEST,
  DELETE_MY_HABIT_SUCCESS,
  DELETE_MY_HABIT_FAILURE
} from '../reducers/habit'
import {
  ADD_ROUTINIZED_HABIT_SUCCESS,
  ADD_ROUTINIZED_HABIT_FAILURE,
} from '../reducers/routine'
const choosedRoutine = state => {
  return state.routine.choosedRoutine;
}
const myRoutines = state => {
  return state.routine.myRoutines;
}
function loadHabitsAPI(){
  console.log('습관 로드')
  return axios.get('/habit')
}
function addRoutinizedHabitAPI(data, id) {
  console.log('루틴 습관 등록 요청')
  return axios.post('/routinizedHabit/'+id, data)
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
    const resultHabit = yield call(addHabitAPI, action.data)
    const choosed = yield select(choosedRoutine)
    const routines = yield select(myRoutines)
    yield put({
      type: ADD_MY_HABIT_SUCCESS,
      data: resultHabit.data
    })
    try{
      const resultRoutinizedHabit = yield call(addRoutinizedHabitAPI, {habitId:resultHabit.data.id, "order":routines[choosed].RoutinizedHabits.length, "achieve_count":0 }, routines[choosed].id)
      yield put({
        type: ADD_ROUTINIZED_HABIT_SUCCESS,
        data: resultRoutinizedHabit.data,
        name : resultHabit.data.name
      })
    }catch(error){
      yield put({
        type: ADD_ROUTINIZED_HABIT_FAILURE,
        error: error.response.data
      })
    }
  } catch (error) {
    yield put({
      type: ADD_MY_HABIT_FAILURE,
      error: error.response.data
    })
    
  }
}

function* addJustHabit(action) {
  try {
    const resultHabit = yield call(addHabitAPI, action.data)
    yield put({
      type: ADD_JUST_HABIT_SUCCESS,
      data: resultHabit.data
    })
  } catch (error) {
    yield put({
      type: ADD_JUST_HABIT_FAILURE,
      error: error.response.data
    })
    
  }
}

function modifyMyHabitAPI(data, id){
  console.log('습관 수정 요청')
  return axios.put('/habit/'+id, data)
}

function* modifyMyHabit(action){
  try{
    const result = yield call(modifyMyHabitAPI, action.data, action.id)
    yield put({
      type: MODIFY_MY_HABIT_SUCCESS,
      data: result.data
    })
  }catch(error){
    yield put({
      type: MODIFY_MY_HABIT_FAILURE,
      error
    })
  }
}

function deleteMyHabitAPI(id){
  console.log('습관 삭제 요청')
  return axios.delete('/habit/'+id)
}

function* deleteMyHabit(action){
  try{
    yield call(deleteMyHabitAPI, action.id)
    yield put({
      type: DELETE_MY_HABIT_SUCCESS,
      idx: action.idx
    })
  }catch(error){
    yield put({
      type: DELETE_MY_HABIT_FAILURE,
      error
    })
  }
}

function* watchLoadMyHabits() {
  yield takeLatest(LOAD_MY_HABITS_REQUEST, loadHabits)
}

function* watchAddMyHabit() {
  yield takeLatest(ADD_MY_HABIT_REQUEST, addHabit)
}

function* watchAddJustHabit(){
  yield takeLatest(ADD_JUST_HABIT_REQUEST, addJustHabit)
}

function* watchModifyMyHabit(){
  yield takeLatest(MODIFY_MY_HABIT_REQUEST, modifyMyHabit)
}

function* watchDeleteMyHabit(){
  yield takeLatest(DELETE_MY_HABIT_REQUEST, deleteMyHabit)
}

export default function* habitSaga() {
  yield all([
    fork(watchLoadMyHabits),
    fork(watchAddMyHabit),
    fork(watchAddJustHabit),
    fork(watchModifyMyHabit),
    fork(watchDeleteMyHabit)
  ])
}