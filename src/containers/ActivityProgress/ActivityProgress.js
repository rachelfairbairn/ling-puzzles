import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/UI/Header/Header';
import Aux from '../../hoc/Aux/Aux';
import Score from '../../components/UI/Score/Score';
import classes from './ActivityProgress.module.css';

class ActivityProgress extends Component {
    render () {
        return (
            <Aux>
                <Header type="h1">Activity Progress</Header>
                <div className={classes.SubjectProgress}>
                    <h2 style={{marginTop:'0px'}}>Phonetics</h2>
                    <div>
                        <p style={{display: 'inline-block', fontWeight: 'bold'}}>English to IPA: </p>
                        <Score correct={this.props.engIpaTotalCorrect} total={this.props.engIpaExercises.length} show />
                    </div>
                    <div>
                        <p style={{display: 'inline-block', fontWeight: 'bold'}}>IPA to English: </p>
                        <Score correct={this.props.ipaEngTotalCorrect} total={this.props.ipaEngExercises.length} show />
                    </div>
                    <div>
                        <p style={{display: 'inline-block', fontWeight: 'bold'}}>Video to IPA: </p>
                        <Score correct={this.props.videoIpaTotalCorrect} total={this.props.videoIpaExercises.length} show />
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
        videoIpaTotalCorrect: state.phonetics.videoIpa.totalCorrect
    };
};

export default connect(mapStateToProps)(ActivityProgress);