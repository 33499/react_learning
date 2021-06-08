import React, { PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {
    state = {carName:"奔驰c36"}
    changeCar = ()=>{
        this.setState({carName:'迈巴赫'})
    }
    render() {
        console.log("Parent---render");
        const {carName}=this.state
        return (
            <div className="parent">
                <h3>我是parent组件</h3>
                <span>我的车名字是:{carName}</span><br/>
                <button onClick={this.changeCar}>点击换车</button>
                <Child carName={carName}/>
            </div>
        )
    }
}
class Child extends PureComponent {
    render() {
        console.log("Child---render");
        return (
            <div className="child">
                <h3>我是child组件</h3>
                <span>我接到的车名字是:{this.props.carName}</span>
            </div>
        )
    }
}

