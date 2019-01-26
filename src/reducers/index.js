import {combineReducers} from 'redux'
import {User} from './user'
const appReducer=combineReducers({
    User
})

const rootReducer=(state,action)=>{
    return appReducer(state,action)
}

export default rootReducer
