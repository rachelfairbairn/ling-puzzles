import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

import regular from '../../resources/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf';
import bold from '../../resources/fonts/Source_Sans_Pro/SourceSansPro-Bold.ttf';
import semibold from '../../resources/fonts/Source_Sans_Pro/SourceSansPro-SemiBold.ttf';
import light from '../../resources/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf';
import black from '../../resources/fonts/Source_Sans_Pro/SourceSansPro-Black.ttf';
import italic from '../../resources/fonts/Source_Sans_Pro/SourceSansPro-Italic.ttf';

Font.register({family:"SourceSans", fonts:[
    {src: regular},
    // {src: bold, fontWeight: 700},
    // {src: semibold, fontWeight: 600},
    // {src: light, fontWeight: 300},
    // {src: black, fontWeight: 900},
    // {src: italic, fontWeight: 400, fontStyle: 'italic'},
]});

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#E4E4E4',
        fontSize: '12pt',
        fontFamily: 'SourceSans',
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
const phoneticsPdf = (props) => {

    const engIpaAnswers = props.engIpa.exercises.map( (exercise, index) => {
        return (
            <Text>{index+1}. {exercise.question} - <Text style={{color:"#78C2AD"}}>{exercise.value}</Text></Text>
        );
    });

    const ipaEngAnswers = props.ipaEng.exercises.map( (exercise, index) => {
        return (
            <Text>{index+1}. {exercise.question} - <Text style={{color:"#78C2AD"}}>{exercise.value}</Text></Text>
        );
    });

    const videoIpaAnswers = props.videoIpa.exercises.map( (exercise, index) => {
        return (
            <Text>{index+1}. <Text style={{color:"#78C2AD"}}>{exercise.value}</Text></Text>
        );
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={{textAlign:'center', padding:20, fontSize:25}}>
                    <Text>Your Phonetics Answers</Text>
                </View>
                <View style={{flexDirection:'row', width:'100%'}}>
                    <View style={{paddingLeft:20}}>
                        <Text style={styles.sectionTitle}>English to IPA: {props.engIpa.totalCorrect}/{props.engIpa.exercises.length}</Text>
                        {engIpaAnswers}
                    </View>
                </View>
                <View style={{flexDirection:'row', width:'100%'}}>
                    <View style={{paddingLeft:20}}>
                        <Text style={styles.sectionTitle}>IPA to English: {props.ipaEng.totalCorrect}/{props.ipaEng.exercises.length}</Text>
                        {ipaEngAnswers}
                    </View>
                </View>
                <View style={{flexDirection:'row', width:'100%'}}>
                    <View style={{paddingLeft:20}}>
                        <Text style={styles.sectionTitle}>Video to IPA: {props.videoIpa.totalCorrect}/{props.videoIpa.exercises.length}</Text>
                        {videoIpaAnswers}
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default phoneticsPdf;