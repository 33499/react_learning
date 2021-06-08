import React, { Component } from 'react'

export default class Child extends Component {
    // state = {
    //     users:[
    //         {id:'001',name:'tom',age:18},
    //         {id:'002',name:'jack',age:19},
    //         {id:'003',name:'peiqi',age:20}
    //     ]
    // }
    state = 'jgk'
    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                <ul>
                {
                    this.state.users.map(obj=><li key={obj.id}>{obj.name}----{obj.age}</li>)
                }
                </ul>
                
            </div>
        )
    }
}
