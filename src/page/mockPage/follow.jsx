import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import styles from '../../style/Demo-m.css';

export default class Follow extends Component{

    constructor(props){
        super(props)
        this.state={
            data:new Date(),
            aa:'66666666666'
        }
    }

    render () {
        return (
            <Form className={styles.red}>
                <Button type='primary'>查询</Button>
                <br/>
                姓名：<Input style={{width: 400}} defaultValue={this.state.data}/>
                {this.state.aa}
            </Form>
        )
    }
}