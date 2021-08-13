import produce from 'immer'

const initialState = {
  createEventModal: false
}

export const OPEN_CREATE_EVENT_MODAL = 'OPEN_CREATE_EVENT_MODAL'
export const CLOSE_CREATE_EVENT_MODAL = 'CLOSE_CREATE_EVENT_MODAL'
export const TOGGLE_CREATE_EVENT_MODAL = 'TOGGLE_CREATE_EVENT_MODAL'

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch(action.type) {
    case OPEN_CREATE_EVENT_MODAL:
      draft.createEventModal = true
      break
    case TOGGLE_CREATE_EVENT_MODAL:
      draft.createEventModal = !draft.createEventModal
      break
    case CLOSE_CREATE_EVENT_MODAL:
      draft.createEventModal = false
      break
      default:break
  }
})

export default reducer