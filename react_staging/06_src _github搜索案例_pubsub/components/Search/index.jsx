import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
export default class Search extends Component {
    search= ()=>{
        console.log("search组件发布消息了：")
        PubSub.publish("atguigu",{name:'tom', age:18})
        //获取用户的输入
        //连续结构赋值+重命名
        const {keyWordElement:{value:keyWord}}=this
        //发送请求前通知app更新状态
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish("atguigu",{isFirst:false,isLoading:true})
        // console.log(keyWord);
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
        //         //请求成功后通知app更新状态
        //         this.props.updateAppState({isLoading:false,users:response.data.items})
                   PubSub.publish("atguigu",{isLoading:false,users:response.data.items})
            },
            error => {
        //         //请求失败后通知App更新状态
        //         this.props.updateAppState({isLoading:false,err:error.message})
                   PubSub.publish("atguigu",{isLoading:false,err:error.message})
            }
        )
        //发送网络请求
    }
    render() {
        return (
            <section className="jumbotron">
              <h3 className="jumbotron-heading">Search Github Users</h3>
              <div>
                <input ref={c =>this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={this.search}>Search</button>
              </div>
            </section>
        )
    }
}
