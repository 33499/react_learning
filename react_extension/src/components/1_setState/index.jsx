import React, { Component } from 'react'

export default class Demo extends Component {
    state = {count:0}
    add = ()=>{
        const {count} = this.state
        // this.setState({count:count+1},()=>{
        //     console.log(this.state.count)
        // })
        //函数式的setSate
        // this.setState((state,props)=>{
        //     return {count:state.count+1}
        // })
        this.setState((state,props)=>({count:state.count+1})   )

    }
    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                <button onClick={this.add}> 点我加一</button>
            </div>
        )
    }
}
