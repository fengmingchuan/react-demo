
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';
import './tea.css'

import { Table, Tag, Space, Button,message,Popconfirm  } from 'antd';
import 'antd/dist/antd.css';


export default class teacher extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [],
  
    }
  }




  //   removeTeabyId = (props)=>{
  //     alert(props)
  //     const  id=props
  //     const  url="http://localhost:8080/fmc/user/del"
  //     return (


  //       )
  //   }

  render() {
    const columns = [
      {
    
        title: 'id',
        dataIndex: 'id',
        key: 'id'
      },
      {
    
        title: 'userName',
        dataIndex: 'userName',
        key: 'userName',
    
      },
      {
        title: 'userCode',
        dataIndex: 'userCode',
        key: 'userCode',
      },
      {
        title: 'userPassword',
        dataIndex: 'userPassword',
        key: 'userPassword',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
           <Link   to={ '/tea/update/' + record.id }
            //   to={{
            //     pathname: '/tea/update',
            //     state: {  // 页面跳转要传递的数据，如下
            //           id: record.id
                     
            //     }
            // }}
           
           >
           
               <Button type="link" value={record.id}    >修改</Button>
               
                
                 </Link> 
                 <Popconfirm placement="top" title="是否确认删除?" onConfirm={this.del.bind(this , record.id )} okText="Yes" cancelText="No">
            <Button type="link"    >删除</Button>
            </Popconfirm>
          </Space>
        ),
      }
    ];
    const userList = this.state.list

    return (

      <div className="div" >

        <Table rowKey={record => record.id} columns={columns} dataSource={userList} />
        {/* <table className="teaList">
              <tr>
                <td>userCode</td>
                <td>userName</td>
              </tr>
             {
                   userList.map((user,index)=>(
                    <tr>
                   <td>{user.userCode}</td>
                   <td> {user.userName} </td>
                    </tr>
                      
                    
                   ))

             }
              </table> */}
        <Link to="/tea/Info">讲师详细信息============
            </Link>
        {/* // {this.props.children} */}
      </div>
    )
  }
   getlist(){
    const url = "http://localhost:8080/fmc/user/list"
    axios.get(url).then((response) => {
      const result = response.data
      this.setState({
        list: result
      })
      console.log(result)
    }).catch(err => {
      console.log(err);
    }
    )

   }


  del(props) {
   
   
 
    const id = props
    const url = "http://localhost:8080/fmc/user/del/"+id
  
    axios.get(url).then((response) => {
      message.success('删除成功', 2)
      this.getlist();
   
     
    }).catch(err => {
      console.log(err);
    }
    )
   }
  componentDidMount() {
    this.getlist()
  }
}




