import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

import robotoRegular from '../../resources/fonts/Roboto/Roboto-Regular.ttf';
import robotoBold from '../../resources/fonts/Roboto/Roboto-Bold.ttf';

Font.register({family:"Roboto", fonts:[
    {src: robotoRegular},
    {src: robotoBold, fontWeight: 'bold'}
]});

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#E4E4E4',
        fontSize: '12pt',
        // fontFamily: 'Roboto',
        padding: 8
    },
    section: {
        margin: 4,
        padding: 4,
        paddingLeft: 20,
        width: '50%'
    },
    sectionTitle: {
        color:'#78C2AD',
        fontSize: '14pt',
        paddingBottom: 8
    }
});

// Create Document Component
const answersPdf = (props) => {

    const activityOneAnswers = props.langOne.exercises.map( (exercise, index) => {
        return (
            <Text>{index+1}. {exercise.question} - <Text style={{color:"#78C2AD"}}>{exercise.value}</Text></Text>
        );
    });

    const activityTwoAnswers = props.langTwo.exercises.map( (exercise, index) => {
        return (
            <Text>{index+1}. {exercise.question} - <Text style={{color:"#78C2AD"}}>{exercise.value}</Text></Text>
        );
    });

    const activityThreeAnswers = props.langThree.exercises.map( (exercise, index) => {
        return (
            <Text>{index+1}. {exercise.question}  - <Text style={{color:"#78C2AD"}}>{exercise.value}</Text></Text>
        );
    });

    const activityFourAnswers = props.langFour.exercises.map( (exercise, index) => {
        return (
            <Text>{index+1}. {exercise.question}  - <Text style={{color:"#78C2AD"}}>{exercise.value}</Text></Text>
        );
    });

    const activityFiveAnswers = props.langFive.exercises.map( (exercise, index) => {
        return (
            <Text>{index+1}. {exercise.question}  - <Text style={{color:"#78C2AD"}}>{exercise.value}</Text></Text>
        );
    });

    const activitySixAnswers = props.langSix.exercises.map( (exercise, index) => {
        return (
            <Text>{index+1}. {exercise.question}  - <Text style={{color:"#78C2AD"}}>{exercise.value}</Text></Text>
        );
    });

    const activityBonusAnswers = props.bonus.exercises.map( (exercise, index) => {
        return (
            <Text>{index+1}. {exercise.question}  - <Text style={{color:"#78C2AD"}}>{exercise.value}</Text></Text>
        );
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={{textAlign:'center', padding:20, fontSize:25}}>
                    <Text>Your Morphology Answers</Text>
                </View>
                <View style={{flexDirection:'row', width:'100%'}}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{props.langOne.name}: {props.langOne.totalCorrect}/{props.langOne.exercises.length}</Text>
                        {activityOneAnswers}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{props.langTwo.name}: {props.langTwo.totalCorrect}/{props.langTwo.exercises.length}</Text>
                        {activityTwoAnswers}
                    </View>
                </View>
                <View style={{flexDirection:'row', width:'100%'}}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{props.langThree.name}: {props.langThree.totalCorrect}/{props.langThree.exercises.length}</Text>
                        {activityThreeAnswers}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{props.langFour.name}: {props.langFour.totalCorrect}/{props.langFour.exercises.length}</Text>
                        {activityFourAnswers}
                    </View>
                </View>
                <View style={{flexDirection:'row', width:'100%'}}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{props.langFive.name}: {props.langFive.totalCorrect}/{props.langFive.exercises.length}</Text>
                        {activityFiveAnswers}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{props.langSix.name}: {props.langSix.totalCorrect}/{props.langSix.exercises.length}</Text>
                        {activitySixAnswers}
                    </View>
                </View>
                <View style={{flexDirection:'row', width:'100%'}}>
                    <View style={{paddingLeft:20}}>
                        <Text style={styles.sectionTitle}>{props.bonus.name}: {props.bonus.totalCorrect}/{props.bonus.exercises.length}</Text>
                        {activityBonusAnswers}
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default answersPdf;