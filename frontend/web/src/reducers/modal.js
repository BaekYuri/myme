import produce  from 'immer'

const initialState = {
  routineModal: false,
  createRoutineModal: false,
  modifyHabitModal: false,
  alertModal : false,
  confirmModal : false,
  alertModalMessage : '',
  createEventModal: false,
  alertModalFunction : ()=>{}
}

export const OPEN_ROUTINE_MODAL = 'OPEN_ROUTINE_MODAL'
export const CLOSE_ROUTINE_MODAL = 'CLOSE_ROUTINE_MODAL'
export const TOGGLE_ROUTINE_MODAL = 'TOGGLE_ROUTINE_MODAL'

export const OPEN_CREATE_ROUTINE_MODAL = 'OPEN_CREATE_ROUTINE_MODAL'
export const CLOSE_CREATE_ROUTINE_MODAL = 'CLOSE_CREATE_ROUTINE_MODAL'
export const TOGGLE_CREATE_ROUTINE_MODAL = 'TOGGLE_CREATE_ROUTINE_MODAL'

export const OPEN_MODIFY_HABIT_MODAL = 'OPEN_MODIFY_HABIT_MODAL'
export const CLOSE_MODIFY_HABIT_MODAL = 'CLOSE_MODIFY_HABIT_MODAL'
export const TOGGLE_MODIFY_HABIT_MODAL = 'TOGGLE_MODIFY_HABIT_MODAL'

export const OPEN_ALERT_MODAL = 'OPEN_ALERT_MODAL'
export const CLOSE_ALERT_MODAL = 'CLOSE_ALERT_MODAL'
export const TOGGLE_ALERT_MODAL = 'TOGGLE_ALERT_MODAL'

export const OPEN_CONFIRM_MODAL = 'OPEN_CONFIRM_MODAL'
export const CLOSE_CONFIRM_MODAL = 'CLOSE_CONFIRM_MODAL'
export const TOGGLE_CONFIRM_MODAL = 'TOGGLE_CONFIRM_MODAL'

export const SET_ALERT_MODAL_FUNCTION = 'SET_ALERT_MODAL_FUNCTION'
export const SET_ALERT_MODAL_MESSAGE = 'SET_ALERT_MODAL_MESSAGE'

export const OPEN_CREATE_EVENT_MODAL = 'OPEN_CREATE_EVENT_MODAL'
export const CLOSE_CREATE_EVENT_MODAL = 'CLOSE_CREATE_EVENT_MODAL'
export const TOGGLE_CREATE_EVENT_MODAL = 'TOGGLE_CREATE_EVENT_MODAL'

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch(action.type) {
    case OPEN_ROUTINE_MODAL:
      draft.routineModal = true
      break
    case TOGGLE_ROUTINE_MODAL:
      draft.routineModal = !draft.routineModal
      break
    case CLOSE_ROUTINE_MODAL:
      draft.routineModal = false
      break

    case OPEN_CREATE_ROUTINE_MODAL:
      draft.createRoutineModal = true
      break
    case TOGGLE_CREATE_ROUTINE_MODAL:
      draft.createRoutineModal = !draft.createRoutineModal
      break
    case CLOSE_CREATE_ROUTINE_MODAL:
      draft.createRoutineModal = false
      break
    
    case OPEN_MODIFY_HABIT_MODAL:
      draft.modifyHabitModal = true
      break
    case TOGGLE_MODIFY_HABIT_MODAL:
      draft.modifyHabitModal = !draft.modifyHabitModal
      break
    case CLOSE_MODIFY_HABIT_MODAL:
      draft.modifyHabitModal = false
      break
    
    case OPEN_ALERT_MODAL:
      draft.alertModal = true
      draft.alertModalMessage = action.message
      break
    case TOGGLE_ALERT_MODAL:
      draft.alertModal = !draft.alertModal
      break
    case CLOSE_ALERT_MODAL:
      draft.alertModal = false
      draft.alertModalMessage = ''
      break

    case OPEN_CONFIRM_MODAL:
      draft.confirmModal = true
      draft.alertModalMessage = action.message
      break
    case TOGGLE_CONFIRM_MODAL:
      draft.confirmModal = !draft.confirmModal
      break
    case CLOSE_CONFIRM_MODAL:
      draft.confirmModal = false
      draft.alertModalMessage = ''
      break
    
    case OPEN_CREATE_EVENT_MODAL:
      draft.createEventModal = true
      break
    case TOGGLE_CREATE_EVENT_MODAL:
      draft.createEventModal = !draft.createEventModal
      break
    case CLOSE_CREATE_EVENT_MODAL:
      draft.createEventModal = false

    case SET_ALERT_MODAL_FUNCTION:
      draft.alertModalFunction = action.alertModalFunction
      break
    case SET_ALERT_MODAL_MESSAGE:
      draft.alertModalMessage = action.message
  }
})

export default reducer