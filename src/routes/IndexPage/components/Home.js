import React from 'react';
import {Link} from 'react-router';
import { Button,Icon,Alert } from 'antd';
import '../styles/home.less';

class IndexPage extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                index pages
                <p>test style</p>
                <Button type="primary">Primary</Button>
                <Icon type="question" style={{ fontSize: 16, color: '#08c' }} />
                <Link to = '/home/subhome'>subhomessssss</Link>
                <Alert message="Success Tips" type="success" showIcon />
                {this.props.children}

            </div>

        )

    }


}


export default IndexPage;