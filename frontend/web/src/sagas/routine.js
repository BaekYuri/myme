import { all, fork, put, takeLatest, call, take, select } from "redux-saga/effects";
import axios from 'axios'
import {
  ADD_ROUTINE_REQUEST,
  ADD_ROUTINE_SUCCESS,
  ADD_ROUTINE_FAILURE,
  LOAD_MY_ROUTINES_REQUEST,
  LOAD_MY_ROUTINES_SUCCESS,
  LOAD_MY_ROUTINES_FAILURE,
  DELETE_ROUTINE_REQUEST,
  DELETE_ROUTINE_SUCCESS,
  DELETE_ROUTINE_FAILURE,
  ADD_ROUTINIZED_HABIT_REQUEST,
  ADD_ROUTINIZED_HABIT_SUCCESS,
  ADD_ROUTINIZED_HABIT_FAILURE,
  DELETE_ROUTINIZED_HABIT_REQUEST,
  DELETE_ROUTINIZED_HABIT_SUCCESS,
  DELETE_ROUTINIZED_HABIT_FAILURE,
  SET_ORDER_REQUEST,
  SET_ORDER_SUCCESS,
  SET_ORDER_FAILURE,
  MODIFY_ROUTINE_REQUEST,
  MODIFY_ROUTINE_SUCCESS,
  MODIFY_ROUTINE_FAILURE
} from '../reducers/routine'
import { RestoreOutlined } from "@material-ui/icons";


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

function deleteRoutineAPI(id){
  console.log('루틴 삭제')
  return axios.delete('/routine/'+id)
}
function* deleteRoutine(action){
  try{
    const result = yield call(deleteRoutineAPI, action.id)
    yield put({
      type: DELETE_ROUTINE_SUCCESS,
      idx: action.idx
    })
  }catch(error){
    yield put({
      type: DELETE_ROUTINE_FAILURE,
      error: error.response.data
    })
  }
}

function modifyRoutineAPI(data, id){
  console.log('루틴 수정')
  return axios.put('/routine/'+id, data)
}
function* modifyRoutine(action){
  try{
    const result = yield call(modifyRoutineAPI, action.data, action.id)
    yield put({
      type: MODIFY_ROUTINE_SUCCESS,
      data: result.data
    })
  }catch(error){
    yield put({
      type: MODIFY_ROUTINE_FAILURE,
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
    yield put({
      type: ADD_ROUTINIZED_HABIT_SUCCESS,
      data: result.data,
      name : action.name
    })
    console.log(result);
  } catch (error) {
    yield put({
      type: ADD_ROUTINIZED_HABIT_FAILURE,
      error: error.response.data
    })
  }
}

function deleteRoutinizedHabitAPI(id){
  console.log('루틴 습관 삭제 요청')
  return axios.delete('/routinizedHabit/'+id)
}
function* deleteRoutinizedHabit(action){
  try {
    const result = yield call(deleteRoutinizedHabitAPI, action.id)
    yield put({
      type: DELETE_ROUTINIZED_HABIT_SUCCESS,
      routineIdx: action.routineIdx , 
      routineItemIdx: action.routineItemIdx
    })
    console.log(result);
  } catch (error) {
    yield put({
      type: DELETE_ROUTINIZED_HABIT_FAILURE,
    })
  }
}

function setOrderAPI(habits, routineId){
  console.log('순서 저장')
  return axios.put('/routinizedHabit/order', {habits})
}

function* setOrder(action){
  try{
    const result = yield call(setOrderAPI,action.habits, action.routineId)
    yield put({
      type: SET_ORDER_SUCCESS,
      data: result.data,
      idx : action.idx
    })
  }catch(error){
    yield put({
      type: SET_ORDER_FAILURE,
      error: error
    })
  }

}

function* watchAddRoutine() {
  yield takeLatest(ADD_ROUTINE_REQUEST, addRoutine)
}

function* watchLoadRoutines() {
  yield takeLatest(LOAD_MY_ROUTINES_REQUEST, loadRoutines)
}

function* watchDeleteRoutine(){
  yield takeLatest(DELETE_ROUTINE_REQUEST, deleteRoutine)
}

function* watchModifyRoutine(){
  yield takeLatest(MODIFY_ROUTINE_REQUEST, modifyRoutine)
}
function* watchAddRoutinizedHabit() {
  yield takeLatest(ADD_ROUTINIZED_HABIT_REQUEST, addRoutinizedHabit)
}

function* watchDeleteRoutinizedHabit(){
  yield takeLatest(DELETE_ROUTINIZED_HABIT_REQUEST, deleteRoutinizedHabit)
}

function* watchSetOrder(){
  yield takeLatest(SET_ORDER_REQUEST, setOrder)
}


export default function* routineSaga() {
  yield all([
    fork(watchAddRoutine),
    fork(watchLoadRoutines),
    fork(watchDeleteRoutine),
    fork(watchModifyRoutine),
    fork(watchAddRoutinizedHabit),
    fork(watchDeleteRoutinizedHabit),
    fork(watchSetOrder)
  ])
}