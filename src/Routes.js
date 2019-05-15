import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Homepage from './components/Homepage/Homepage';
import Join from './components/Join/Join';
import Login from './components/Login/Login';
import Questionnaire from './components/Questionnaire/Questionnaire';
import TraitMap from './components/TraitMap/TraitMap';
import Account from './components/Account/Account';
import Characters from './components/Characters/Characters';
import NameGenerator from './components/NameGenerator/NameGenerator';

class Routes extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path = '/' component = {Homepage}/>
                    <Route path = '/landing' component = {Landing}/>
                    <Route path = '/join' component = {Join}/>
                    <Route path = '/login' component = {Login}/>
                    <Route path = '/questionnaire' component = {Questionnaire}/>
                    <Route path = '/traitmap' component = {TraitMap}/>
                    <Route path = '/account' component = {Account}/>
                    <Route path = '/characters' component = {Characters}/>
                    <Route path = '/namegenerator' component = {NameGenerator}/>
                </Switch>
            </div>
        )
    }
}

export default Routes;