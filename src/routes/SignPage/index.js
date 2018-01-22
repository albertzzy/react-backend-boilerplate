import React from 'react';
import styles from './index.less';
import {Link} from 'react-router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


class SignPage extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }
    
    render(){
        const { getFieldDecorator } = this.props.form;

        return (
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.header}>
                    <Link to="/">
                        <img alt="logo" className={styles.logo} src={''} />
                        <span className={styles.title}>title</span>
                    </Link>
                    </div>
                    <div className={styles.desc}>this is subtitle</div>
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem label="账号" labelCol = { { offset:6,span: 3} } wrapperCol={ { span: 6} }>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input  placeholder="Username" className={styles['input-item']}/>
                        )}
                    </FormItem>
                    <FormItem label="密码" labelCol = { { offset:6,span: 3} } wrapperCol={ { span: 6} }>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input type="password" placeholder="Password" className={styles['input-item']}/>
                        )}
                    </FormItem>
                    <FormItem  wrapperCol={ { offset:9} }>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}

                        <a className={styles["login-form-forgot"]} href="">Forgot password</a>

                        <Button type="primary" htmlType="submit" className={styles["login-form-button"]}>
                            Log in
                        </Button>Or <a href="/register">register now!</a>
                    </FormItem>
                </Form>
                
            </div>

        )

    }

}


export default Form.create()(SignPage);