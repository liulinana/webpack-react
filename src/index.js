import React from 'react';
import ReactDom from 'react-dom';
import Routers from './router/router';
import 'antd/dist/antd.css'

// $('body').append('<p>Hello vendor</p>');

ReactDom.render(
    <Routers/>,
    document.getElementById('title')
)