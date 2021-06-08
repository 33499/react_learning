//引入Count的UI组件
import CountUI from '../../components/Count'
//引入redux中的action
import {createDecrementAction,createIncrementAction,createIncrementAsyncAction} from '../../redux/count_action'
//引人connect用于连接ui组件与redux
import {connect} from 'react-redux'

/*
1.mapStateToProps函数的返回值是一个对象；
2.返回的对象中的key就作为状态传递给了ui组件,value就作为UI组件props的value，state为redux中的状态值
3.mapStateToProps用于传递状态
*/
function mapStateToProps(state){
    return {count:state}// 相当于<countUI n={900}/>
}
//b函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给ui组件props的value-操作状态的方法
/*
/*
1.mapStateToProps函数的返回值是一个对象；
2.返回的对象中的key就作为状态传递给了ui组件,value就作为UI组件props的value，state为redux中的状态值
3.mapStateToProps用于传递操作状态的方法
*/

function mapDispathToProps(dispatch){
    return {
        jia:(number)=>{
        //通知store执行加法
        dispatch(createIncrementAction(number))
        },
        jian:(number)=>{
        //通知store执行减法
        dispatch(createDecrementAction(number))
        },
        jiaAsync:(number,time)=>{
        //通知store执行异步加法
        dispatch(createIncrementAsyncAction(number,time))
        }
    }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispathToProps)(CountUI)
