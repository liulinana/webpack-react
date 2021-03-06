import React, {Component} from 'react'
import { Form, Input, Button, notification, Icon, message, Row, Col } from 'antd'
import createHistory from 'history/createHashHistory'

import '../../style/login.less'
import styles from "../../style/Demo-m.css";

const FormItem = Form.Item;
const history = createHistory();

@Form.create()
export default class Login extends Component {
    componentDidMount() {
        // this.openNotificationWithIcon('info')
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let n = this.props.form.getFieldsValue().username;
        let p = this.props.form.getFieldsValue().password;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (n === '123' && p === '123') {
                    // 表单的路由处理
                    message.success("登陆成功!")
                    this.props.history.push('/frame');
                } else if (n === '123' && p !== '123') {
                    message.error("请输入正确的密码！")
                } else {
                    message.error("请输入正确的用户名字！")
                }
            }
        });

    };

    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon = (type) => {
        notification[type]({
            message: '用户名&密码',
            description: '都是：123',
            duration: 6,
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
        })
    };

    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <div className="loginpagewrap">
                <img src={require('../../images/u=989126329,3795867150&fm=26&gp=0.jpg')} width="100%" height="100%" alt="logo"/>
                <div className="box">
                    <img src={require('../../images/u=2480352879,2590353252&fm=26&gp=0.jpg')} style={{float:'top'}} height='200' alt="logo" className={styles.lastPic} />
                    <p>小仙女才能登陆的系统</p>
                    <div className="loginWrap">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input placeholder="Username：123" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input type="password" placeholder="Password：123" />,
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
                            <Row style={{marginTop: 20, marginLeft: 15, color:"#aaaaaa"}}>
                                <Col span={14}>username:123 </Col>
                                <Col span={9}>password:123 </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

