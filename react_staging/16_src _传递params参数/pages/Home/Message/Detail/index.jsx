import React, { Component } from 'react'

const DetailData = [
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，kjlk'},
    {id:'03',content:'你好，自己'}
]
export default class Detail extends Component {
    
    render() {
        // console.log(this.props)
        const {id,title} = this.props.match.params
        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id
        })
        return (
           <ul>
               <li>ID:{id}</li>
               <li>TiTLE:{title}</li>
               <li>CONTENT:{findResult.content}</li>
           </ul>
        )
    }
}
