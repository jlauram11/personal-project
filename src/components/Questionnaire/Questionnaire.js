import React, { Component } from 'react';
import axios from 'axios';

import Nav from '../Nav/Nav';

class Questionnaire extends Component {
    constructor() {
        super ()
        this.state = {
            questions: [],
            randomizedQuestions: [],
        }
    }

    componentDidMount = () => {
        this.getQuestions();
    }
    
    getQuestions = () => {
        axios.get(`/api/quiz`).then(res => {
            this.setState({
                questions: res.data
            })
        }).catch(err => console.log(err))
    }

    render () {
        let questions = this.state.questions.map((question, i) => {
            if (question.descending_order === true) {
                return (
                <div key={question.id}>
                         <ol>{question.question}</ol>
                         <input type='radio' value = '4'/> Strongly Agree <br/> 
                         <input type='radio' value = '3' /> Somewhat Agree <br/>
                         <input type='radio' value = '2' /> Neither Agree nor Disagree <br/>
                         <input type='radio' value = '1' /> Somewhat Disagree<br/>
                         <input type='radio' value = '0' /> Strongly Disagree <br/>
                </div>
            )}
             else {
                return (
                    <div key={question.id}>
                         <ol>{question.question}</ol>
                         <input type='radio' value = '0'/> Strongly Agree <br/> 
                         <input type='radio' value = '1' /> Somewhat Agree <br/>
                         <input type='radio' value = '2' /> Neither Agree nor Disagree <br/>
                         <input type='radio' value = '3' /> Somewhat Disagree<br/>
                         <input type='radio' value = '4' /> Strongly Disagree <br/>
                    </div>
            )}
        })

        return (
            <div>
                <Nav/>
                {questions}
                <button type='submit'> Get Results </button>
            </div>
        )
    }
 }

 export default Questionnaire;