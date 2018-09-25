// import React, { Component } from 'react';
// import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
// import { Breadcrumb} from 'antd';
// // import Routers from '../router/router';
// //
// const breadcrumbNameMap = {
//     '/apps': 'Application List',
//     '/apps/1': 'Application1',
//     '/apps/2': 'Application2',
//     '/apps/1/detail': 'Detail',
//     '/apps/2/detail': 'Detail',
// };
// //
// // const Home = withRouter((props) => {
// //     const { location } = props;
// //     const pathSnippets = location.pathname.split('/').filter(i => i);
// //     const extraBreadcrumbItems = pathSnippets.map((_, index) => {
// //         const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
// //         return (
// //             <Breadcrumb.Item key={url}>
// //                 <Link to={url}>
// //                     {breadcrumbNameMap[url]}
// //                 </Link>
// //             </Breadcrumb.Item>
// //         );
// //     });
// //     const breadcrumbItems = [(
// //         <Breadcrumb.Item key="home">
// //             <Link to="/">Home</Link>
// //         </Breadcrumb.Item>
// //     )].concat(extraBreadcrumbItems);
// //     return (
// //         <div className="demo">
// //             <Breadcrumb>
// //                 {breadcrumbItems}
// //             </Breadcrumb>
// //         </div>
// //     );
// // });
// @withRouter
// export default class Breadcrumbsss extends Component{
//
//     constructor(props){
//         super(props)
//         this.state={
//             data:new Date(),
//             aa:'66666666666'
//         }
//     }
//     setBreadCrumItem(props){
//         const { location } = props;
//         const pathSnippets = location.pathname.split('/').filter(i => i);
//         const extraBreadcrumbItems = pathSnippets.map((_, index) => {
//             const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
//             return (
//                 <Breadcrumb.Item key={url}>
//                     <Link to={url}>
//                         {breadcrumbNameMap[url]}
//                     </Link>
//                 </Breadcrumb.Item>
//             );
//         });
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
//     }
//
//
//     render () {
//         return (
//             <div>
//             {this.setBreadCrumItem}
//             </div>
//         )
//     }
// }
