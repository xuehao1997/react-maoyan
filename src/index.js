import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import './assets/style/reset.scss'
import store from './store'
//引入配置rem文件,因为要在全局使用
import './utils/rem.js'
//引入路由，起别名
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
    //用Provider组件包裹App
    //provider组件身上要绑定store
    <Provider store = { store }>
        <Router>
        <App />
        </Router>
    </Provider>, 
        document.getElementById('root')
);
serviceWorker.unregister();
