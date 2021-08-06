import produce from 'immer'

const initialState = {
  myRoutines: [],
  myHabits:[],

  addRoutineLoading: false,
  addRoutineDone: false,
  addRoutineError: null,

  loadMyRoutinesLoading: false,
  loadMyRoutinesDone: false,
  loadMyRoutinesError: null,

  addHabitLoading: false,
  addHabitDone: false,
  addHabitError: null,

  loadMyHabitsLoading: false,
  loadMyHabitsDone: false,
  loadMyHabitsError: null,

  addRoutinizedHabitLoading: false,
  addRoutinizedHabitDone: false,
  addRoutinizedHabitError: null,

  loadRoutinizedHabitsLoading: false,
  loadRoutinizedHabitsDone: false,
  loadRoutinizedHabitsError: null,

  choosedRoutine : -1,
  createRoutineInfo : {
      "rid" : -1,
      "name" : '',
      "alarm" : false,
      "day_of_week" : [{day : "월", "activeDayOfWeek" : false,"time": ""},{day : "월", "activeDayOfWeek" : false,"time": ""},{day : "월", "activeDayOfWeek" : false,"time": ""},{day : "월", "activeDayOfWeek" : false,"time": ""},{day : "월", "activeDayOfWeek" : false,"time": ""},{day : "월", "activeDayOfWeek" : false,"time": ""},{day : "월", "activeDayOfWeek" : false,"time": ""}],
      "routinizedHabit":[]    
  },
}

export const ADD_ROUTINE_REQUEST = 'ADD_ROUTINE_REQUEST'
export const ADD_ROUTINE_SUCCESS = 'ADD_ROUTINE_SUCCESS'
export const ADD_ROUTINE_FAILURE = 'ADD_ROUTINE_FAILURE'

export const LOAD_MY_ROUTINES_REQUEST = 'LOAD_MY_ROUTINES_REQUEST'
export const LOAD_MY_ROUTINES_SUCCESS = 'LOAD_MY_ROUTINES_SUCCESS'
export const LOAD_MY_ROUTINES_FAILURE = 'LOAD_MY_ROUTINES_FAILURE'

export const ADD_HABIT_REQUEST = 'ADD_HABIT_REQUEST'
export const ADD_HABIT_SUCCESS = 'ADD_HABIT_SUCCESS'
export const ADD_HABIT_FAILURE = 'ADD_HABIT_FAILURE'

export const LOAD_MY_HABITS_REQUEST = 'LOAD_MY_HABITS_REQUEST'
export const LOAD_MY_HABITS_SUCCESS = 'LOAD_MY_HABITS_SUCCESS'
export const LOAD_MY_HABITS_FAILURE = 'LOAD_MY_HABITS_FAILURE'

export const ADD_ROUTINIZED_HABIT_REQUEST = 'ADD_ROUTINIZED_HABIT_REQUEST'
export const ADD_ROUTINIZED_HABIT_SUCCESS = 'ADD_ROUTINIZED_HABIT_SUCCESS'
export const ADD_ROUTINIZED_HABIT_FAILURE = 'ADD_ROUTINIZED_HABIT_FAILURE'

export const LOAD_ROUTINIZED_HABIT_REQUEST = 'LOAD_ROUTINIZED_HABITS_REQUEST'
export const LOAD_ROUTINIZED_HABIT_SUCCESS = 'LOAD_ROUTINIZED_HABITS_SUCCESS'
export const LOAD_ROUTINIZED_HABIT_FAILURE = 'LOAD_ROUTINIZED_HABITS_FAILURE'

export const CLEAR_MY_ROUTINES = 'CLEAR_MY_ROUTINES'


export const SET_ORDER = 'routine/setOrder';

export const SET_CHOOSED_ROUTINE='routine/setChoosedRoutine';
export const MODIFY_ROUTINE='routine/modifyRoutine';
export const DELETE_ROUTINE='routine/deleteRoutine';
export const ADD_ROUTINE_ITEM='routine/addRoutineItem';
export const DELETE_ROUTINE_ITEM='routine/deleteRoutineItem';
export const SET_MODAL_INPUT='routine/setModalInput';
export const SET_MODAL_INPUT_NAME='routine/setModalInputName';
export const SET_MODAL_INPUT_ALARM='routine/setModalInputAlarm';
export const SET_MODAL_INPUT_ACTIVE_DAY='routine/setModalInputActiveDay';


