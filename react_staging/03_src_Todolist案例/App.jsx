//创建“外壳”组件App
import React,{Component} from 'react'
import Header from './components/Header'
import PropTypes from 'prop-types'
import List from './components/List'
import './App.css'
import Footer from './components/Footer'

class App extends Component{
    //初始化状态
    //状态在哪里，操作状态的方法在哪里
    state = {
        todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:true},
            {id:'003',name:'打代码',done:false},
            {id:'004',name:'逛街',done:true}
        ]
    }
    //addTodo用于添加一个todo,接受的参数是todo对象
    addTodo = (todoobj)=>{
        //获取原todos
       const {todos} = this.state
       //追加一个todo
       const newTodos = [todoobj,...todos]
       //更新状态todo
       this.setState({todos:newTodos})
    }
    //用于更新一个to'do
    updateTodo = (id,done)=>{
        //获取状态中的todos
        const {todos}=this.state
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id==id) return {...todoObj,done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }
    //用于删除一个todo
    deletTodo = (id)=>{
        //获取原来的todos
        const {todos} = this.state
        //删除指定id的todo对象
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        //更新todos
        this.setState({todos:newTodos})
    }
    //checkAllTodo用于全选
    checkAllTodo = (done)=>{
        //获取原来的todos
        const {todos} = this.state
        //加工数据
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        //更新状态
        this.setState({todos:newTodos})
    }
    //清除所有已完成的
    clearAllDone = ()=>{
        //获取原来的todos
        const  {todos} = this.state
        //过滤数据
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.done === false
        })
        this.setState({todos:newTodos})
    }
    render(){
        const {todos}=this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                <Header addTodo={this.addTodo}/>
                <List updateTodo={this.updateTodo} deletTodo={this.deletTodo} todos={todos}/>
                <Footer todos={todos} clearAllDone={this.clearAllDone} checkAllTodo={this.checkAllTodo}/>
                </div>
            </div>
        )
    }
}
//暴露App组件
export default App