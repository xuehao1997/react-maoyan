import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = props => {//打造路由导航组件
    return (
        <div className = 'nav'>
            <NavLink to = '/home/hot'></NavLink>
            <NavLink to = '/home/comming'></NavLink>
        </div>
    )
}
export default Nav;
