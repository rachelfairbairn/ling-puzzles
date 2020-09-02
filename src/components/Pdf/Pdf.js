import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

import roboto from '../../resources/fonts/Roboto/Roboto-Regular.ttf';
import sourceSansPro from '../../resources/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf';
import arimo from '../../resources/fonts/Arimo/Arimo-Regular.ttf';
import firaSans from '../../resources/fonts/Fira_Sans/FiraSans-Regular.ttf';
import inter from '../../resources/fonts/Inter/static/Inter-Regular-slnt=0.ttf';

Font.register({family:"FiraSans", src: firaSans});

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#E4E4E4',
        fontSize: '12pt',
        fontFamily: 'Courier'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        // textAlign: 'center'
    },
    sectionTitle: {
        color:'#78C2AD',
        paddingBottom: 8
    }
});

// Create Document Component
const pdf = (props) => {

    const activityOneAnswers = props.engIpaExercises.map( (exercise, index) => {
        return (
            <Text>{index+1}. {exercise.question}  {exercise.value}</Text>
        );
    });

    const activityTwoAnswers = props.ipaEngExercises.map( (exercise, index) => {
        return (
            <Text>{index+1}. {exercise.question}  {exercise.value}</Text>
        );
    });

    const activityThreeAnswers = props.videoIpaExercises.map( (exercise, index) => {
        return (
            <Text>{index+1}. {exercise.question}  {exercise.value}</Text>
        );
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={{textAlign:'center', paddingTop:20, fontSize:25}}>
                    <Text>Your Phonetics Answers</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Activity #1</Text>
                        {activityOneAnswers}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Activity #2</Text>
                        {activityTwoAnswers}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Activity #3</Text>
                        {activityThreeAnswers}
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default pdf;