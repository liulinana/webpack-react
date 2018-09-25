import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Breadcrumb} from 'antd';
// import Routers from '../router/router';
//
const breadcrumbNameMap = {
    '/home': '首页',
    '/follow': '项目地址',
    '/tool':'工具模块',
    '/tools': '小应用',
    '/apps/1/detail': 'Detail',
    '/apps/2/detail': 'Detail',
};
@withRouter
export default class Breadcrumbs extends Component{

    constructor(props){
        super(props)
        this.state={
            data:new Date(),
            aa:'66666666666',
            extraBreadcrumbItems:null,
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.location.pathname !== this.props.location.pathname){
            this.setBreadCrumItem(nextProps);
        }
    }

    componentWillMount(){
        debugger

        this.setBreadCrumItem(this.props);
    }

    setBreadCrumItem(props){
        const { location } = props;
        const pathSnippets = location.pathname.split('/').filter(i => i);
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>
                        {breadcrumbNameMap[url]}
                    </Link>
                </Breadcrumb.Item>
            );
        });
        this.setState({extraBreadcrumbItems:extraBreadcrumbItems})
//         const breadcrumbItems = [(
//     <Breadcrumb.Item key="home">
//         <Link to="/">Home</Link>
//     </Breadcrumb.Item>
// )].concat(extraBreadcrumbItems);
//         return (
//         <div className="demo">
//             <Breadcrumb>
//                 {breadcrumbItems}
//             </Breadcrumb>
//         </div>
//     );
    }


    render () {
        const { extraBreadcrumbItems } = this.state;
        return (
            <div style={{marginTop: 10, marginBottom: 10}}>
                <Breadcrumb>
                {extraBreadcrumbItems}
                </Breadcrumb>
            </div>
        )
    }
}
