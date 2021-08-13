import produce from 'immer'

const initialState = {
  challenges: [], // 전체 챌린지 목록
  singleChallenge: null, // 챌린지 하나의 정보
  newChallenges: [], // 신규 챌린지 목록
  recChallenges: [], // 추천 챌린지 목록
  myChallenges: [], // 내가 참여하는 챌린지
  myCreateChallenges: [], // 내가 생성한 챌린지
  challengeImagePath: '', // 챌린지 대표 이미지 경로
  /*********************************************************** */
  uploadChallengeImageLoading: false, // 챌린지 대표 이미지 업로드 중
  uploadChallengeImageDone: false,
  uploadChallengeImageError: null,
  /*********************************************************** */
  addChallengeLoading: false, // 챌린지 생성 중
  addChallengeDone: false,
  addChallengeError: null,
  /*********************************************************** */
  loadChallengesLoading: false,
  loadChallengesDone: false,
  loadChallengesError: null,
  /*********************************************************** */
  loadChallengeLoading: false,
  loadChallengeDone: false,
  loadChallengeError: null,
  /*********************************************************** */
  loadNewChallengesLoading: false,
  loadNewChallengesDone: false,
  loadNewChallengesError: null,
  /*********************************************************** */
  loadRecChallengesLoading: false,
  loadRecChallengesDone: false,
  loadRecChallengesError: null,
  /*********************************************************** */
  loadMyChallengesLoading: false,
  loadMyChallengesDone: false,
  loadMyChallengesError: null,
  /*********************************************************** */
  loadMyCreateChallengesLoading: false,
  loadMyCreateChallengesDone: false,
  loadMyCreateChallengesError: null,
  /*********************************************************** */
  participateChallengeLoading: false,
  participateChallengeDone: false,
  participateChallengeError: null,
  /*********************************************************** */
  certifyChallengeLoading: false,
  certifyChallengeDone: false,
  certifyChallengeError: null,
}

export const UPLOAD_CHALLENGE_IMAGE_REQUEST = 'UPLOAD_CHALLENGE_IMAGE_REQUEST'
export const UPLOAD_CHALLENGE_IMAGE_SUCCESS = 'UPLOAD_CHALLENGE_IMAGE_SUCCESS'
export const UPLOAD_CHALLENGE_IMAGE_FAILURE = 'UPLOAD_CHALLENGE_IMAGE_FAILURE'

export const ADD_CHALLENGE_REQUEST = 'ADD_CHALLENGE_REQUEST'
export const ADD_CHALLENGE_SUCCESS = 'ADD_CHALLENGE_SUCCESS'
export const ADD_CHALLENGE_FAILURE = 'ADD_CHALLENGE_FAILURE'

// 전체 챌린지 그냥 쌓인 순서대로 불러오기
export const LOAD_CHALLENGES_REQUEST = 'LOAD_CHALLENGES_REQUEST'
export const LOAD_CHALLENGES_SUCCESS = 'LOAD_CHALLENGES_SUCCESS'
export const LOAD_CHALLENGES_FAILURE = 'LOAD_CHALLENGES_FAILURE'

// 챌린지 상세 페이지를 위한 하나의 챌린지 불러오기
export const LOAD_CHALLENGE_REQUEST = 'LOAD_CHALLENGE_REQUEST'
export const LOAD_CHALLENGE_SUCCESS = 'LOAD_CHALLENGE_SUCCESS'
export const LOAD_CHALLENGE_FAILURE = 'LOAD_CHALLENGE_FAILURE'

// 신규 챌린지 불러오기
export const LOAD_NEW_CHALLENGES_REQUEST = 'LOAD_NEW_CHALLENGES_REQUEST'
export const LOAD_NEW_CHALLENGES_SUCCESS = 'LOAD_NEW_CHALLENGES_SUCCESS'
export const LOAD_NEW_CHALLENGES_FAILURE = 'LOAD_NEW_CHALLENGES_FAILURE'

// 추천 챌린지 불러오기
export const LOAD_REC_CHALLENGES_REQUEST = 'LOAD_REC_CHALLENGES_REQUEST'
export const LOAD_REC_CHALLENGES_SUCCESS = 'LOAD_REC_CHALLENGES_SUCCESS'
export const LOAD_REC_CHALLENGES_FAILURE = 'LOAD_REC_CHALLENGES_FAILURE'

