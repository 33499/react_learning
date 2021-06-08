import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
    addPerson = ()=>{
        
        const {nameNode:{value:name},ageNode:{value:age}} = this
        // console.log(age,name)
        const personObj = {id:nanoid(),name,age}
        console.log(personObj)
        this.props.jiaYiRen(personObj)
        this.nameNode.value=''
        this.ageNode.value=''
    }
    render() {
        return (
            <div>
                <h2>我是person组件,上方组件和为{this.props.he}</h2>
               <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>
                <input ref={c=> this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((personObj)=>{
                            return <li key = {personObj.id}>{personObj.name}---{personObj.age}</li>
                        })
                    }
                   
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({persons:state.rens,he:state.he}),//映射状态
    {jiaYiRen:createAddPersonAction}//映射操作状态的方法
)(Person)