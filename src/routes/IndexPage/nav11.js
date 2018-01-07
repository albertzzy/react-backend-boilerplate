import React from 'react';
import { Breadcrumb,Layout,Button  } from 'antd';
import {connect} from 'react-redux';


const {Content } = Layout;

function List({item}){
    return item.map( (p,i) => <p key={"li"+i}>{p.name}</p>)
}



class IndexPage extends React.Component{
    constructor(props){
        super(props)
    }

    getList(){
        this.props.getlist({
            type:'GET_LIST'
        })
    }

    componentDidMount(){
        this.getList();
    }

    render(){
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>nav1</Breadcrumb.Item>
                    <Breadcrumb.Item>nav11</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ margin: '0 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    this is nav1 index page  nav11
                    <List item={this.props.list}/>
                </Content>
            </div> 
        );
    }

}

function mapStateToProps(state,ownProps){
    console.log(state);
    return {
        list:state.nav11.list
    }

}


function mapDispatchToProps(dispatch,ownprops){
    return{
        getlist:()=>{dispatch({type:'GET_LIST'})}
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);