export const LOAD_MY_CHALLENGES_REQUEST = 'LOAD_MY_CHALLENGES_REQUEST'
export const LOAD_MY_CHALLENGES_SUCCESS = 'LOAD_MY_CHALLENGES_SUCCESS'
export const LOAD_MY_CHALLENGES_FAILURE = 'LOAD_MY_CHALLENGES_FAILURE'

export const LOAD_MY_CREATE_CHALLENGES_REQUEST = 'LOAD_MY_CREATE_CHALLENGES_REQUEST'
export const LOAD_MY_CREATE_CHALLENGES_SUCCESS = 'LOAD_MY_CREATE_CHALLENGES_SUCCESS'
export const LOAD_MY_CREATE_CHALLENGES_FAILURE = 'LOAD_MY_CREATE_CHALLENGES_FAILURE'

export const PARTICIPATE_CHALLENGE_REQUEST = 'PARTICIPATE_CHALLENGE_REQUEST'
export const PARTICIPATE_CHALLENGE_SUCCESS = 'PARTICIPATE_CHALLENGE_SUCCESS'
export const PARTICIPATE_CHALLENGE_FAILURE = 'PARTICIPATE_CHALLENGE_FAILURE'

export const CERTIFY_CHALLENGE_REQUEST = 'CERTIFY_CHALLENGE_REQUEST'
export const CERTIFY_CHALLENGE_SUCCESS = 'CERTIFY_CHALLENGE_SUCCESS'
export const CERTIFY_CHALLENGE_FAILURE = 'CERTIFY_CHALLENGE_FAILURE'

