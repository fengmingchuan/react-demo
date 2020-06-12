import  React,{Component} from  'react'

import Main from  './layout'
import Sub from './subject'
import Tea from './teachers'
import Info from './showInfo'
import Index from './index'
import NewsDetail from './detailNew'
import New  from './nws'
import  Up  from './userFrom'
import {Switch,BrowserRouter as Router, Route,Redirect } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import  LeftNav  from  '../left-nav/index'
import './lay.css'
import index from './index'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default      class SiderDemo extends Component {     
    state = {
      collapsed: false,
    };
  
    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    };
  
    render() {
      return (
           <Router>
        <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
             <LeftNav/>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} ><h2 style={{margin:'0 16px'}}>欢迎来到后台管理系统</h2></Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div key="children" className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                   
              
                
                <Switch>
                 <Route  path="/index" component={Index} />
               
                 <Route exact  path="/tea"  component={Tea} />
                 <Route   path="/tea/update/:id" component={ Up } />
                 {/* <Route path="/sub/:name" render={(props) => <div>{props.match.params.name}</div>}/>
              
                 <Route exact path="/new"  component={New} />
                 <Route path="/new/:id" component={NewsDetail}/>
                 <Route path="/tea/info" component={Info} /> */}
                 {/* <Route path="/"  render={(props)=><Main {...props} /> } /> */}
                
                                   </Switch>
           
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
     
        </div>
        </Router> 
      );
    
    }
  }