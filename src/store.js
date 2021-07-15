import { createStore ,combineReducers ,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import { userLoginReducer,userRegisterReducer ,userFavoriteListReducer } from "./redux/reducers/userReducers";

const reducer = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userFavoriteList:userFavoriteListReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
//const userFavoritesFromStorage = localStorage.getItem('userFavorite') ? JSON.parse(localStorage.getItem('userFavorite')) : [];
const initialState = {
    userLogin:{userInfo:userInfoFromStorage},
    //userFavoriteList:{favorites:userFavoritesFromStorage}
};
const middleware = [thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;
