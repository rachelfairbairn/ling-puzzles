import React, { Component } from 'react';

import classes from './Morphology.module.css';
import philippinesFlagPath from '../../resources/images/philippines-flag-square-medium.png';
import iraqFlagPath from '../../resources/images/iraq-flag-square-medium.png';

import Header from '../../components/UI/Header/Header';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';

class Morphology extends Component {

    state = {
        agta: false,
        kurdish: false
    }

    modalClosedHandler = () => {
        this.setState({
            agta: false,
            kurdish: false
        });
    }

    exerciseClickedHandler = (exerciseName) => {
        this.setState({[exerciseName]: true});
    }

    render () {
        return (
            <div className={classes.Morphology}>
                <Header type="h1">Morphology</Header>
                <ul style={{textAlign:'left'}}>
                    <li>Click the Transcription button at the top of the page.</li>
                    <li>Type the transcription of the word into the transcription box by selecting the correct symbol from the charts.</li>
                    <li>Then copy/paste the entire transcription into the answer field.</li>
                    <li>You may want to record or screenshot your answers in order to compare with the answer key when it's released.</li>
                    <li>Save a PDF of your scores on the Progress page and upload it to the activity forum.</li>
                    <li style={{color:'red'}}>Closing or refreshing the page will clear your entries.</li>
                </ul>
                <div className={classes.LanguageCard}>
                    <Button 
                        btnType="Flag"
                        clicked={() => this.exerciseClickedHandler('agta')}>
                        <img 
                        className={classes.Flag} 
                        src={philippinesFlagPath}
                        alt="philippines flag" />
                        <br/>Agta
                        </Button>
                </div>
                <div className={classes.LanguageCard}>
                    <Button 
                        btnType="Flag"
                        clicked={() => this.exerciseClickedHandler('kurdish')}>
                        <img 
                        className={classes.Flag} 
                        src={iraqFlagPath}
                        alt="iraq flag" />
                        <br/>Kurmanji Kurdish
                        </Button>
                </div>
                <Modal 
                    show={this.state.agta} 
                    modalClosed={this.modalClosedHandler}>
                    {/* <FillInBlanks 
                        title="Transcribing American English Vowels"
                        instructions="Transcribe just the vowel in these words. Transcriptions without square brackets will be marked incorrect. Ex. up [ʌ]."
                        closed={this.modalClosedHandler}
                        exercises={this.props.engIpaExercises}
                        totalCorrect={this.props.engIpaTotalCorrect}
                        validAnswers={this.props.engIpaValidAnswers}
                        showScore={this.props.engIpaShowScore}
                        inputChanged={this.props.onEngIpaInputChanged}
                        checkScore={this.props.onEngIpaCheckScore}
                        showAnswers={this.props.showAnswers} /> */}
                </Modal>  
                <Modal 
                    show={this.state.kurdish} 
                    modalClosed={this.modalClosedHandler}>
                    {/* <FillInBlanks 
                        title="Transcribing American English Vowels"
                        instructions="Transcribe just the vowel in these words. Transcriptions without square brackets will be marked incorrect. Ex. up [ʌ]."
                        closed={this.modalClosedHandler}
                        exercises={this.props.engIpaExercises}
                        totalCorrect={this.props.engIpaTotalCorrect}
                        validAnswers={this.props.engIpaValidAnswers}
                        showScore={this.props.engIpaShowScore}
                        inputChanged={this.props.onEngIpaInputChanged}
                        checkScore={this.props.onEngIpaCheckScore}
                        showAnswers={this.props.showAnswers} /> */}
                </Modal>  
            </div>
        );
    }
}

export default Morphology;