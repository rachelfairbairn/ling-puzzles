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

    addMorphology() {
        const url = 'https://ling-puzzles.firebaseio.com/';
        // const exercises = {
        //         question: question,
        //         answer: answer,
        //         value: ''
        //     };
        let lang = {
            langOne: {
                name: "Zulu",
                languageFamily: "(Bantu << Niger-Congo)",
                instructions: "Consider the following nouns in Zulu and proceed to look for the recurring forms.",
                task1: "What is the Zulu morpheme for:",
                task2: "What is the English translation for:",
                reverseTranscriptionStartIndex: 7,
                exampleData: {
                    umfazi: "married woman",
                    umfani: "boy",
                    umzali: "parent",
                    umfundisi: "teacher",
                    umlimi: "farmer",
                    umdlali: "player",
                    abafazi: "married women",
                    abafani: "boys",
                    abazali: "parents",
                    ababazi: "carvers",
                    abalimi: "farmers",
                    abadlali: "players",
                    abafundi: "readers"
                },
                exercises: [
                    {
                        answer: 'um',
                        question: 'singular',
                        value: ''
                    }, 
                    {
                        answer: 'aba',
                        question: 'plural',
                        value: ''
                    }, 
                    {
                        answer: 'i',
                        question: 'Nominal (noun) suffix',
                        value: ''
                    }, 
                    {
                        answer: 'a',
                        question: 'Verbal suffix',
                        value: ''
                    }, 
                    {
                        answer: 'lim',
                        question: 'Bound root meaning "farm"',
                        value: ''
                    }, 
                    {
                        answer: 'fundis',
                        question: 'Bound root meaning "teach"',
                        value: ''
                    }, 
                    {
                        answer: 'dlal',
                        question: 'Bound root meaning "play"',
                        value: ''
                    }, 
                    {
                        answer: 'teachers',
                        question: 'abafundisi',
                        value: ''
                    }, 
                    {
                        answer: 'carver',
                        question: 'umbazi',
                        value: ''
                    }, 
                    {
                        answer: 'reader',
                        question: 'umfundi',
                        value: ''
                    }
                ],
                totalCorrect: 0,
                validAnswers: false,
                showScore: false
            },
            langTwo: {
                name: "Cebuano",
                languageFamily: "(Central Philippine << Austronesian)",
                instructions: "Here are some nouns from the Philippine language Cebuano.",
                task1: "What is the Cebuano translation for:",
                task2: "What is the English translation for:",
                reverseTranscriptionStartIndex: 4,
                exampleData: {
                    sibwano: "a Cebuano",
                    ilokano: "an Ilocano",
                    inglis: "an Englishman",
                    bisaja: "a Visayan",
                    ininglis: "the English language",
                    tinagalog: "the Tagalog language",
                    inilokano: "the Ilocano language",
                    sinibwano: "the Cebuano language",
                    furanso: "A French person",
                    unagari: "A Hungarian person",
                    sinuwid: "The Swedish language",
                    italo: "An Italian person"
                },
                exercises: [
                    {
                        answer: 'in',
                        question: 'language (of)',
                        value: ''
                    }, 
                    {
                        answer: 'finuranso',
                        question: 'The french language',
                        value: ''
                    }, 
                    {
                        answer: 'suwid',
                        question: 'A Swedish person',
                        value: ''
                    }, 
                    {
                        answer: 'initalo',
                        question: 'The Italian language',
                        value: ''
                    }, 
                    {
                        answer: 'The Visayan language',
                        question: 'binisaja',
                        value: ''
                    }, 
                    {
                        answer: 'The Hungarian language',
                        question: 'inunagari',
                        value: ''
                    }, 
                    {
                        answer: 'A Tagalog person',
                        question: 'tagalog',
                        value: ''
                    }
                ],
                totalCorrect: 0,
                validAnswers: false,
                showScore: false
            }
        }

        axios.put(url + '/morphology' + '.json', lang)
        .then(res => {
            // this.setState({
            //     question: '',
            //     answer: '',
            // });
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

    toggleMorphologyAnswersHandler = () => {
        axios.patch('https://ling-puzzles.firebaseio.com/morphology.json', {showAnswers: !this.props.showMorphologyAnswers})
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        this.props.onToggleMorphologyAnswers();
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
                <div>
                    <Button 
                        btnType={this.props.showMorphologyAnswers ? "Danger" : "Success"} 
                        clicked={this.toggleMorphologyAnswersHandler}>
                        {this.props.showMorphologyAnswers ? 'HIDE MORPHOLOGY ANSWERS' : 'SHOW MORPHOLOGY ANSWERS'}
                    </Button>
                </div>
                <Button 
                    btnType="Success" 
                    clicked={() => this.addMorphology()}>ADD MORPHOLOGY</Button>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showPhoneticsAnswers: state.phonetics.showAnswers,
        showMorphologyAnswers: state.morphology.showAnswers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTogglePhoneticsAnswers: () => dispatch(actions.togglePhoneticsAnswers()),
        onToggleMorphologyAnswers: () => dispatch(actions.toggleMorphologyAnswers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);