import produce from 'immer'

const initialState = {
    challenges: [],
    addChallengeLoading: false, //챌린지 생성 중
    addChallengeDone: false,
    addChallengeError: null,
    loadChallengsLoading: false,
    loadChallengesDone: false,
    loadChallengesError: null,
    createChallengeInfo : {
        "rid" : -1,
        "name" : '',
        // "subject" : '',
        "start_date" : '',
        // "createdAt" : '',
        "period" : -1,
        "repeat_cycle" : 1,
        "auth_count": 1,
        "content" : ''
    }
  }

export const ADD_CHALLENGE_REQUEST = 'ADD_CHALLENGE_REQUEST'
export const ADD_CHALLENGE_SUCCESS = 'ADD_CHALLENGE_SUCCESS'
export const ADD_CHALLENGE_FAILURE = 'ADD_CHALLENGE_FAILURE'

export const LOAD_CHALLENGES_REQUEST = 'LOAD_CHALLENGES_REQUEST'
export const LOAD_CHALLENGES_SUCCESS = 'LOAD_CHALLENGES_SUCCESS'
export const LOAD_CHALLENGES_FAILURE = 'LOAD_CHALLENGES_FAILURE'

export const CLEAR_CHALLENGES = 'CLEAR_CHALLENGES'
// export const ADD_CHALLENGE='challenge/addChallenge';

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case CLEAR_CHALLENGES:
            draft.challenges = []
            break
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


    }
  })
  
  export default reducer