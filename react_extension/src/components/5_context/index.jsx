import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext()
const {Provider,Consumer} = MyContext
export default class A extends Component {
    state = {username:'tom',age:18}
    render() {
        const {username,age} = this.state
        return (
            <div className="grand">
                <h3 >我是A组件</h3>
                <h4>我的用户名是:{username}</h4>
                
                <Provider value={{username,age}}>
                <B />
                </Provider>
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className="parent">
                <h3 >我是B组件</h3>
                <h4>我从A组件接收到的用户名:</h4>
                <C/>
                <D/>
            </div>
        )
    }
}
class C extends Component {
    //声明接收contex
    static contextType = MyContext
    render() {
        return (
            <div className="child">
                <h3 >我是C组件</h3>
                <h4>我从A组件接收到的用户名:{this.context.username}</h4>
                
            </div>
        )
    }
}
function D() {
   return (
    <div className="child">
    <h3 >我是C函数组件</h3>
    <h4>我从A组件接收到的用户名:
    <Consumer>
        {
        value => `${value.username},年龄是${value.age}`
        }
    </Consumer>
    </h4>
    
    </div>
   ) 
}

