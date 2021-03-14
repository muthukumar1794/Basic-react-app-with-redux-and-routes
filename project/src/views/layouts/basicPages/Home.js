import React, { Component } from 'react'
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import {CONFIG} from '../../../utils/config'
import ChildComp from '../components/ChildComp';
import HomeComp from '../components/HomeComp';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

   
    
    render() {
        return (
            <div>
               <Switch>
							<Route exact path={CONFIG.Front_UI + "/child/component"}> <ChildComp /> </Route>
                        
                            <Route exact path={CONFIG.Front_UI + "/home"}> <HomeComp /> </Route>
                </Switch>
                          
            </div>
        )
    }
}

export default Home
