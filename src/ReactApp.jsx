import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import styles from './style/Demo-m.css';
import {example} from './model/actions/index'
// import {Containerization} from './compents/PublicComponent';
import connect from "react-redux/es/connect/connect";

// @Containerization(state => ({
//     selectsData: state.example.selectsData,
// }))
class Demo extends Component{

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
                {this.state.aa}
                <img src={require('./images/u=1003924167,1029390060&fm=26&gp=0.jpg')} height='200' alt="logo" className={styles.lastPic} />
                {this.props.example.title}
            </Form>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        example: state.example.toJS()
    }
}
const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        actions: bindActionCreators(example, dispatch)
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Demo)
