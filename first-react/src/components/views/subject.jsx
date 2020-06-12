import  React,{Component} from  'react'
import  { BrowserRouter as Router , NavLink ,Route} from 'react-router-dom'
//import { Router, Route, Link } from 'react-router-dom'
//import axios from 'axios';
import Main from  './routes'
export default class subject extends  Component{
   render(){
       let { match} = this.props
       return(
        
        <div>
        {this.props.children}
                  
                     <NavLink  to={`${match.url}/safety`  }>安全运维</NavLink>
                     <NavLink to={`${match.url}/max`} >大数据</NavLink> 
                     <NavLink  to={`${match.url}/cc`}>云计算</NavLink>
                 
              </div>
              
       )
   }
}
// const  subject  =(props)=>{
//     // let {match} = this.props 
//  return(
//      <div>
//          <Main/>
//             <NavLink  to={`${this.props.url}/safety`  }>安全运维</NavLink>
//             <NavLink to={`${this.props.url}/max`} >大数据</NavLink> 
//             <NavLink  to={`${this.props.url}/cc`}>云计算</NavLink>
//             {props.match.params.id}
//             <Route path={`${this.props.path}/:name`} render={(props) => <div>{props.match.params.name}</div>}/>
//      </div>
//  )

// }
// export default subject;
// export default class subject extends Component{
//     render(){
//         return(
//         <div>课程列表============={props.ma}</div>
//         )
//     }
// }