export const CLEAR_CHALLENGES = 'CLEAR_CHALLENGES'
export const CLEAR_MY_CHALLENGES = 'CLEAR_MY_CHALLENGES'
export const CLEAR_ADD_CHALLENGE_DONE = 'CLEAR_ADD_CHALLENGE_DONE'
export const CLEAR_LOAD_CHALLENGE_DONE = 'CLEAR_LOAD_CHALLENGE_DONE'

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case CLEAR_CHALLENGES:
      draft.challenges = []
      break
    case CLEAR_MY_CHALLENGES:
      draft.myChallenges = []
      break
    case CLEAR_ADD_CHALLENGE_DONE:
      draft.addChallengeDone = false
      break
    case CLEAR_LOAD_CHALLENGE_DONE:
      draft.loadChallengeDone = false
      break
    /*********************************************************** */
    case UPLOAD_CHALLENGE_IMAGE_REQUEST:
      draft.uploadChallengeImageLoading = true
      draft.uploadChallengeImageDone = false
      draft.uploadChallengeImageError = null
      break
    case UPLOAD_CHALLENGE_IMAGE_SUCCESS:
      draft.uploadChallengeImageLoading = false
      draft.uploadChallengeImagaDone = true
      draft.challengeImagePath = action.data
      break
    case UPLOAD_CHALLENGE_IMAGE_FAILURE:
      draft.uploadChallengeImageLoading = false
      draft.uploadChallengeImageError = action.error
      break
    /*********************************************************** */
    case ADD_CHALLENGE_REQUEST:
      draft.addChallengeLoading = true
      draft.addChallengeDone = false
      draft.addChallengeError = null
      break
    case ADD_CHALLENGE_SUCCESS:
      draft.addChallengeLoading = false
      draft.addChallengeDone = true
      break
    case ADD_CHALLENGE_FAILURE:
      draft.addChallengeLoading = false
      draft.addChallengeError = action.error
      break
    /*********************************************************** */
    case LOAD_CHALLENGES_REQUEST:
      draft.loadChallengesLoading = true
      draft.loadChallengesDone = false
      draft.loadChallengesError = null
      break
    case LOAD_CHALLENGES_SUCCESS:
      draft.loadChallengesLoading = false
      draft.loadChallengesDone = true
      draft.challenges = []
      draft.challenges = draft.challenges.concat(action.data)
      break
    case LOAD_CHALLENGES_FAILURE:
      draft.loadChallengesLoading = false
      draft.loadChallengesError = action.error
      break
    /*********************************************************** */
    case LOAD_CHALLENGE_REQUEST:
      draft.loadChallengeLoading = true
      draft.loadChallengeDone = false
      draft.loadChallengeError = null
      break
    case LOAD_CHALLENGE_SUCCESS:
      draft.loadChallengeLoading = false
      draft.loadChallengeDone = true
      draft.singleChallenge = null
      draft.singleChallenge = action.data
      break
    case LOAD_CHALLENGE_FAILURE:
      draft.loadChallengeLoading = false
      draft.loadChallengeError = action.error
      break
    /*********************************************************** */
    case LOAD_NEW_CHALLENGES_REQUEST:
      draft.loadNewChallengesLoading = true
      draft.loadNewChallengesDone = false
      draft.loadNewChallengesError = null
      break
    case LOAD_NEW_CHALLENGES_SUCCESS:
      draft.loadNewChallengesLoading = false
      draft.loadNewChallengesDone = true
      draft.newChallenges = []
      draft.newChallenges = draft.newChallenges.concat(action.data)
      break
    case LOAD_NEW_CHALLENGES_FAILURE:
      draft.loadNewChallengesLoading = false
      draft.loadNewChallengesError = action.error
      break
    /*********************************************************** */
    case LOAD_REC_CHALLENGES_REQUEST:
      draft.loadRecChallengesLoading = true
      draft.loadRecChallengesDone = false
      draft.loadRecChallengesError = null
      break
    case LOAD_REC_CHALLENGES_SUCCESS:
      draft.loadRecChallengesLoading = false
      draft.loadRecChallengesDone = true
      draft.recChallenges = []
      draft.recChallenges = draft.recChallenges.concat(action.data)
      break
    case LOAD_REC_CHALLENGES_FAILURE:
      draft.loadRecChallengesLoading = false
      draft.loadRecChallengesError = action.error
      break
    /*********************************************************** */
    case LOAD_MY_CHALLENGES_REQUEST:
      draft.loadMyChallengesLoading = true
      draft.loadMyChallengesDone = false
      draft.loadMyChallengesError = null
      break
    case LOAD_MY_CHALLENGES_SUCCESS:
      draft.loadMyChallengesLoading = false
      draft.loadMyChallengesDone = true
      draft.myChallenges = []
      draft.myChallenges = draft.myChallenges.concat(action.data)
      break
    case LOAD_MY_CHALLENGES_FAILURE:
      draft.loadMyChallengesLoading = false
      draft.loadMyChallengesError = action.error
      break
    /*********************************************************** */
    case LOAD_MY_CREATE_CHALLENGES_REQUEST:
      draft.loadMyCreateChallengesLoading = true
      draft.loadMyCreateChallengesDone = false
      draft.loadMyCreateChallengesError = null
      break
    case LOAD_MY_CREATE_CHALLENGES_SUCCESS:
      draft.loadMyCreateChallengesLoading = false
      draft.loadMyCreateChallengesDone = true
      draft.myCreateChallenges = []
      draft.myCreateChallenges = draft.myCreateChallenges.concat(action.data)
      break
    case LOAD_MY_CREATE_CHALLENGES_FAILURE:
      draft.loadMyCreateChallengesLoading = false
      draft.loadMyCreateChallengesError = action.error
      break
    /*********************************************************** */
    case PARTICIPATE_CHALLENGE_REQUEST:
      draft.participateChallengeLoading = true
      draft.participateChallengeDone = false
      draft.participateChallengeError = null
      break
    case PARTICIPATE_CHALLENGE_SUCCESS:
      draft.participateChallengeLoading = false
      draft.participateChallengeDone = true
      draft.myChallenges = draft.myChallenges.concat(action.data)
      break
    case PARTICIPATE_CHALLENGE_FAILURE:
      draft.participateChallengeLoading = false
      draft.participateChallengeError = action.error
      break
    /*********************************************************** */
    case CERTIFY_CHALLENGE_REQUEST:
      draft.certifyChallengeLoading = true
      draft.certifyChallengeDone = false
      draft.certifyChallengeError = null
      break
    case CERTIFY_CHALLENGE_SUCCESS:
      draft.certifyChallengeLoading = false
      draft.certifyChallengeDone = true
      draft.challengeImagePath = null
      break
    case CERTIFY_CHALLENGE_FAILURE:
      draft.certifyChallengeLoading = false
      draft.certifyChallengeError = action.error
      break
  }
})

export default reducer