const sortHabit = (obj) => {
  for (let i=0; i<obj.length; i++) {
    obj[i].routinizedHabit.sort((a,b) => { return a.order-b.order })
  }
}

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case CLEAR_MY_ROUTINES:
      draft.myRoutines = []
      break
    case ADD_ROUTINE_REQUEST:
      draft.addRoutineLoading = true
      draft.addRoutineDone = false
      draft.addRoutineError = null
      break
    case ADD_ROUTINE_SUCCESS:
      draft.addRoutineLoading = false
      draft.addRoutineDone = true
      draft.myRoutines = draft.myRoutines.concat(action.data)
      break
    case ADD_ROUTINE_FAILURE:
      draft.addRoutineLoading = false
      draft.addRoutineError = action.error
      break
    case LOAD_MY_ROUTINES_REQUEST:
      draft.loadMyRoutinesLoading = true
      draft.loadMyRoutinesDone = false
      draft.loadMyRoutinesError = null
      break
    case LOAD_MY_ROUTINES_SUCCESS:
      draft.loadMyRoutinesLoading = false
      draft.loadMyRoutinesDone = true
      draft.myRoutines = []
      draft.myRoutines = draft.myRoutines.concat(action.data)
      break
    case LOAD_MY_ROUTINES_FAILURE:
      draft.loadMyRoutinesLoading = false
      draft.loadMyRoutinesError = action.error
      break
    case ADD_HABIT_REQUEST:
      draft.addHabitLoading = true
      draft.addHabitDone = false
      draft.addHabitError = null
      break
    case ADD_HABIT_SUCCESS:
      draft.addHabitLoading = false
      draft.addHabitDone = true
      draft.myHabits = draft.myHabits.concat(action.data)
      break
    case ADD_HABIT_FAILURE:
      draft.addHabitLoading = false
      draft.addHabitError = action.error
      break
    case LOAD_MY_HABITS_REQUEST:
      draft.loadMyHabitsLoading = true
      draft.loadMyHabitsDone = false
      draft.loadMyHabitsError = null
      break
    case LOAD_MY_HABITS_SUCCESS:
      draft.loadMyHabitsLoading = false
      draft.loadMyHabitsDone = true
      draft.myHabits = []
      draft.myHabits = draft.myHabits.concat(action.data)
      break
    case LOAD_MY_HABITS_FAILURE:
      draft.loadMyHabitsLoading = false
      draft.loadMyHabitsError = action.error
      break
    case ADD_ROUTINIZED_HABIT_REQUEST:
      draft.addRoutinizedHabitLoading = true
      draft.addRoutinizedHabitDone = false
      draft.addRoutinizedHabitError = null
      break
    case ADD_ROUTINIZED_HABIT_SUCCESS:
      draft.addRoutinizedHabitLoading = false
      draft.addRoutinizedHabitDone = true
      break
    case ADD_ROUTINIZED_HABIT_FAILURE:
      draft.addRoutinizedHabitLoading = false
      draft.addRoutinizedHabitError = action.error
      break
    case LOAD_ROUTINIZED_HABIT_REQUEST:
      draft.loadRoutinizedRoutinesLoading = true
      draft.loadRoutinizedRoutinesDone = false
      draft.loadRoutinizedRoutinesError = null
      break
    case LOAD_ROUTINIZED_HABIT_SUCCESS:
      draft.loadRoutinizedRoutinesLoading = false
      draft.loadRoutinizedRoutinesDone = true
      // draft.myRoutines = []
      // draft.myRoutines = draft.myRoutines.concat(action.data)
      break
    case LOAD_ROUTINIZED_HABIT_FAILURE:
      draft.loadRoutinizedRoutinesLoading = false
      draft.loadRoutinizedRoutinesError = action.error
      break
    case SET_CHOOSED_ROUTINE:
      draft.choosedRoutine = action.idx
      break
    case MODIFY_ROUTINE:
      draft.myRoutines[draft.choosedRoutine] = draft.createRoutineInfo
      break
    case DELETE_ROUTINE:
      draft.myRoutines.splice(draft.choosedRoutine, draft.choosedRoutine+1)
      break
    case ADD_ROUTINE_ITEM:
      //임의로 rhid, hid 설정. 나중에 꼭 바꿔야함 !!
      // console.log(draft.myRoutines[draft.choosedRoutine].routinizedHabit);
      // action.habit.rhid = draft.myRoutines[draft.choosedRoutine].routinizedHabit
      // action.habit.hid = action.habit.rhid
      // action.habit.order = action.habit.rhid
      draft.myRoutines[draft.choosedRoutine].routinizedHabit.push(action.habit)
      break
    case DELETE_ROUTINE_ITEM:
      draft.myRoutines[action.routineIdx].routinizedHabit.splice(action.habitIdx, action.habitIdx+1)
      break
    case SET_MODAL_INPUT:
      if(draft.choosedRoutine ==-1){
        draft.createRoutineInfo={
          "rid" : -1,
          "name" : '',
          "alarm" : false,
          "day_of_week" : [{day : "월", "activeDayOfWeek" : false,"time": ""},{day : "월", "activeDayOfWeek" : false,"time": ""},{day : "월", "activeDayOfWeek" : false,"time": ""},{day : "월", "activeDayOfWeek" : false,"time": ""},{day : "월", "activeDayOfWeek" : false,"time": ""},{day : "월", "activeDayOfWeek" : false,"time": ""},{day : "월", "activeDayOfWeek" : false,"time": ""}],
          "routinizedHabit":[]    
        }
      }else{
        draft.createRoutineInfo = draft.myRoutines[draft.choosedRoutine];
        draft.createRoutineInfo = {
          "rid" : draft.myRoutines[draft.choosedRoutine].id,
          "name" : draft.myRoutines[draft.choosedRoutine].name,
          "alarm" : draft.myRoutines[draft.choosedRoutine].alarm,
          "day_of_week" : [{day : "월", "activeDayOfWeek" : false,"time": ""},{day : "화", "activeDayOfWeek" : false,"time": ""},{day : "수", "activeDayOfWeek" : false,"time": ""},{day : "목", "activeDayOfWeek" : false,"time": ""},{day : "금", "activeDayOfWeek" : false,"time": ""},{day : "토", "activeDayOfWeek" : false,"time": ""},{day : "일", "activeDayOfWeek" : false,"time": ""}],
          "routinizedHabit":[]    
        }
      }
      break
    case SET_MODAL_INPUT_NAME:
      draft.createRoutineInfo.name = action.name
      break
    case SET_MODAL_INPUT_ALARM:
      draft.createRoutineInfo.alarm = action.checked
      break
    case SET_MODAL_INPUT_ACTIVE_DAY:
      draft.createRoutineInfo.day_of_week[action.idx] = action.activeDay
      break
  }
})

export default reducer