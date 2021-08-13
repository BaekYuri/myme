// import { HYDRATE } from "next-redux-wrapper"
import { combineReducers } from "redux"
import calendar from './calendar'
import modal from './modal'
// (이전상태, 액션) => 다음 상태
const rootReducer = (state, action) =>{
    switch (action.type) {
        default: {
            const combinedReducer = combineReducers({
                calendar,
                modal,
            });
            return combinedReducer(state, action)
        }
    }
} 

export default rootReducer