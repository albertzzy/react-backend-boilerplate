import React from 'react';
import {Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import style from './index.less';


// import 'antd/dist/antd.css';

export default class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            collapsed: false,
            mode: 'inline',
        };

        this.onCollapse = this.onCollapse.bind(this);
    }

    onCollapse(collapsed){
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }

    render(){
        return (
            <Layout>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className={style["logo"]}>
                        logo
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['sm1']} defaultOpenKeys={['m1']}>
                        <SubMenu key="m1" title={<span><Icon type="user" />nav 1</span>}>
                            <Menu.Item key="sm1"><Link to="/">选项1</Link></Menu.Item>
                            <Menu.Item key="sm2"><Link to="/nav12">选项2</Link></Menu.Item>
                            <Menu.Item key="sm3"><Link to="/nav13">选项3</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="m2">
                            <Icon type="video-camera" />
                            <span className="nav-text">nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="m3">
                            <Icon type="upload" />
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                            
                    </Header>
                    
                    {this.props.children}
                </Layout>
            </Layout>

        )

    }

}


