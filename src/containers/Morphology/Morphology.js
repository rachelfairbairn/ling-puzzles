import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Morphology.module.css';
import * as actions from '../../store/actions/index';

import southAfricaFlagPath from '../../resources/images/south-africa-flag-square-medium.png';
import philippinesFlag from '../../resources/images/philippines-flag-square-medium.png';

import Header from '../../components/UI/Header/Header';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import ExampleData from '../../components/ExampleData/ExampleData';
import QuestionAndFill from '../../components/QuestionAndFill/QuestionAndFill';
import ModalButtons from '../../components/ModalButtons/ModalButtons';

class Morphology extends Component {
    
    state = {
        showLangOne: false,
        showLangTwo: false
    }

    componentDidMount() {
        if(this.props.langOne.exercises.length === 0){
            this.props.loadMorphologyData();
        }
    }

    modalClosedHandler = () => {
        this.setState({
            showLangOne: false,
            showLangTwo: false,
        });
    }

    exerciseClickedHandler = (exerciseName) => {
        this.setState({[exerciseName]: true});
    }

    render () {

        // let languages = {cebuano, zulu, samoan, italian, turkish, chickasaw}

        return (
            <div className={classes.Morphology}>
                <Header type="h1">Morphology</Header>
                <ul style={{textAlign:'left'}}>
                    <li>For each puzzle below, examine the data given and answer the questions.  
                        When asked for an individual morpheme, if the answer is a bound morpheme such as prefix, 
                        suffix, infix, or bound root, do not include the hyphens. The program will mark it as incorrect. 
                        For example, if asked to give the agentive suffix in English, your answer would be “er”, 
                        instead of “-er”.    Exercises adapted from Fromkin, Rodman and Hyams, 2017. 
                        An Introduction to Language. 11e. Cengage.</li>
                    <li>You may want to record or screenshot your answers in order to compare with the answer key when it's released.</li>
                    <li>Save a PDF of your scores on the Progress page and upload it to the activity forum.</li>
                    <li style={{color:'red'}}>Closing or refreshing the page will clear your entries.</li>
                </ul>

                <div className={classes.LanguageCard}>
                    <Button 
                        btnType="Img"
                        clicked={() => this.exerciseClickedHandler('showLangOne')}>
                        <img style={{width:"100%"}} src={southAfricaFlagPath} alt="south african flag" />
                        <br/>{this.props.langOne.name}
                    </Button>
                </div>
                <div className={classes.LanguageCard}>
                    <Button 
                        btnType="Img"
                        clicked={() => this.exerciseClickedHandler('showLangTwo')}>
                        <img style={{width:"100%"}} src={philippinesFlag} alt="philippines flag" />
                        <br/>{this.props.langTwo.name}
                    </Button>
                </div>
                
                <Modal 
                    show={this.state.showLangOne} 
                    modalClosed={this.modalClosedHandler}>
                    <h1>{this.props.langOne.name}</h1>
                    <h3>{this.props.langOne.languageFamily}</h3>
                    <p>{this.props.langOne.instructions}</p>
                    <ExampleData exampleData={this.props.langOne.exampleData} />
                    <QuestionAndFill 
                        exerciseTask1={this.props.langOne.task1}
                        exerciseTask2={this.props.langOne.task2}
                        startIndex={this.props.langOne.reverseTranscriptionStartIndex}
                        exercises={this.props.langOne.exercises}
                        inputChanged={this.props.onMorphologyInputChanged}
                        showAnswers={this.props.showAnswers}
                        lang="langOne" />
                    <ModalButtons
                        closed={this.modalClosedHandler}
                        exercises={this.props.langOne.exercises}
                        totalCorrect={this.props.langOne.totalCorrect}
                        showScore={this.props.langOne.showScore}
                        showAnswers={this.props.showAnswers}
                        checkScore={this.props.onMorphologyCheckScore}
                        lang="langOne" />
                </Modal>  
                <Modal 
                    show={this.state.showLangTwo} 
                    modalClosed={this.modalClosedHandler}>
                    <h1>{this.props.langTwo.name}</h1>
                    <h3>{this.props.langTwo.languageFamily}</h3>
                    <p>{this.props.langTwo.instructions}</p>
                    <ExampleData exampleData={this.props.langTwo.exampleData} />
                    <QuestionAndFill 
                        exerciseTask1={this.props.langTwo.task1}
                        exerciseTask2={this.props.langTwo.task2}
                        startIndex={this.props.langTwo.reverseTranscriptionStartIndex}
                        exercises={this.props.langTwo.exercises}
                        inputChanged={this.props.onMorphologyInputChanged}
                        showAnswers={this.props.showAnswers}
                        lang="langTwo" />
                    <ModalButtons
                        closed={this.modalClosedHandler}
                        exercises={this.props.langTwo.exercises}
                        totalCorrect={this.props.langTwo.totalCorrect}
                        showScore={this.props.langTwo.showScore}
                        showAnswers={this.props.showAnswers}
                        checkScore={this.props.onMorphologyCheckScore}
                        lang="langTwo" />
                </Modal>  
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        langOne: state.morphology.langOne,
        langTwo: state.morphology.langTwo,
        showAnswers: state.morphology.showAnswers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMorphologyInputChanged: (value, inputIndex, lang) => dispatch(actions.morphologyInputChanged(value, inputIndex, lang)),
        onMorphologyCheckScore: (lang) => dispatch(actions.morphologyCheckScore(lang)),
        loadMorphologyData: () => dispatch(actions.loadMorphologyData())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Morphology);