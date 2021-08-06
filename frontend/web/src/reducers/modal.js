import produce  from 'immer'

const initialState = {
  routineModal: false,
  createRoutineModal: false,
}

export const OPEN_ROUTINE_MODAL = 'OPEN_ROUTINE_MODAL'
export const CLOSE_ROUTINE_MODAL = 'CLOSE_ROUTINE_MODAL'
export const TOGGLE_ROUTINE_MODAL = 'TOGGLE_ROUTINE_MODAL'
export const OPEN_CREATE_ROUTINE_MODAL = 'OPEN_CREATE_ROUTINE_MODAL'
export const CLOSE_CREATE_ROUTINE_MODAL = 'CLOSE_CREATE_ROUTINE_MODAL'
export const TOGGLE_CREATE_ROUTINE_MODAL = 'TOGGLE_CREATE_ROUTINE_MODAL'

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
  }
})

export default reducer