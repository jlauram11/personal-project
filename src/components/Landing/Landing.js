import React, { Component } from 'react';
import Login from '../Login/Login';
import Join from '../Join/Join';

class Landing extends Component {
    render () {
        return (
            <div>
                <p>Hello World!</p>
                <Login/>
                <Join/>
            </div>
        )
    }
}

export default Landing;