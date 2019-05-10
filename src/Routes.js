import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Homepage from './components/Homepage/Homepage';

class Routes extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path = '/' compononent = {Homepage}/>
                    <Route path = '/landingpage' compononent = {Landing}/>
                </Switch>
            </div>
        )
    }
}

export default Routes;