import React, { Component } from 'react'
import Nav from './Nav'
import { Route } from 'react-router-dom'
import Hot from './index'
import Comming from './Comming'
export default class Home extends Component {
    render() {
        return (
            <div className = "container">
                <Nav></Nav>
                <Route
                path = "/home/hot"
                component = { Hot }
                ></Route>
                <Route
                path = "/home/comming"
                component = { Comming }
                >

                </Route>
            </div>
        )
    }
}
