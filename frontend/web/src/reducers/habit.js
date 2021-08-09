import produce from 'immer'

const initialState = {
  myHabits: [],
  loadMyHabitsLoading: false,
  loadMyHabitsDone: false,
  loadMyHabitsError: null,
  addMyHabitLoading: false,
  addMyHabitDone: false,
  addMyHabitError: null,
}

export const LOAD_MY_HABITS_REQUEST = 'LOAD_MY_HABITS_REQUEST'
export const LOAD_MY_HABITS_SUCCESS = 'LOAD_MY_HABITS_SUCCESS'
export const LOAD_MY_HABITS_FAILURE = 'LOAD_MY_HABITS_FAILURE'

export const ADD_MY_HABIT_REQUEST = 'ADD_MY_HABIT_REQUEST'
export const ADD_MY_HABIT_SUCCESS = 'ADD_MY_HABIT_SUCCESS'
export const ADD_MY_HABIT_FAILURE = 'ADD_MY_HABIT_FAILURE'

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case ADD_MY_HABIT_REQUEST:
      draft.addHabitLoading = true
      draft.addHabitDone = false
      draft.addHabitError = null
      break
    case ADD_MY_HABIT_SUCCESS:
      draft.addHabitLoading = false
      draft.addHabitDone = true
      draft.myHabits = draft.myHabits.concat(action.data)
      break
    case ADD_MY_HABIT_FAILURE:
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
  }
})

export default reducer