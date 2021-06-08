/*
该文件专门为Count组件生成action对象
*/
import {DECREMENT,INCREMENT} from '../constant'

export const createIncrementAction = data=>({type:INCREMENT,data})
export const createDecrementAction = data=>({type:DECREMENT,data})
//异步action，就是指action的值为函数,异步action中一般都会调用同步action
//,异步action不是必须要用的
export const createIncrementAsyncAction = (data,time)=>{
    return (dispatch)=>{
        // console.log("@")
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}
