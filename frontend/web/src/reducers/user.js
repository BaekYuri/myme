import produce from 'immer'

const initialState = {
  loadMyInfoLoading: false, // 유저 정보 가져오기 시도 중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  logInLoading: false, // 로그인 시도 중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  me: null,
  isSignUp: false,
}

export const UPDATE_MY_INFO_REQUEST = 'UPDATE_MY_INFO_REQUEST'

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST'
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS'
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE'

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const CHANGE_SIGN_UP_MODE = 'CHANGE_SIGN_UP_MODE'

export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data
  }
}

export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  }
}

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true
      draft.loadMyInfoDone = false
      draft.loadMyInfoError = null
      break
    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false
      draft.me = action.data
      draft.loadMyInfoDone = true
      break
    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false
      draft.loadMyInfoError = action.error
      break
    case LOG_IN_REQUEST:
      draft.logInLoading = true
      draft.logInDone = false
      draft.logInError = null
      break
    case LOG_IN_SUCCESS:
      draft.logInLoading = false
      draft.logInDone = true
      draft.me = action.data
      break
    case LOG_IN_FAILURE:
      draft.logInLoading = false
      draft.logInError = action.error
      break
    case LOG_OUT_REQUEST:
      draft.logOutLoading = true
      draft.logOutDone = false
      draft.logOutError = null
      break
    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false
      draft.logOutDone = true
      draft.me = null
      break
    case LOG_OUT_FAILURE:
      draft.logOutLoading = false
      draft.logOutError = action.error
      break
    case SIGN_UP_REQUEST:
      draft.signUpLoading = true
      draft.signUpDone = false
      draft.signUpError = null
      break
    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false
      draft.signUpDone = true
      break
    case SIGN_UP_FAILURE:
      draft.signUpLoading = false
      draft.signUpError = action.error
      break
    case CHANGE_SIGN_UP_MODE:
      draft.isSignUp = !draft.isSignUp
      break
  }
})

export default reducer