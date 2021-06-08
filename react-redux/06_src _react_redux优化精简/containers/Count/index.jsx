import React, { Component } from 'react'
//引入redux中的action
import {createDecrementAction,createIncrementAction,createIncrementAsyncAction} from '../../redux/count_action'
//引人connect用于连接ui组件与redux
import {connect} from 'react-redux'


//定义ui组件
class Count extends Component {

    
    increment = ()=>{
        const {selectNumber:{value}}=this
        this.props.jia(value*1)
    }
    decrement = ()=>{
        const {selectNumber:{value}}=this
        this.props.jian(value*1)
    }
    incrementIfOdd = ()=>{
        const {selectNumber:{value}}=this
        if(this.props.count % 2 !== 0){
            this.props.jia(value*1)
        }
        
    }
    incrementAsync = ()=>{
        const {selectNumber:{value}}=this
        this.props.jiaAsync(value*1,500)
      
    }
    render() {
        console.log('UI组件接收到的props是',this.props)
        return (
            <div>
                <h1>当前求和为: {this.props.count}</h1>
                <select ref={c => this.selectNumber =c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}

/*
//映射状态
const mapStateToProps = state =>({count:state})

//映射操作状态的方法
const mapDispathToProps = dispatch =>(
    // {
    //     jia:number=>dispatch(createIncrementAction(number)),
    //     jian:number=>dispatch(createDecrementAction(number)),
    //     jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
        
    // }
    // mapDispathToProps的简写：
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    }
)
*/
//使用connect()()创建并暴露一个Count的容器组件
//精简版
export default connect(
    state =>({count:state}),
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction,
    }
    )(Count)
