import React from 'react'
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import {CONFIG} from '../../../utils/config'

function HomeComp() {
    return (
        <div>
               <h1>Home Component</h1>
             <Link to={CONFIG.Front_UI + "/child/component"}>Click here</Link> 
        </div>
    )
}

export default HomeComp
