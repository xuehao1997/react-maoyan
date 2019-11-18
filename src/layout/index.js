import React, { Component } from 'react'
import Tab from '../components/common/tab'
import TabBar from '../components/common/tabbar'
//路由的组件
import { Switch , Route , Redirect } from 'react-router-dom'
import Movie from '../pages/movies'
import Cinema from '../pages/cinema'
import Mine from '../pages/mine'
// import Home from '../pages/movies/Home'
// import NotFound from '../pages/notfound'
//引入样式文件

export default class index extends Component {
    render() {
        return (
            <div className = "layout">
                {/* 布局界面的展示区 */}
                <Tab></Tab>
                {/* 路由的打造 */}
                <Switch>
                    {/* 重定向 */}
                    <Redirect from = '/' to = '/movie' exact></Redirect>
                    <Route path = '/movie' component = { Movie }></Route>
                    {/* 二级路由 */}
                    {/* <Route path = '/home' component = { Home }></Route> */}
                    <Route path = '/cinema' component = {Cinema}></Route>
                    <Route path = '/mine' component = { Mine }></Route>
                    {/* <Route component = {NotFound}></Route> */}
                </Switch>
                <TabBar></TabBar>
            </div>
        )
    }
}
