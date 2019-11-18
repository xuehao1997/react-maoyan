import React from 'react';
// import Tab from '../tab';
//引入css文件
import './index.scss'
import {NavLink} from 'react-router-dom'

const TabBar  = () => {
    //渲染底部按钮的ul标签
    const arrUl = [
        {
            id:1,
            path:'movie',
            text:'电影',
            icon:'fas fa-tv'
        },
        {
            id:2,
            path:'/cinema',
            text:'影院',
            icon:'fas fa-anchor'
        },
        {
            id:3,
            path:'/mine',
            text:'我的',
            icon:'fas fa-diagnoses'
        }
    ];
    //渲染列表的方法
    //这里必须要用const声明，不然报错
    const renderUl = () => {
        return arrUl.map( item => (
            <li key = {item.id} >
                <NavLink
                to = {item.path}
                
                >
                    <i className = { item.icon }>  </i>
                    <span> { item.text } </span>
                </NavLink>
            </li>
        ))   
    } 
    return (
        <footer>
            <ul>
                {/* 调用数据渲染方法 */}
                { renderUl() }
            </ul>
        </footer>
    )
} 
export default TabBar;