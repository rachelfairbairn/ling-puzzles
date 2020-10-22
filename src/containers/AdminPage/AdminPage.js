import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios';
import * as actions from '../../store/actions/index';
import Header from '../../components/UI/Header/Header';
import Input from '../../components/UI/Input/Input';
import Aux from '../../hoc/Aux/Aux';
import Button from '../../components/UI/Button/Button';
import classes from './AdminPage.module.css';

class AdminPage extends Component {

    state = {
        question: '',
        answer: '',
        type: 'engIpa'
    }

    addExerciseHandler(question, answer, path) {
        const url = 'https://ling-puzzles.firebaseio.com/';
        const exercises = {
                question: question,
                answer: answer,
                value: ''
            };
        axios.post(url + path + '.json', exercises)
        .then(res => {
            this.setState({
                question: '',
                answer: '',
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    togglePhoneticsAnswersHandler = () => {
        axios.patch('https://ling-puzzles.firebaseio.com/phonetics.json', {showAnswers: !this.props.showPhoneticsAnswers})
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        this.props.onTogglePhoneticsAnswers();
    }

    inputChangedHandler(event, inputIdentifier) {
        this.setState({
            [inputIdentifier]: event.target.value
        });
    }

    render() {
        return (
            <Aux>
                <Header type="h1">Admin Page</Header>
                <div className={classes.AddQuestion}>
                    <h2>Add a question</h2>
                    <select onChange={(event) => this.inputChangedHandler(event, 'type')}>
                        <option value="engIpa">English To IPA</option>
                        <option value="ipaEng">IPA To English</option>
                        <option value="videoIpa">Video To IPA</option>
                    </select>
                    <Input 
                        value={this.state.question} 
                        changed={(event) => this.inputChangedHandler(event, 'question')}
                        placeholder="question" />
                    <Input 
                        value={this.state.answer} 
                        changed={(event) => this.inputChangedHandler(event, 'answer')}
                        placeholder="answer" />
                    <Button 
                        btnType="Success" 
                        clicked={() => this.addExerciseHandler(this.state.question, this.state.answer, '/phonetics/' + this.state.type)}>ADD</Button>
                </div>
                <div>
                    <Button 
                        btnType={this.props.showPhoneticsAnswers ? "Danger" : "Success"} 
                        clicked={this.togglePhoneticsAnswersHandler}>
                        {this.props.showPhoneticsAnswers ? 'HIDE PHONETICS ANSWERS' : 'SHOW PHONETICS ANSWERS'}
                    </Button>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showPhoneticsAnswers: state.phonetics.showAnswers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTogglePhoneticsAnswers: () => dispatch(actions.togglePhoneticsAnswers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);