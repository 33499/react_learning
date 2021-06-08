import React, { Component } from 'react'
import qs from 'querystring'
const DetailData = [
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，kjlk'},
    {id:'03',content:'你好，自己'}
]
export default class Detail extends Component {
    
    render() {
        // console.log(this.props)
        //接收params参数
        // const {id,title} = this.props.match.params 
        //接收search参数
        // const {search} = this.props.location
        // const {id, title} = qs.parse(search.slice(1))
        //接收search参数
        const {id,title} = this.props.location.state || {}
        // console.log(log,title)
        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id
        })||{}
        return (
           <ul>
               <li>ID:{id}</li>
               <li>TiTLE:{title}</li>
               <li>CONTENT:{findResult.content}</li>
           </ul>
        )
    }
}
