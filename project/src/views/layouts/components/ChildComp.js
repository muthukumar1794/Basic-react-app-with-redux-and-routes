import React from 'react'
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import {CONFIG} from '../../../utils/config'

function ChildComp() {
    return (
        <div>
            <h1>Hello !! from child component</h1>
            <Link to={CONFIG.Front_UI + "/home"}>Back to Home</Link>
        </div>
    )
}

export default ChildComp
