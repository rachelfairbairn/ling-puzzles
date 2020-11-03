import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PDFDownloadLink } from '@react-pdf/renderer';

import Header from '../../components/UI/Header/Header';
import Aux from '../../hoc/Aux/Aux';
import Score from '../../components/UI/Score/Score';
import classes from './ActivityProgress.module.css';
import AnswersPdf from '../../components/Pdf/AnswersPdf';
import * as actions from '../../store/actions/index';

class ActivityProgress extends Component {

    componentDidMount () {
        if(this.props.engIpaExercises.length === 0){
            this.props.loadPhoneticsExercises();
        }
        if(this.props.langOne.exercises.length === 0){
            this.props.loadMorphologyData();
        }
    }

    render () {
        return (
            <Aux>
                <Header type="h1">Activity Progress</Header>
                <div className={classes.SubjectProgress}>
                    <h2 style={{marginTop:'0px'}}>Phonetics</h2>
                    <div>
                        <p style={{display: 'inline-block', fontWeight: 'bold'}}>Activity 1: </p>
                        <Score correct={this.props.engIpaTotalCorrect} total={this.props.engIpaExercises.length} show />
                    </div>
                    <div>
                        <p style={{display: 'inline-block', fontWeight: 'bold'}}>Activity 2: </p>
                        <Score correct={this.props.ipaEngTotalCorrect} total={this.props.ipaEngExercises.length} show />
                    </div>
                    <div>
                        <p style={{display: 'inline-block', fontWeight: 'bold'}}>Activity 3: </p>
                        <Score correct={this.props.videoIpaTotalCorrect} total={this.props.videoIpaExercises.length} show />
                    </div>
                </div>
                <div className={classes.SubjectProgress}>
                    <h2 style={{marginTop:'0px'}}>Morphology</h2>
                    <div>
                        <p style={{display: 'inline-block', fontWeight: 'bold'}}>{this.props.langOne.name}: </p>
                        <Score correct={this.props.langOne.totalCorrect} total={this.props.langOne.exercises.length} show />
                    </div>
                    <div>
                        <p style={{display: 'inline-block', fontWeight: 'bold'}}>{this.props.langTwo.name}: </p>
                        <Score correct={this.props.langTwo.totalCorrect} total={this.props.langTwo.exercises.length} show />
                    </div>
                    <div>
                        <p style={{display: 'inline-block', fontWeight: 'bold'}}>{this.props.langThree.name}: </p>
                        <Score correct={this.props.langThree.totalCorrect} total={this.props.langThree.exercises.length} show />
                    </div>
                    <div>
                        <p style={{display: 'inline-block', fontWeight: 'bold'}}>{this.props.langFour.name}: </p>
                        <Score correct={this.props.langFour.totalCorrect} total={this.props.langFour.exercises.length} show />
                    </div>
                    <div>
                        <p style={{display: 'inline-block', fontWeight: 'bold'}}>{this.props.langFive.name}: </p>
                        <Score correct={this.props.langFive.totalCorrect} total={this.props.langFive.exercises.length} show />
                    </div>
                    <div>
                        <p style={{display: 'inline-block', fontWeight: 'bold'}}>{this.props.langSix.name}: </p>
                        <Score correct={this.props.langSix.totalCorrect} total={this.props.langSix.exercises.length} show />
                    </div>
                    <div>
                        <p style={{display: 'inline-block', fontWeight: 'bold'}}>{this.props.bonus.name}: </p>
                        <Score correct={this.props.bonus.totalCorrect} total={this.props.bonus.exercises.length} show />
                    </div>
                    <PDFDownloadLink 
                        document={<AnswersPdf langOne={this.props.langOne}
                                        langTwo={this.props.langTwo}
                                        langThree={this.props.langThree}
                                        langFour={this.props.langFour}
                                        langFive={this.props.langFive}
                                        langSix={this.props.langSix}
                                        bonus={this.props.bonus} />} 
                        fileName="yourMorphologyAnswers.pdf">
                        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download results')}
                    </PDFDownloadLink>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        engIpaExercises: state.phonetics.engIpa.exercises,
        engIpaTotalCorrect: state.phonetics.engIpa.totalCorrect,
        ipaEngExercises: state.phonetics.ipaEng.exercises,
        ipaEngTotalCorrect: state.phonetics.ipaEng.totalCorrect,
        videoIpaExercises: state.phonetics.videoIpa.exercises,
        videoIpaTotalCorrect: state.phonetics.videoIpa.totalCorrect,
        langOne: state.morphology.langOne,
        langTwo: state.morphology.langTwo,
        langThree: state.morphology.langThree,
        langFour: state.morphology.langFour,
        langFive: state.morphology.langFive,
        langSix: state.morphology.langSix,
        bonus: state.morphology.bonus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMorphologyData: () => dispatch(actions.loadMorphologyData()),
        loadPhoneticsExercises: () => dispatch(actions.loadPhoneticsExercises())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityProgress);