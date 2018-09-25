// import React from 'react';
// import {BrowserRouter,Route,Switch } from 'react-router-dom'
// import Bundle from './AsyncLoader';
// import Frames from 'bundle-loader?lazy!.././page/layouts/frame';
//
// const List = (props,ListContainer) => (
//     <Bundle load={ListContainer}>
//         {(List) => <List />}
//     </Bundle>
// )
//
// export default class Routers extends React.Component {
//
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <BrowserRouter>
//                 <Switch>
//                     <Route exact path="/"
//                            component={(props) => List(props, Frames)}
//                     />
//                 </Switch>
//             </BrowserRouter>
//         )
//     }
// }
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import Frames from '.././page/layouts/frame';


export default class Routers extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Route path="/" component={Frames} />
                </div>
            </HashRouter>
        )
    }
}
