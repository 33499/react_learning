import React, { Component } from 'react'
//引入store，获取state
import store from '../../redux/store'
export default class Count extends Component {

    state ={count:0}
    // componentDidMount(){
    //     //检测redux中状态的变化,只要变化，就调用render
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
    increment = ()=>{
        const {selectNumber:{value}}=this
        //通知redux加state
        store.dispatch({type:'increment',data:value*1})
    }
    decrement = ()=>{
        const {selectNumber:{value}}=this
        store.dispatch({type:'decrement',data:value*1})
    }
    incrementIfOdd = ()=>{
        const {selectNumber:{value}}=this
        
        if(store.getState() % 2 !==0)(
            store.dispatch({type:'increment',data:value*1})
        )
        
    }
    incrementAsync = ()=>{
        const {selectNumber:{value}}=this
        
        
        setTimeout(()=>{
            store.dispatch({type:'increment',data:value*1})
        },500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为: {store.getState()}</h1>
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
