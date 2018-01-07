import React from 'react';
import { Breadcrumb,Layout } from 'antd';

const {Content } = Layout;

class IndexPage extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>nav1</Breadcrumb.Item>
                    <Breadcrumb.Item>nav13</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ margin: '0 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    this is nav13
                </Content>
            </div>
        );
    }

}


export default IndexPage;