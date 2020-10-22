import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/UI/Header/Header';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import FillInBlanks from '../../components/FillInBlanks/FillInBlanks';
import VideoActivity from '../../components/VideoActivity/VideoActivity';
import classes from './Phonetics.module.css';
import * as actions from '../../store/actions/index';

class Phonetics extends Component {
    state = {
        englishToIPA: false,
        videoToIPA: false,
        ipaToEnglish: false
    }

    modalClosedHandler = () => {
        this.setState({
            englishToIPA: false,
            videoToIPA: false,
            ipaToEnglish: false
        });
    }

    exerciseClickedHandler = (exerciseName) => {
        this.setState({[exerciseName]: true});
    }

    componentDidMount() {
        if(this.props.engIpaExercises.length === 0){
            this.props.loadExercises();
        }
    }

    render () {
        return (
            <div className={classes.Phonetics}>
                <Header type="h1">Phonetic Transcription</Header>
                <p style={{textAlign:'left'}}>
                    Open this webpage to access the IPA: <a href="https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html" 
                                                            target="_blank" 
                                                            rel="noopener noreferrer">Clickable IPA Chart</a>
                </p>
                <ul style={{textAlign:'left'}}>
                    <li>Click the Transcription button at the top of the page.</li>
                    <li>Type the transcription of the word into the transcription box by selecting the correct symbol from the charts.</li>
                    <li>Then copy/paste the entire transcription into the answer field.</li>
                    <li>Transcriptions without square brackets will be marked incorrect.</li>
                    <li>You may want to record or screenshot your answers in order to compare with the answer key when it's released.</li>
                    <li>Save a PDF of your scores on the Progress page and upload it to the activity forum.</li>
                    <li style={{color:'red'}}>Closing or refreshing the page will clear your entries.</li>
                </ul>
                <Button 
                    btnType="Info" 
                    clicked={() => this.exerciseClickedHandler('englishToIPA')}>Activity 1</Button>
                <Button 
                    btnType="Info" 
                    clicked={() => this.exerciseClickedHandler('ipaToEnglish')}>Activity 2</Button>
                <Button 
                    btnType="Info" 
                    clicked={() => this.exerciseClickedHandler('videoToIPA')}>Activity 3</Button>
                <Modal 
                    show={this.state.englishToIPA} 
                    modalClosed={this.modalClosedHandler}>
                    <FillInBlanks 
                        title="Transcribing American English Vowels"
                        instructions="Transcribe just the vowel in these words. Transcriptions without square brackets will be marked incorrect. Ex. up [ʌ]."
                        closed={this.modalClosedHandler}
                        exercises={this.props.engIpaExercises}
                        totalCorrect={this.props.engIpaTotalCorrect}
                        validAnswers={this.props.engIpaValidAnswers}
                        showScore={this.props.engIpaShowScore}
                        inputChanged={this.props.onEngIpaInputChanged}
                        checkScore={this.props.onEngIpaCheckScore}
                        showAnswers={this.props.showAnswers} />
                </Modal>  
                <Modal 
                    show={this.state.ipaToEnglish} 
                    modalClosed={this.modalClosedHandler}>
                    <FillInBlanks 
                        title="Reverse Transcription"
                        instructions="Read these transcribed words and write their English spellings. Ex. [ælviləɹ] alveolar."
                        closed={this.modalClosedHandler}
                        exercises={this.props.ipaEngExercises}
                        totalCorrect={this.props.ipaEngTotalCorrect}
                        validAnswers={this.props.ipaEngValidAnswers}
                        showScore={this.props.ipaEngShowScore}
                        inputChanged={this.props.onIpaEngInputChanged}
                        checkScore={this.props.onIpaEngCheckScore}
                        showAnswers={this.props.showAnswers} />
                </Modal>
                <Modal 
                    show={this.state.videoToIPA} 
                    modalClosed={this.modalClosedHandler}>
                    <VideoActivity
                        title="Transcribing by ear: American English sounds"
                        instructions="View my pronunciation of these nonsense words; transcribe them in IPA. Transcriptions without square brackets will be marked incorrect. Ex. ruppickle [ɹʌpɪkəl]."
                        closed={this.modalClosedHandler}
                        exercises={this.props.videoIpaExercises}
                        totalCorrect={this.props.videoIpaTotalCorrect}
                        validAnswers={this.props.videoIpaValidAnswers}
                        showScore={this.props.videoIpaShowScore}
                        inputChanged={this.props.onVideoIpaInputChanged}
                        checkScore={this.props.onVideoIpaCheckScore}
                        showAnswers={this.props.showAnswers} />
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        engIpaExercises: state.phonetics.engIpa.exercises,
        engIpaTotalCorrect: state.phonetics.engIpa.totalCorrect,
        engIpaValidAnswers: state.phonetics.engIpa.validAnswers,
        engIpaShowScore: state.phonetics.engIpa.showScore,
        ipaEngExercises: state.phonetics.ipaEng.exercises,
        ipaEngTotalCorrect: state.phonetics.ipaEng.totalCorrect,
        ipaEngValidAnswers: state.phonetics.ipaEng.validAnswers,
        ipaEngShowScore: state.phonetics.ipaEng.showScore,
        videoIpaExercises: state.phonetics.videoIpa.exercises,
        videoIpaTotalCorrect: state.phonetics.videoIpa.totalCorrect,
        videoIpaValidAnswers: state.phonetics.videoIpa.validAnswers,
        videoIpaShowScore: state.phonetics.videoIpa.showScore,
        showAnswers: state.phonetics.showAnswers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEngIpaInputChanged: (value, inputIndex) => dispatch(actions.engIpaInputChanged(value, inputIndex)),
        onEngIpaCheckScore: () => dispatch(actions.engIpaCheckScore()),
        onIpaEngInputChanged: (value, inputIndex) => dispatch(actions.ipaEngInputChanged(value, inputIndex)),
        onIpaEngCheckScore: () => dispatch(actions.ipaEngCheckScore()),
        onVideoIpaInputChanged: (value, inputIndex) => dispatch(actions.videoIpaInputChanged(value, inputIndex)),
        onVideoIpaCheckScore: () => dispatch(actions.videoIpaCheckScore()),
        loadExercises: () => dispatch(actions.loadExercises())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonetics);