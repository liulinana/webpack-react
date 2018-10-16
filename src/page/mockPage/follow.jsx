import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import {ajaxHoc} from '../../untils/ajax';
import styles from '../../style/Demo-m.css';

@ajaxHoc()
export default class Follow extends Component{

    constructor(props){
        super(props)
        this.state={
            data:new Date(),
            aa:'66666666666',
            getAllTables:"",
        }
    }

    componentWillMount() {
        this.props.ajax
            .get(`/hbase/getAllTables?operType=${"啊啊啊"}`)
            .then(
                (res) => {
                    this.setState({getAllTables: res.info})

                })
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