import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

import { Link ,withRouter } from 'react-router-dom'
import {
    DesktopOutlined,
    PieChartOutlined,
  
    UserOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;
 class leftNav extends Component {
     
    render() {
        const selectKey = this.props.location.pathname;
    
        return (
            <div>
                <div className="logo"  style={{color:`red`}}><h2  style={{color:`red`}}>宁波银行 </h2> </div>
                <Menu theme="dark" defaultSelectedKeys={[{selectKey}]} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to="/index">首页</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        <Link to="/tea">讲师列表</Link>
                    </Menu.Item>

                    <SubMenu key="sub1" icon={<UserOutlined />} title="课程列表">
                        <Menu.Item key="3">运维</Menu.Item>
                        <Menu.Item key="4">大数据</Menu.Item>
                        <Menu.Item key="5">云计算</Menu.Item>
                    </SubMenu>

                </Menu>
            </div>
        )
    }
}
export default withRouter(leftNav)