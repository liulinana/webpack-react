import React from 'react';
import Bundle from './AsyncLoader';
import {Provider} from 'react-redux';
import store from '.././model/store';
import { Route, Redirect,Switch, } from 'react-router';
import {BrowserRouter } from 'react-router-dom'
import Login from 'bundle-loader?lazy!.././page/login/login';
import Frames from 'bundle-loader?lazy!.././page/layouts/frame';
import createHistory from 'history/createBrowserHistory';


const history = createHistory()
const location = history.location
const List = (props,ListContainer) => (
    <Bundle load={ListContainer}>
        {(List) => <List {...props} />}
    </Bundle>
)

export default class Routers extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store()}>
                <BrowserRouter >
                    <Switch>
                        <Route exact={true} path="/"
                               component={(props) => List(props, Login)}
                        />
                        <Route path="/frame"
                               component={(props) => List(props, Frames)}
                        />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}
