import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Morphology.module.css';
import * as actions from '../../store/actions/index';

import southAfricaFlagPath from '../../resources/images/south-africa-flag-square-medium.png';
import philippinesFlag from '../../resources/images/philippines-flag-square-medium.png';
import samoanFlag from '../../resources/images/samoa-flag-square-medium.png';
import italianFlag from '../../resources/images/italy-flag-square-medium.png';
import turkishFlag from '../../resources/images/turkey-flag-square-medium.png';
import chickasawFlag from '../../resources/images/chickasaw-flag.gif';
import questionMark from '../../resources/images/question-mark.png';

import Header from '../../components/UI/Header/Header';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import ExampleData from '../../components/ExampleData/ExampleData';
import QuestionAndFill from '../../components/QuestionAndFill/QuestionAndFill';
import ModalButtons from '../../components/ModalButtons/ModalButtons';

class Morphology extends Component {
    
    state = {
        showLangOne: false,
        showLangTwo: false,
        showLangThree: false,
        showLangFour: false,
        showLangFive: false,
        showLangSix: false,
        showBonus: false
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
            showLangThree: false,
            showLangFour: false,
            showLangFive: false,
            showLangSix: false,
            showBonus: false
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
                <div className={classes.Instructions}>
                    <p>For each puzzle below, examine the data given and answer the questions.  
                            When asked for an individual morpheme, if the answer is a bound morpheme such as prefix, 
                            suffix, infix, or bound root, do not include the hyphens. The program will mark it as incorrect. 
                            For example, if asked to give the agentive suffix in English, your answer would be “er”, 
                            instead of “-er”.</p>
                    <ul style={{textAlign:'left'}}>
                        <li>Click the "Download results" button on the Progress page and submit to the activity forum on Laulima.</li>
                        <li style={{color:'red'}}>Closing or refreshing the page will clear your entries.</li>
                    </ul>
                </div>

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
                <div className={classes.LanguageCard}>
                    <Button 
                        btnType="Img"
                        clicked={() => this.exerciseClickedHandler('showLangThree')}>
                        <img style={{width:"100%"}} src={samoanFlag} alt="samoan flag" />
                        <br/>{this.props.langThree.name}
                    </Button>
                </div>
                <div className={classes.LanguageCard}>
                    <Button 
                        btnType="Img"
                        clicked={() => this.exerciseClickedHandler('showLangFour')}>
                        <img style={{width:"100%"}} src={italianFlag} alt="italian flag" />
                        <br/>{this.props.langFour.name}
                    </Button>
                </div>
                <div className={classes.LanguageCard}>
                    <Button 
                        btnType="Img"
                        clicked={() => this.exerciseClickedHandler('showLangFive')}>
                        <img style={{width:"100%"}} src={turkishFlag} alt="turkish flag" />
                        <br/>{this.props.langFive.name}
                    </Button>
                </div>
                <div className={classes.LanguageCard}>
                    <Button 
                        btnType="Img"
                        clicked={() => this.exerciseClickedHandler('showLangSix')}>
                        <img style={{width:"100%"}} src={chickasawFlag} alt="chickasaw flag" />
                        <br/>{this.props.langSix.name}
                    </Button>
                </div>
                <div className={classes.LanguageCard}>
                    <Button 
                        btnType="Img"
                        clicked={() => this.exerciseClickedHandler('showBonus')}>
                        <img style={{width:"100%"}} src={questionMark} alt="question mark" />
                        <br/>{this.props.bonus.name}
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
                <Modal 
                    show={this.state.showLangThree} 
                    modalClosed={this.modalClosedHandler}>
                    <h1>{this.props.langThree.name}</h1>
                    <h3>{this.props.langThree.languageFamily}</h3>
                    <p>{this.props.langThree.instructions}</p>
                    <ExampleData exampleData={this.props.langThree.exampleData} />
                    <QuestionAndFill 
                        exerciseTask1={this.props.langThree.task1}
                        exerciseTask2={this.props.langThree.task2}
                        startIndex={this.props.langThree.reverseTranscriptionStartIndex}
                        exercises={this.props.langThree.exercises}
                        inputChanged={this.props.onMorphologyInputChanged}
                        showAnswers={this.props.showAnswers}
                        lang="langThree" />
                    <ModalButtons
                        closed={this.modalClosedHandler}
                        exercises={this.props.langThree.exercises}
                        totalCorrect={this.props.langThree.totalCorrect}
                        showScore={this.props.langThree.showScore}
                        showAnswers={this.props.showAnswers}
                        checkScore={this.props.onMorphologyCheckScore}
                        lang="langThree" />
                </Modal>  
                <Modal 
                    show={this.state.showLangFour} 
                    modalClosed={this.modalClosedHandler}>
                    <h1>{this.props.langFour.name}</h1>
                    <h3>{this.props.langFour.languageFamily}</h3>
                    <p>{this.props.langFour.instructions}</p>
                    <ExampleData exampleData={this.props.langFour.exampleData} />
                    <QuestionAndFill 
                        exerciseTask1={this.props.langFour.task1}
                        exerciseTask2={this.props.langFour.task2}
                        startIndex={this.props.langFour.reverseTranscriptionStartIndex}
                        exercises={this.props.langFour.exercises}
                        inputChanged={this.props.onMorphologyInputChanged}
                        showAnswers={this.props.showAnswers}
                        lang="langFour" />
                    <ModalButtons
                        closed={this.modalClosedHandler}
                        exercises={this.props.langFour.exercises}
                        totalCorrect={this.props.langFour.totalCorrect}
                        showScore={this.props.langFour.showScore}
                        showAnswers={this.props.showAnswers}
                        checkScore={this.props.onMorphologyCheckScore}
                        lang="langFour" />
                </Modal> 
                <Modal 
                    show={this.state.showLangFive} 
                    modalClosed={this.modalClosedHandler}>
                    <h1>{this.props.langFive.name}</h1>
                    <h3>{this.props.langFive.languageFamily}</h3>
                    <p>{this.props.langFive.instructions}</p>
                    <ExampleData exampleData={this.props.langFive.exampleData} />
                    <QuestionAndFill 
                        exerciseTask1={this.props.langFive.task1}
                        exerciseTask2={this.props.langFive.task2}
                        startIndex={this.props.langFive.reverseTranscriptionStartIndex}
                        exercises={this.props.langFive.exercises}
                        inputChanged={this.props.onMorphologyInputChanged}
                        showAnswers={this.props.showAnswers}
                        lang="langFive" />
                    <ModalButtons
                        closed={this.modalClosedHandler}
                        exercises={this.props.langFive.exercises}
                        totalCorrect={this.props.langFive.totalCorrect}
                        showScore={this.props.langFive.showScore}
                        showAnswers={this.props.showAnswers}
                        checkScore={this.props.onMorphologyCheckScore}
                        lang="langFive" />
                </Modal> 
                <Modal 
                    show={this.state.showLangSix} 
                    modalClosed={this.modalClosedHandler}>
                    <h1>{this.props.langSix.name}</h1>
                    <h3>{this.props.langSix.languageFamily}</h3>
                    <p>{this.props.langSix.instructions}</p>
                    <ExampleData exampleData={this.props.langSix.exampleData} />
                    <QuestionAndFill 
                        exerciseTask1={this.props.langSix.task1}
                        exerciseTask2={this.props.langSix.task2}
                        startIndex={this.props.langSix.reverseTranscriptionStartIndex}
                        exercises={this.props.langSix.exercises}
                        inputChanged={this.props.onMorphologyInputChanged}
                        showAnswers={this.props.showAnswers}
                        lang="langSix" />
                    <ModalButtons
                        closed={this.modalClosedHandler}
                        exercises={this.props.langSix.exercises}
                        totalCorrect={this.props.langSix.totalCorrect}
                        showScore={this.props.langSix.showScore}
                        showAnswers={this.props.showAnswers}
                        checkScore={this.props.onMorphologyCheckScore}
                        lang="langSix" />
                </Modal> 
                <Modal 
                    show={this.state.showBonus} 
                    modalClosed={this.modalClosedHandler}>
                    <h1>{this.props.bonus.name}</h1>
                    <p>{this.props.bonus.instructions}</p>
                    <QuestionAndFill 
                        exerciseTask1={this.props.bonus.task1}
                        exerciseTask2={this.props.bonus.task2}
                        startIndex={this.props.bonus.reverseTranscriptionStartIndex}
                        exercises={this.props.bonus.exercises}
                        inputChanged={this.props.onMorphologyInputChanged}
                        showAnswers={this.props.showAnswers}
                        lang="bonus" />
                    <ModalButtons
                        closed={this.modalClosedHandler}
                        exercises={this.props.bonus.exercises}
                        totalCorrect={this.props.bonus.totalCorrect}
                        showScore={this.props.bonus.showScore}
                        showAnswers={this.props.showAnswers}
                        checkScore={this.props.onMorphologyCheckScore}
                        lang="bonus" />
                </Modal> 
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        langOne: state.morphology.langOne,
        langTwo: state.morphology.langTwo,
        langThree: state.morphology.langThree,
        langFour: state.morphology.langFour,
        langFive: state.morphology.langFive,
        langSix: state.morphology.langSix,
        bonus: state.morphology.bonus,
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