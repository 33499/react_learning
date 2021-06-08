import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
    state = {
        hasError:''//用于标识子组件是否产生错误
    }
    //当Parent的子组件出现报错时候，会触发getDerivedStateFromError
    static getDerivedStateFromError(error){
        console.log(error);
        return {hasError:error}
    }
    componentDidCatch(){
        console.log("组件渲染时出错")
    }
    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {this.state.hasError ? <h2>当前网络不稳定，请稍后再试</h2> : <Child/>}
                
            </div>
        )
    }
}
