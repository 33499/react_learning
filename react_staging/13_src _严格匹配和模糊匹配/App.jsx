import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import Test from './pages/Test'
export default class App extends Component {
    render() {    
        return (
            <div>
                <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <Header/>
                </div>
                </div>
                
                <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 原生html靠a标签跳转 */}
                    {/* <a className="list-group-item" href="./about.html">About</a>
                    <a className="list-group-item active" href="./home.html">Home</a> */}
                   {/* 在react中靠路由链接实现切换组件 --编写路由链接*/}
                   
                    <MyNavLink to="/home" title="Home" a={1} b={2} c={3}>Home</MyNavLink>
                    <MyNavLink to="/about/a/b" title="About">About</MyNavLink>
                    
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                    <div className="panel-body">
                        {/* 注册路由 */}
                        {/* 开启严格匹配exact */}
                        <Switch>
                            <Route exact={true} path="/about" component={About}/>
                            <Route exact={true} path="/home" component={Home}/>
                            {/* <Route path="/home" component={Test}/> */}
                        </Switch>
                            
                    </div>
                    </div>
                </div>
                </div>
               
            </div>
        )
    }
}
