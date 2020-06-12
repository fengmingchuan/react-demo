import  React,{Component} from  'react'


import {NavLink } from 'react-router-dom'



 export default  class main extends Component{
    render(){
        return(
        <div>
           
           <ul>
           <li>
               <NavLink to="/index">首页</NavLink>
             </li>
             <li>
               <NavLink to="/sub">课程列表</NavLink>
             </li>
             <li>
               <NavLink to="/tea">讲师列表</NavLink>
             </li>
             <li>
               <NavLink to="/new">新闻</NavLink>
             </li>
           </ul> 
           {this.props.children}
           </div>
        )
    }
    
  }
 
