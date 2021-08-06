import { all, fork, put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import {
  LOAD_MY_HABITS_REQUEST,
  LOAD_MY_HABITS_SUCCESS,
  LOAD_MY_HABITS_FAILURE,
  ADD_MY_HABIT_REQUEST,
  ADD_MY_HABIT_SUCCESS,
  ADD_MY_HABIT_FAILURE,
} from '../reducers/habit'

function loadMyHabitsAPI() {
  return axios.get('/habit')
}

function* loadMyHabits() {
  try {
    const result = yield call(loadMyHabitsAPI)
    yield put({
      type: LOAD_MY_HABITS_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOAD_MY_HABITS_FAILURE,
      error: error.response.data
    })
  }
}

function addMyHabitAPI(data) {
  return axios.post('/habit', data)
}

function* addMyHabit(action) {
  try {
    const result = yield call(addMyHabitAPI, action.data)
    yield put({
      type: ADD_MY_HABIT_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: ADD_MY_HABIT_FAILURE,
      error: error.response.data
    })
  }
}

function* watchLoadMyHabits() {
  yield takeLatest(LOAD_MY_HABITS_REQUEST, loadMyHabits)
}

function* watchAddMyHabit() {
  yield takeLatest(ADD_MY_HABIT_REQUEST, addMyHabit)
}

export default function* habitSaga() {
  yield all([
    fork(watchLoadMyHabits),
    fork(watchAddMyHabit),
  ])
}