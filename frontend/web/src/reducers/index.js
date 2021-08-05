// import { HYDRATE } from "next-redux-wrapper"
import { combineReducers } from "redux"
import user from './user'
import layout from './layout';
import modal from './modal'
import routine from './routine'
import habit from './habit'
// import post from './post'

// combineReducers가 알아서 만들어 줌!
// const initialState = {
//     user: {
        
//     },
//     post: {
        
//     }
// }

// (이전상태, 액션) => 다음 상태
const rootReducer = (state, action) =>{
    switch (action.type) {
        default: {
            const combinedReducer = combineReducers({
                user,
                layout,
                modal,
                routine,
                habit
                // post
            });
            return combinedReducer(state, action)
        }
    }
} 

// combineReducers({
//     index: (state = {}, action) => {
//         switch (action.type) {
//             case HYDRATE:
//                 console.log('HYDRATE', action)
//                 return {...state, ...action.payload}
//             default: return state
//         }
//     },
//     user,
//     post
// })

export default rootReducer