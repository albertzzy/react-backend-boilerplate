import React from 'react';
import {Link} from 'react-router';
import { Button } from 'antd';

class IndexPage extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                index page
                <Button type="primary">Primary</Button>
                <Link to = '/home/subhome'>subhomessssss</Link>
                {this.props.children}

            </div>

        )

    }


}


export default IndexPage;