import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

import Header from '../../components/UI/Header/Header';
import Aux from '../../hoc/Aux/Aux';
import Score from '../../components/UI/Score/Score';
import classes from './ActivityProgress.module.css';
import Pdf from '../../components/Pdf/Pdf';

class ActivityProgress extends Component {
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
                    {/* <PDFDownloadLink 
                        document={<Pdf engIpaExercises={this.props.engIpaExercises}
                                        ipaEngExercises={this.props.ipaEngExercises}
                                        videoIpaExercises={this.props.videoIpaExercises} />} 
                        fileName="phoneticsAnswers.pdf">
                        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download your answers')}
                    </PDFDownloadLink> */}
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
        langTwo: state.morphology.langTwo
    };
};

export default connect(mapStateToProps)(ActivityProgress);