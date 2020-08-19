import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Header from '../../../components/UI/Header/Header';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import Score from '../../../components/UI/Score/Score';
import '../../../globalStyles.css';
import { updateObject } from '../../../utils/utils';

class EnglishToIpa extends Component {

    state = {
        questions: {
            1: {
                given: 'Beet', 
                answer: 'a', 
                value: ''
            },
            2: {
                given: 'Bit', 
                answer: 'a', 
                value: ''
            },
            3: {
                given: 'Bet', 
                answer: 'a', 
                value: ''
            },
            4: {
                given: 'Bait', 
                answer: 'a', 
                value: ''
            },
            5: {
                given: 'Boot', 
                answer: 'a', 
                value: ''
            }
        },
        validAnswers: false,
        showScore: false,
        totalCorrect: 0
    }

    inputChangedHandler = (event, index) => {
        const updatedQuestion = updateObject(this.state.questions[index], {
            value: event.target.value,
        });
        const updatedQuestions = updateObject(this.state.questions, {
            [index]: updatedQuestion
        });

        let validAnswers = true;
        let showScore = this.state.showScore;
        for(let i in updatedQuestions){
            if(updatedQuestions[i].value.length === 0){
                validAnswers = false;
                showScore = false;
                break;
            }
        }

        this.setState({questions: updatedQuestions, validAnswers: validAnswers, showScore: showScore});
    }

    checkScoreHandler = () => {
        let score = 0;
        for(let question in this.state.questions){
            if(question.value === question.answer){
                score++;
            }
        }
        this.setState({totalCorrect: score, showScore: true});
    }

    render () {
        const questions = Object.keys(this.state.questions).map((index) => {
            return (
                <div className="row">
                    <div className="column-25">
                        <p>{this.state.questions[index].given}</p>
                    </div>
                    <div className="column-75">
                        <Input 
                            value={this.state.questions[index].value}
                            changed={(event) => this.inputChangedHandler(event, index)} />
                    </div>
                </div>
            );
        });

        return (
            <Aux>
                <Header type="h2">English &rarr; IPA</Header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                {questions}
                <Button btnType="Info" disabled={!this.state.validAnswers} clicked={this.checkScoreHandler}>CHECK SCORE</Button>
                <Button btnType="Success" clicked={this.props.closed}>SAVE & CLOSE</Button>
                <Score correct={this.state.totalCorrect} total={Object.keys(this.state.questions).length} show={this.state.showScore&&this.state.validAnswers} />
            </Aux>
        );
    }
}

export default EnglishToIpa;