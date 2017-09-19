import { combineReducers } from 'redux'
import users from './users.reducer'
import selectedUser from './selected-user.reducer'

export default combineReducers({ users, selectedUser })