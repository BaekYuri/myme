import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from 'axios'
import {
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,
  UPDATE_EVENT_REQUEST,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAILURE,
  LOAD_EVENT_REQUEST,
  LOAD_EVENT_SUCCESS,
  LOAD_EVENT_FAILURE,
} from '../reducers/calendar'

function createEventAPI(data){
    console.log('create event요청!')
    return axios.post('/schedule', data)
}
function* createEvent(action){
    try{
        const result = yield call(createEventAPI, action.data)
        console.log(result)
        yield put({
            type: CREATE_EVENT_SUCCESS,
            data: result.data
        })
    }catch(error){
        yield put({
            type: CREATE_EVENT_FAILURE,
            error: error.response.data
        })
    }

}

function deleteEventAPI(id){
    console.log('delete event 요청!')
    return axios.delete('/schedule/'+id)
}
function* deleteEvent(action){
    try{
        const result = yield call(deleteEventAPI, action.id)
        yield put({
            type: DELETE_EVENT_SUCCESS,
            idx: action.idx
        })
    } catch(error){
        yield put({
            type: DELETE_EVENT_FAILURE,
            error: error.response.data
        })
    }
}

function updateEventAPI(data,id){
    console.log('update event 요청!')
    return axios.put('/schedule/'+id, data)
}
function* updateEvent(action){
    try{
        const result = yield call(updateEventAPI, action.data, action.id)
        yield put({
            type: UPDATE_EVENT_SUCCESS,
            data: result.data
        })
    } catch(error){
        yield put({
            type: UPDATE_EVENT_FAILURE,
            error: error.response.data
        })
    }
}

function loadEventAPI(){
    console.log('load event 요청!')
    return axios.get('/schedule')
}
function* loadEvent(){
    try{
        const result = yield call(loadEventAPI)
        yield put({
            type: LOAD_EVENT_SUCCESS,
            data: result.data
        })
    } catch(error){
        yield put({
            type: LOAD_EVENT_FAILURE,
            error: error.response.data
        })
    }
}

function* watchCreateEvent(){
  yield takeLatest(CREATE_EVENT_REQUEST, createEvent)
}

function* watchDeleteEvent(){
  yield takeLatest(DELETE_EVENT_REQUEST, deleteEvent)
}

function* watchUpdateEvent(){
  yield takeLatest(UPDATE_EVENT_REQUEST, updateEvent)
}

function* watchLoadEvent(){
  yield takeLatest(LOAD_EVENT_REQUEST, loadEvent)
}
export default function* challengeSaga() {
    yield all([
      fork(watchCreateEvent),
      fork(watchDeleteEvent),
      fork(watchUpdateEvent),
      fork(watchLoadEvent)
    ])
  }