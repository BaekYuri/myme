import produce from 'immer'

const initialState = {
  createEventModal: false,
  addressModal: false,

  addressInfo:{}
}

export const OPEN_CREATE_EVENT_MODAL = 'OPEN_CREATE_EVENT_MODAL'
export const CLOSE_CREATE_EVENT_MODAL = 'CLOSE_CREATE_EVENT_MODAL'
export const TOGGLE_CREATE_EVENT_MODAL = 'TOGGLE_CREATE_EVENT_MODAL'

export const OPEN_ADDRESS_MODAL = 'OPEN_ADDRESS_MODAL'
export const CLOSE_ADDRESS_MODAL = 'CLOSE_ADDRESS_MODAL'
export const TOGGLE_ADDRESS_MODAL = 'TOGGLE_ADDRESS_MODAL'

export const SET_ADDRESS_INFO = 'SET_ADDRESS_INFO'

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

    case OPEN_ADDRESS_MODAL:
      draft.addressModal=true
      break
    case TOGGLE_ADDRESS_MODAL:
      draft.addressModal=!draft.addressModal
      break
    case CLOSE_ADDRESS_MODAL:
      draft.addressModal=false
      break
    case SET_ADDRESS_INFO:
      draft.addressInfo = action.data
      draft.addressModal=false
      default:break
  }
})

export default reducer