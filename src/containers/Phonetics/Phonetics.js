import React, { Component } from 'react';

import Header from '../../components/UI/Header/Header';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import EnglishToIpa from './EnglishToIpa/EnglishToIpa';
import classes from './Phonetics.module.css';

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
                    modalClosed={this.modalClosedHandler}><EnglishToIpa closed={this.modalClosedHandler}/></Modal>
                <Modal 
                    show={this.state.audioToIPA} 
                    modalClosed={this.modalClosedHandler}>Audio &rarr; IPA</Modal>
                <Modal 
                    show={this.state.ipaToEnglish} 
                    modalClosed={this.modalClosedHandler}>IPA &rarr; English</Modal>
            </div>
        );
    }
}

export default Phonetics;