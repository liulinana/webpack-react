import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Breadcrumb} from 'antd';


const breadcrumbNameMap = {
    '/frame/home': '首页',
    '/frame/follow': '项目地址',
    '/frame/tool':'工具模块',
    '/frame/tool/tools': '小应用',
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
