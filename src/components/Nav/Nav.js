import React, { Component } from 'react';
import Account from '../Account/Account';
import Characters from '../Characters/Characters';
import NameGenerator from '../NameGenerator/NameGenerator';
import Questionnaire from '../Questionnaire/Questionnaire';
import Traitmap from '../TraitMap/TraitMap';

class Nav extends Component {
    render () {
        return (
            <div>
                <Account/>
                <Characters/>
                <Traitmap/>
                <Questionnaire/>
                <NameGenerator/>
            </div>
        )
    }
}

export default Nav;