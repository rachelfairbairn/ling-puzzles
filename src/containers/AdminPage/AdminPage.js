import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios';
import * as actions from '../../store/actions/index';
import Header from '../../components/UI/Header/Header';
import Input from '../../components/UI/Input/Input';
import Aux from '../../hoc/Aux/Aux';
import Button from '../../components/UI/Button/Button';

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

    inputChangedHandler(event, inputIdentifier) {
        this.setState({
            [inputIdentifier]: event.target.value
        });
    }

    render() {
        return (
            <Aux>
                <Header type="h1">Admin Page</Header>
                <div style={{width:'200px', margin:'auto'}}>
                    <p>Add a question</p>
                    <select onChange={(event) => this.inputChangedHandler(event, 'type')}>
                        <option value="engIpa">English To IPA</option>
                        <option value="ipaEng">IPA To English</option>
                        <option value="videoIpa">Video To IPA</option>
                    </select>
                    <Input value={this.state.question} changed={(event) => this.inputChangedHandler(event, 'question')} />
                    <Input value={this.state.answer} changed={(event) => this.inputChangedHandler(event, 'answer')} />
                    <Button btnType="Success" clicked={() => this.addExerciseHandler(this.state.question, this.state.answer, '/phonetics/' + this.state.type)}>ADD</Button>
                </div>
                <div>
                    <Button 
                        btnType={this.props.showPhoneticsAnswers ? "Danger" : "Success"} 
                        clicked={this.props.onTogglePhoneticsAnswers}>
                        {this.props.showPhoneticsAnswers ? 'HIDE PHONETICS ANSWERS' : 'SHOW PHONETICS ANSWERS'}
                    </Button>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showPhoneticsAnswers: state.phonetics.showPhoneticsAnswers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTogglePhoneticsAnswers: () => dispatch(actions.togglePhoneticsAnswers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);