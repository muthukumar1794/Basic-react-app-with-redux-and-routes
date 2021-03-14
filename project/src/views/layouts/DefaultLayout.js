import React, { Component } from 'react'
import Header from './basicPages/Header'
import Home from './basicPages/Home'
import Footer from './basicPages/Footer'

export class DefaultLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Home />
                <Footer/>
            </div>
        )
    }
}

export default DefaultLayout
