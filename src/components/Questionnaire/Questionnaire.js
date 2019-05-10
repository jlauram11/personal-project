import React, { Component } from 'react';
import axios from 'axios';

class Questionnaire extends Component {
    constructor() {
        super ()
        this.state = {
            questions: {},
            randomizedQuestions: {},
        }
    }

    componentDidMount(){
        this.getQuestions();
    }
    
    getQuestions = () => {
        axios.get(`/api/questionnaire`).then(
            this.setState({
                questions: Response.data
            })
        )
    }

    render () {
        return (
            <div>
                
            </div>
        )
    }
 }

 export default Questionnaire;