import { USER_ACTION_TYPES } from "./UserActionTypes"

export const setCurrentUser = (user) => ({
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user
})