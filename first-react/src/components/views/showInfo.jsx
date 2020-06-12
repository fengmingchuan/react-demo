import  React,{Component} from  'react'
import { Router, Route, Link } from 'react-router-dom'
import TeaList from './teachers'
//import axios from 'axios';

export default class info extends Component{
  render(){
      return(
          
          <div> 
             <TeaList/>
            详细信息</div>
      )
  }
    
}