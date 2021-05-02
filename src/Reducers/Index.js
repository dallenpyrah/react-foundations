import counterReducer from './Counter'
import isLoggedReducer from './isLogged'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counterReducer, isLoggedReducer
})

export default allReducers
