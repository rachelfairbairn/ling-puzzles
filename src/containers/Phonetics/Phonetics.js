import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/UI/Header/Header';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import FillInBlanks from '../../components/FillInBlanks/FillInBlanks';
import VideoActivity from '../../components/VideoActivity/VideoActivity';
import ModalButtons from '../../components/ModalButtons/ModalButtons';
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
            this.props.loadPhoneticsExercises();
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
                    <li>You may want to record or screenshot your answers because closing or refreshing the page will clear your entries.</li>
                    <li>Once you have completed all three activities, navigate to the “progress” page and save your progress by either taking a screenshot or printing (ctrl+P) and saving as a PDF.  Upload this Screenshot or PDF to the Activity 2.2 Forum.</li>
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
                    <h1>Transcribing American English Vowels</h1>
                    <p>Transcribe just the vowel in these words. Transcriptions without square brackets will be marked incorrect. Ex. up [ʌ].</p>
                    <FillInBlanks 
                        exercises={this.props.engIpaExercises}                        
                        validAnswers={this.props.engIpaValidAnswers}                        
                        inputChanged={this.props.onEngIpaInputChanged}                        
                        showAnswers={this.props.showAnswers}
                        startIndex={0}
                        lang={""} />
                    <ModalButtons 
                        closed={this.modalClosedHandler}
                        exercises={this.props.engIpaExercises}
                        totalCorrect={this.props.engIpaTotalCorrect}
                        showScore={this.props.engIpaShowScore}
                        showAnswers={this.props.showAnswers}
                        checkScore={this.props.onEngIpaCheckScore} />
                </Modal>  
                <Modal 
                    show={this.state.ipaToEnglish} 
                    modalClosed={this.modalClosedHandler}>
                    <h1>Reverse Transcription</h1>
                    <p>Read these transcribed words and write their English spellings. Ex. [ælviləɹ] alveolar.</p>                
                    <FillInBlanks 
                        exercises={this.props.ipaEngExercises}
                        validAnswers={this.props.ipaEngValidAnswers}
                        inputChanged={this.props.onIpaEngInputChanged}
                        showAnswers={this.props.showAnswers}
                        startIndex={0}
                        lang={""} />
                    <ModalButtons 
                        closed={this.modalClosedHandler}
                        exercises={this.props.ipaEngExercises}
                        totalCorrect={this.props.ipaEngTotalCorrect}
                        showScore={this.props.ipaEngShowScore}
                        showAnswers={this.props.showAnswers}
                        checkScore={this.props.onIpaEngCheckScore} />
                </Modal>
                <Modal 
                    show={this.state.videoToIPA} 
                    modalClosed={this.modalClosedHandler}>
                    <h1>Transcribing by ear: American English sounds</h1>
                    <p>
                        View my pronunciation of these words; transcribe the initial sound in the word in IPA. 
                        Don’t forget to enclose your transcriptions in square brackets to distinguish them 
                        from spellings. Ex. <a href="https://youtu.be/LM-zMi4Hz48" target="_blank">Sample Word</a> [k]
                    </p>
                    <VideoActivity
                        exercises={this.props.videoIpaExercises}
                        validAnswers={this.props.videoIpaValidAnswers}
                        inputChanged={this.props.onVideoIpaInputChanged}
                        showAnswers={this.props.showAnswers} />
                    <ModalButtons 
                        closed={this.modalClosedHandler}
                        exercises={this.props.videoIpaExercises}
                        totalCorrect={this.props.videoIpaTotalCorrect}
                        showScore={this.props.videoIpaShowScore}
                        showAnswers={this.props.showAnswers}
                        checkScore={this.props.onVideoIpaCheckScore} />
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
        loadPhoneticsExercises: () => dispatch(actions.loadPhoneticsExercises())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonetics);