import React, { Component } from 'react'
import ReactDOM from 'react-dom'
/*
export default class Demo extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
*/

function Demo() {
    const  myref = React.useRef()

    const [count,setCount] = React.useState(0)
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function add() {
        // setCount(count+1)//第一种写法
        setCount(count => count+1)
    }
    function show() {
        
        alert(myref.current.value)
    }
    React.useEffect(()=>{
        // console.log('@');
        let timer = setInterval(()=>{
            setCount(count => count+1)
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])
    return (
        <div>
        <input type="text" ref={myref}/>
        <h2>当前求和为{count}</h2>
        <button onClick={add}>点我+1</button>
        <button onClick={unmount}>卸载组件</button>
        <button onClick={show}>点我提示数据</button>
        </div>
       
    )
}
export default Demo