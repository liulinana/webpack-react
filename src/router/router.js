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
import React from 'react';
import {Provider} from 'react-redux';
import store from '.././model/store';
import Router from 'react-router-dom/Router';
import { Route, Redirect,browserHistory,Switch } from 'react-router';
import Frames from '.././page/layouts/frame';
import Login from '../page/login/login';
import createHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux'


const history = createHistory()
const location = history.location

export default class Routers extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store()}>
                <Router history={history}>
                    <Switch>
                    <Route exact={true} path="/" component={Login} />
                    <Route path="/frame" component={Frames} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}
