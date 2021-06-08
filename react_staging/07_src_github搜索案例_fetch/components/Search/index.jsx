import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
export default class Search extends Component {
    search= async()=>{
        console.log("search组件发布消息了：")
        PubSub.publish("atguigu",{name:'tom', age:18})
        //获取用户的输入
        //连续结构赋值+重命名
        const {keyWordElement:{value:keyWord}}=this
        //发送请求前通知app更新状态
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish("atguigu",{isFirst:false,isLoading:true})
        // console.log(keyWord);
        /*
        axios.get(`/api1/search/users2?q=${keyWord}`).then(
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
        */
       /*未优化
       fetch(`/api1/search/users?q=${keyWord}`).then(
           response =>{
            console.log("连接服务成功了",response.json());
           },
           error =>{
            console.log("连接服务器错误",error);
            return new Promise(()=>{})
           }
       ).then(
            response =>{console.log("获取数据成功了",response);},
            error =>{console.log("获取数据错误",error);}
       )*/
    try{
        const response = await fetch(`/api1/search/users?q=${keyWord}`)
        const data = await response.json()
        // console.log(data)
        PubSub.publish("atguigu",{isLoading:false,users:data.items})
    }catch(error){
        console.log("请求出错",error);
        PubSub.publish("atguigu",{isLoading:false,err:error.message})
    }
    
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
