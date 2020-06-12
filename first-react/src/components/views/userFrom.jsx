import React, { Component } from 'react'
import { Form, Input, InputNumber, Button,message } from 'antd';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',

    }
};

class Demo extends Component {

    constructor
    (props) {
        super(props)
        this.state = {
            User: {
                userName : '',
                userPassword: ''
            },
            id :this.props.match.params.id
        }
    }
  
    render() {
     
        const selectKey = this.props.match.params.id;
        console.log(selectKey)
        // 表单提交事件
        const onFinish = values => {
            //console.log(values)
            const path = "http://localhost:8080/fmc/user/update/"


            axios({
                method: "post",
                url: path,
                data: JSON.stringify(values.User),
                headers: { "Content-Type": "application/json;charset=utf-8" }

                //向后端传的参数
            })
                .then(result => {
                    message.success('修改成功', 2)
                    this.props.history.push( '/tea',null)
                    
                })
                .catch(error => {
                    alert(error.message)
                })
            console.log(values)
        };

        return (
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['User', 'id']}
                    label="id"
                    hidden='true'
                    initialValue={selectKey}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['User', 'userName']}
                    label="名称"
                    initialValue={this.state.User.userName}
                 
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input ></Input>
                </Form.Item>

                <Form.Item
                    name={['User', 'userPassword']}
                    label="密码"
                   
                    rules={[
                        {
                            required: true,
                           
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password   value={this.state.User.userPassword} />
                </Form.Item>


                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                </Button>
                </Form.Item>
            </Form>
        );
    }

    // updateByid(updateUser) {
    //     const url = "http://localhost:8080/fmc/user/update"
    //         console.log("请求传产"+updateUser.userName)
    //     axios.post(url, updateUser).then(res => {
    //         console.log("url"+updateUser)
    //         alert(res)

    //     }).catch(e => {
    //         alert(e.message)
    //     })
    // }
    componentDidMount(){
        const  path = "http://localhost:8080/fmc/user/getByid/"+this.state.id
        axios.get(path).then(res=>{
            this.setState({
                User : res.data
            }) 
         console.log(this.state.User.userName)
        }).catch()
    }

}



export default withRouter(Demo)