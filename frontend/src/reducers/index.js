import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import boardModify from './boardReducer';

const reducer= combineReducers({
    login:loginReducer,
    board:boardModify
})
export default reducer