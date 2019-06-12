import { combineReducers } from 'redux'
import { USER_CREATE ,USER_UPDATE } from './action'





const userStructure = {
  userList: [
    { name: 'Kieu Nguyen', position: 'internship' },
    { name: 'Kante', position: 'internship' },
    { name: 'Khoa', position: 'culi' },
  ]
}
const userReducer = (state = userStructure, action) => {
  switch (action.type) {
    case USER_CREATE: {
      return {
        ...state,
        userList: [ ...state.userList, action.data ]
      }
    }
    case USER_UPDATE: {
      const { id, name, position } = action.data
      state.userList[id] = { name, position }

      return {
        ...state,
        userList: [ ...state.userList ]
      }
    }
    default: return state
  }
}






const rootReducer = combineReducers({
  user: userReducer
})
export default rootReducer
