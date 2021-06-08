import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Header extends Component {
    back = ()=>{
        this.props.history.goBack()
    }
    push = ()=>{
        this.props.history.goForward()
    }
    render() {
        console.log('header组件收到的props是',this.props)
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.push}>前进</button>
                <button onClick={this.back}>回退</button>
            </div>
        )
    }
}
export default withRouter(Header)
//withRouter可以加工一般组件,让一般组件具备路由组件所特有的API
//withRouter 的返回值是一个新组件