// import React, { Component } from 'react';
// import { Menu, Icon, Switch, Layout, Tooltip, Row, Col} from 'antd';
// import styles from "../../style/Demo-m.css";
// import {Link, Route, withRouter} from "react-router-dom";
// import Bundle from "../../router/AsyncLoader";
// import Follow from 'bundle-loader?lazy!.././mockPage/follow';
// import Demo from 'bundle-loader?lazy!../../ReactApp';
// import Tools from 'bundle-loader?lazy!../mockPage/tools';
//
// const List = (props,ListContainer) => (
//     <Bundle load={ListContainer}>
//         {(List) => <List />}
//     </Bundle>
// )
//
// const routerData = [
// {<Route path="/frame/follow"
//             component={(props) => List(props, Follow)}
//     />},
// {<Route path="/frame/home"
//         component={(props) => List(props, Demo)}
//         />},
// {
//     <Route path="/frame/tool/tools"
//            component={(props) => List(props, Tools)}
//     />
// }
// ]
