/*
该文件用于汇总所有的reducer为一个总的reducer
*/
//引入为Count组件服务的reducer
import countReducer from './count'
//引入为Person组件服务的reducer
import personReducer from './person'
//引入combineReducers用于汇总多个reducer
import {combineReducers} from 'redux'
//汇总所有的reducer变为一个总的reducer
export default combineReducers({
    he:countReducer,
    rens:personReducer
})
 