import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import styles from './style/Demo-m.css';

export default class Demo extends Component{

    constructor(props){
        super(props)
        this.state={
            data:new Date(),
            aa:'2'
        }
    }


    render () {
        return (
            <Form className={styles.red}>
                <Button type='primary'>查询</Button>
                <br/>
                {this.state.aa}
            </Form>
        )
    }
}