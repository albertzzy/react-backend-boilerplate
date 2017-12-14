import React from 'react';
// import 'antd/dist/antd.css';

export default class App extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                {this.props.children}
            </div>

        )

    }

}


