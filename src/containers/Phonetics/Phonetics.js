import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/UI/Header/Header';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import FillInBlanks from '../../components/FillInBlanks/FillInBlanks';
import classes from './Phonetics.module.css';
import * as actions from '../../store/actions/index';

class Phonetics extends Component {
    state = {
        englishToIPA: false,
        audioToIPA: false,
        ipaToEnglish: false
    }

    modalClosedHandler = () => {
        this.setState({
            englishToIPA: false,
            audioToIPA: false,
            ipaToEnglish: false
        });
    }

    exerciseClickedHandler = (exerciseName) => {
        this.setState({[exerciseName]: true});
    }

    render () {
        return (
            <div className={classes.Phonetics}>
                <Header type="h1">Phonetics Puzzles</Header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.</p>
                <Button 
                    btnType="Info" 
                    clicked={() => this.exerciseClickedHandler('englishToIPA')}>English &rarr; IPA</Button>
                <Button 
                    btnType="Info" 
                    clicked={() => this.exerciseClickedHandler('audioToIPA')}>Audio &rarr; IPA</Button>
                <Button 
                    btnType="Info" 
                    clicked={() => this.exerciseClickedHandler('ipaToEnglish')}>IPA &rarr; English</Button>
                <Modal 
                    show={this.state.englishToIPA} 
                    modalClosed={this.modalClosedHandler}>
                    <FillInBlanks 
                        title="English &rarr; IPA"
                        instructions="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        closed={this.modalClosedHandler}
                        exercises={this.props.engIpaExercises}
                        totalCorrect={this.props.engIpaTotalCorrect}
                        validAnswers={this.props.engIpaValidAnswers}
                        showScore={this.props.engIpaShowScore}
                        inputChanged={this.props.onEngIpaInputChanged}
                        checkScore={this.props.onEngIpaCheckScore} />
                </Modal>
                <Modal 
                    show={this.state.audioToIPA} 
                    modalClosed={this.modalClosedHandler}>Audio &rarr; IPA</Modal>
                <Modal 
                    show={this.state.ipaToEnglish} 
                    modalClosed={this.modalClosedHandler}>
                    <FillInBlanks 
                        title="IPA &rarr; English"
                        instructions="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        closed={this.modalClosedHandler}
                        exercises={this.props.ipaEngExercises}
                        totalCorrect={this.props.ipaEngTotalCorrect}
                        validAnswers={this.props.ipaEngValidAnswers}
                        showScore={this.props.ipaEngShowScore}
                        inputChanged={this.props.onIpaEngInputChanged}
                        checkScore={this.props.onIpaEngCheckScore} />
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        engIpaExercises: state.engIpa.exercises,
        engIpaTotalCorrect: state.engIpa.totalCorrect,
        engIpaValidAnswers: state.engIpa.validAnswers,
        engIpaShowScore: state.engIpa.showScore,
        ipaEngExercises: state.ipaEng.exercises,
        ipaEngTotalCorrect: state.ipaEng.totalCorrect,
        ipaEngValidAnswers: state.ipaEng.validAnswers,
        ipaEngShowScore: state.ipaEng.showScore
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEngIpaInputChanged: (event, inputIndex) => dispatch(actions.engIpaInputChanged(event, inputIndex)),
        onEngIpaCheckScore: () => dispatch(actions.engIpaCheckScore()),
        onIpaEngInputChanged: (event, inputIndex) => dispatch(actions.ipaEngInputChanged(event, inputIndex)),
        onIpaEngCheckScore: () => dispatch(actions.ipaEngCheckScore())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonetics);