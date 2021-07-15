import { 
    USER_LOGIN_REQUEST
    ,USER_LOGIN_SUCCESS,USER_REGISTER_SUCCESS,USER_REGISTER_REQUEST, USER_LOGOUT, ADD_USER_TO_FAVORITE_REQUEST, ADD_USER_TO_FAVORITE_SUCCESS } from "../constants/userConstants"

// user login actions
export const login = user => dispatch => {
    dispatch({
        type:USER_LOGIN_REQUEST
    })
    setTimeout(()=> {
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:user
        })
        localStorage.setItem('userInfo',JSON.stringify(user));
    },2000)
}
export const logout = () => dispatch => {
    console.log('logout')
    localStorage.removeItem('userInfo');
    dispatch({type:USER_LOGOUT});
}
// user register actions
export const register = user => dispatch => {
    dispatch({
        type:USER_REGISTER_REQUEST
    })
    setTimeout(()=> {
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:user
        })
        let userStorage = {
            email:user.email,
            password:user.password
        }
        localStorage.setItem('userInfo',JSON.stringify(userStorage));
    },2000)
}

export const addToFavorite = (userId) => dispatch => {
    console.log("add user: " + userId);
    dispatch({
        type:ADD_USER_TO_FAVORITE_REQUEST
    })
    dispatch({
        type:ADD_USER_TO_FAVORITE_SUCCESS,
        payload:userId
    })
}