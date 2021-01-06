import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios';
import * as actions from '../../store/actions/index';
import Header from '../../components/UI/Header/Header';
import Input from '../../components/UI/Input/Input';
import Aux from '../../hoc/Aux/Aux';
import Button from '../../components/UI/Button/Button';
import classes from './AdminPage.module.css';

class AdminPage extends Component {

    state = {
        question: '',
        answer: '',
        type: 'engIpa'
    }

    componentDidMount () {
        if(this.props.engIpaExercises.length === 0){
            this.props.loadPhoneticsExercises();
        }
        if(this.props.langOne.exercises.length === 0){
            this.props.loadMorphologyData();
        }
    }

    addExerciseHandler(question, answer, path) {
        const url = 'https://ling-puzzles.firebaseio.com/';
        const exercises = {
                question: question,
                answer: answer,
                value: ''
            };
        axios.post(url + path + '.json', exercises)
        .then(res => {
            this.setState({
                question: '',
                answer: '',
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    addMorphology() {
        const url = 'https://ling-puzzles.firebaseio.com/';
        let lang = {
            langOne: {
                name: "Zulu",
                languageFamily: "",
                instructions: "Consider the following nouns and verbs in Zulu and proceed to look for the recurring forms. (Zulu, a Southern Bantu language with 12 million L1 speakers, spoken Southern Africa.)",
                task1: "What is the Zulu morpheme for:",
                task2: "What is the English translation for:",
                reverseTranscriptionStartIndex: 7,
                exampleData: {
                    umfazi: "married woman",
                    umfani: "boy",
                    umzali: "parent",
                    umfundisi: "teacher",
                    umlimi: "farmer",
                    umdlali: "player",
                    abafazi: "married women",
                    abafani: "boys",
                    abazali: "parents",
                    ababazi: "carvers",
                    abalimi: "farmers",
                    abadlali: "players",
                    abafundi: "readers",
                    lima: "to farm",
                    funda: "to read",
                    baza: "to carve"
                },
                exercises: [
                    {
                        answer: 'um',
                        question: 'singular',
                        value: ''
                    }, 
                    {
                        answer: 'aba',
                        question: 'plural',
                        value: ''
                    }, 
                    {
                        answer: 'i',
                        question: 'nominal (noun) suffix',
                        value: ''
                    }, 
                    {
                        answer: 'a',
                        question: 'verbal suffix',
                        value: ''
                    }, 
                    {
                        answer: 'lim',
                        question: 'bound root meaning "farm"',
                        value: ''
                    }, 
                    {
                        answer: 'fundis',
                        question: 'bound root meaning "teach"',
                        value: ''
                    }, 
                    {
                        answer: 'dlal',
                        question: 'bound root meaning "play"',
                        value: ''
                    }, 
                    {
                        answer: 'teachers',
                        question: 'abafundisi',
                        value: ''
                    }, 
                    {
                        answer: 'carver',
                        question: 'umbazi',
                        value: ''
                    }, 
                    {
                        answer: 'reader',
                        question: 'umfundi',
                        value: ''
                    }
                ],
                totalCorrect: 0,
                validAnswers: false,
                showScore: false
            },
            langTwo: {
                name: "Cebuano",
                languageFamily: "",
                instructions: "Consider these noun forms in Cebuano and proceed to look for the recurring forms. (Cebuano, also called Bisaya or Binisaya, is an Austronesian language with almost 20 million speakers, spoken in southern Philippines.)",
                task1: "What is the Cebuano translation for:",
                task2: "What is the English translation for:",
                reverseTranscriptionStartIndex: 4,
                exampleData: {
                    sibwano: "a Cebuano",
                    ilokano: "an Ilocano",
                    inglis: "an Englishman",
                    bisaja: "a Visayan",
                    ininglis: "the English language",
                    tinagalog: "the Tagalog language",
                    inilokano: "the Ilocano language",
                    sinibwano: "the Cebuano language",
                    furanso: "a French person",
                    unagari: "a Hungarian person",
                    sinuwid: "the Swedish language",
                    italo: "an Italian person"
                },
                exercises: [
                    {
                        answer: 'in',
                        question: 'language (of)',
                        value: ''
                    }, 
                    {
                        answer: 'finuranso',
                        question: 'the French language',
                        value: ''
                    }, 
                    {
                        answer: 'suwid',
                        question: 'a Swedish person',
                        value: ''
                    }, 
                    {
                        answer: 'initalo',
                        question: 'the Italian language',
                        value: ''
                    }, 
                    {
                        answer: 'the Visayan language',
                        question: 'binisaja',
                        value: ''
                    }, 
                    {
                        answer: 'the Hungarian language',
                        question: 'inunagari',
                        value: ''
                    }, 
                    {
                        answer: 'a Tagalog person',
                        question: 'tagalog',
                        value: ''
                    }
                ],
                totalCorrect: 0,
                validAnswers: false,
                showScore: false
            },
            langThree: {
                name: "Samoan",
                languageFamily: "",
                instructions: "Consider these Samoan verbs and proceed to find the recurring forms. (Samoan is a Polynesian language with about 500,000 speakers, spoken in Samoa and American Samoa.)",
                task1: "What is the Samoan translation for:",
                task2: "What is the English translation for:",
                reverseTranscriptionStartIndex: 3,
                exampleData: {       
                    manao: "he wishes",
                    matua: "he is old",
                    siva: "He dances",
                    punou: "he bends",
                    atamaki: "he is wise",
                    savali: "he travels",
                    laga: "he weaves",
                    mananao: "they wish",
                    matutua: "they are old",
                    malolosi: "they are strong",
                    punonou: "they bend",
                    atamamaki: "they are wise",
                    pepese: "they sing"
                },
                exercises: [
                    {
                        answer: 'lalaga',
                        question: 'they weave',
                        value: ''
                    }, 
                    {
                        answer: 'savavali',
                        question: 'they travel',
                        value: ''
                    }, 
                    {
                        answer: 'pese',
                        question: 'he sings',
                        value: ''
                    }, 
                    {
                        answer: 'he is strong',
                        question: 'malosi',
                        value: ''
                    }, 
                    {
                        answer: 'they dance',
                        question: 'sisiva',
                        value: ''
                    }
                ],
                totalCorrect: 0,
                validAnswers: false,
                showScore: false
            },
            langFour: {
                name: "Italian",
                languageFamily: "",
                instructions: "Consider these Italian phrases and proceed to identify the recurring forms.  (Italian is a Romance language with 67 million speakers, spoken in Italy, Switzerland, San Marino, and the Vatican City.)",
                task1: "What is the Italian translation for:",
                task2: "What is the English translation for:",
                reverseTranscriptionStartIndex: 6,
                exampleData: {              
                    'un uomo': "a man",
                    'un uomo robusto': "a robust man",
                    'un uomo robustissimo': "a very robust man",
                    'una donna robusta': "a robust woman",
                    'un vino rosso': "a red wine",
                    'una faccia': "a face",
                    'un vento secco': "a dry wind"
                },
                exercises: [
                    {
                        answer: 'Un vino robusto',
                        question: 'a robust wine',
                        value: ''
                    }, 
                    {
                        answer: 'Una faccia rossissima',
                        question: 'a very red face',
                        value: ''
                    }, 
                    {
                        answer: 'Un vino seccissimo',
                        question: 'a very dry wine',
                        value: ''
                    }, 
                    {
                        answer: 'issim',
                        question: 'very',
                        value: ''
                    }, 
                    {
                        answer: 'a',
                        question: 'feminine suffix',
                        value: ''
                    },
                    {
                        answer: 'o',
                        question: 'masculine suffix',
                        value: ''
                    },
                    {
                        answer: 'a very robust woman',
                        question: 'una donna robustissima',
                        value: ''
                    },
                    {
                        answer: 'a dry face',
                        question: 'una faccia secca',
                        value: ''
                    }
                ],
                totalCorrect: 0,
                validAnswers: false,
                showScore: false
            },
            langFive: {
                name: "Turkish",
                languageFamily: "",
                instructions: "Consider these Turkish forms and proceed to identify the recurring forms. (Turkish is a Turkic language with about 75 million speakers, and is an official language in Turkey and Cyprus.)",
                task1: "What is the Turkish morpheme for:",
                task2: "What is the English translation for:",
                reverseTranscriptionStartIndex: 5,
                exampleData: {              
                    deniz: "an ocean",
                    evden: "from a house",
                    denize: "to an ocean",
                    evimden: "from my house",
                    denizin: "of an ocean",
                    denizimde: "in my ocean",
                    eve: "to a house",
                    elde: "in a hand"
                },
                exercises: [
                    {
                        answer: 'e',
                        question: 'to',
                        value: ''
                    }, 
                    {
                        answer: 'in',
                        question: 'of',
                        value: ''
                    }, 
                    {
                        answer: 'de',
                        question: 'in',
                        value: ''
                    }, 
                    {
                        answer: 'el',
                        question: 'hand',
                        value: ''
                    }, 
                    {
                        answer: 'im',
                        question: 'my',
                        value: ''
                    },
                    {
                        answer: 'in my house',
                        question: 'evimde',
                        value: ''
                    },
                    {
                        answer: 'to my hand',
                        question: 'elime',
                        value: ''
                    }
                ],
                totalCorrect: 0,
                validAnswers: false,
                showScore: false
            },
            langSix: {
                name: "Chickasaw",
                languageFamily: "",
                instructions: "Consider the following verb forms in Chickasaw and proceed to identify the recurring forms. (Chickasaw is a severely endangered member of the Muskogean family with about 50 speakers, spoken in south-central Oklahoma.)",
                task1: "What is the Chickasaw morpheme for:",
                task2: "What is the English translation for:",
                reverseTranscriptionStartIndex: 7,
                exampleData: {                 
                    sachaaha: "I am tall",
                    chaaha: "he/she is tall",
                    chichaaha: "you are tall",
                    hoochaaha: "they are tall",
                    satikahbi: "I am tired",
                    chitikahbitok: "you were tired",
                    chichchokwa: "you are cold",
                    hopobatok: "he was hungry",
                    sahopoba: "I am hungry",
                    chokma: "he is good",
                    lakna: "it is yellow",
                    shila: "he is skinny",
                    ikchokmo: "he isn’t good",
                    iklakno: "it isn’t yellow",
                    sipokni: "to be old"
                },
                exercises: [
                    {
                        answer: 'chaaha',
                        question: 'to be tall',
                        value: ''
                    }, 
                    {
                        answer: 'tikahbi',
                        question: 'to be tired',
                        value: ''
                    }, 
                    {
                        answer: 'lakn',
                        question: 'to be yellow',
                        value: ''
                    }, 
                    {
                        answer: 'chokm',
                        question: 'good',
                        value: ''
                    }, 
                    {
                        answer: 'sa',
                        question: 'I',
                        value: ''
                    },
                    {
                        answer: 'chi',
                        question: 'you',
                        value: ''
                    },
                    {
                        answer: 'hoosipokni',
                        question: 'they are old',
                        value: ''
                    },
                    {
                        answer: "he isn't skinny",
                        question: 'ikshilmo',
                        value: ''
                    },
                    {
                        answer: 'they were hungry',
                        question: 'hoohopobatok',
                        value: ''
                    },
                    {
                        answer: 'he was old',
                        question: 'sipoknitok',
                        value: ''
                    }
                ],
                totalCorrect: 0,
                validAnswers: false,
                showScore: false
            },
            bonus: {
                name: "Morphological Rules",
                languageFamily: "",
                instructions: "Match the language with the statement of the morphological rule. (Zulu, Cebuano, Samoan, Italian, Turkish, Chickasaw)",
                task1: "Which language matches the morphological rule:",
                task2: "",
                reverseTranscriptionStartIndex: 0,
                exampleData: {},
                exercises: [
                    {
                        answer: 'Cebuano',
                        question: 'Insert an infix before the first vowel to form the language name.',
                        value: ''
                    },
                    {
                        answer: 'Chickasaw',
                        question: 'To negate an adjective, add a circumfix.',
                        value: ''
                    }, 
                    {
                        answer: 'Italian',
                        question: 'The  gender suffixes on the noun and adjective must agree.',
                        value: ''
                    }, 
                    {
                        answer: 'Samoan',
                        question: 'Reduplicate the next to the last syllable to form a plural verb.',
                        value: ''
                    },
                    {
                        answer: 'Turkish',
                        question: 'Suffix on nouns is equivalent to English prepositions.',
                        value: ''
                    },
                    {
                        answer: 'Zulu',
                        question: 'Attach a prefix to indicate number on nouns.',
                        value: ''
                    } 
                ],
                totalCorrect: 0,
                validAnswers: false,
                showScore: false
            }
        }

        axios.put(url + '/morphology.json', lang)
        .then(res => {
            // this.setState({
            //     question: '',
            //     answer: '',
            // });
        })
        .catch(err => {
            console.log(err);
        });
    }

    togglePhoneticsAnswersHandler = () => {
        axios.patch('https://ling-puzzles.firebaseio.com/phonetics.json', {showAnswers: !this.props.showPhoneticsAnswers})
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        this.props.onTogglePhoneticsAnswers();
    }

    toggleMorphologyAnswersHandler = () => {
        axios.patch('https://ling-puzzles.firebaseio.com/morphology.json', {showAnswers: !this.props.showMorphologyAnswers})
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        this.props.onToggleMorphologyAnswers();
    }

    inputChangedHandler(event, inputIdentifier) {
        this.setState({
            [inputIdentifier]: event.target.value
        });
    }

    render() {
        return (
            <Aux>
                <Header type="h1">Admin Page</Header>
                <div className={classes.AddQuestion}>
                    <h2>Add a question</h2>
                    <select onChange={(event) => this.inputChangedHandler(event, 'type')}>
                        <option value="engIpa">English To IPA</option>
                        <option value="ipaEng">IPA To English</option>
                        <option value="videoIpa">Video To IPA</option>
                    </select>
                    <Input 
                        value={this.state.question} 
                        changed={(event) => this.inputChangedHandler(event, 'question')}
                        placeholder="question" />
                    <Input 
                        value={this.state.answer} 
                        changed={(event) => this.inputChangedHandler(event, 'answer')}
                        placeholder="answer" />
                    <Button 
                        btnType="Success" 
                        clicked={() => this.addExerciseHandler(this.state.question, this.state.answer, '/phonetics/' + this.state.type)}>ADD</Button>
                </div>
                <div>
                    <Button 
                        btnType={this.props.showPhoneticsAnswers ? "Danger" : "Success"} 
                        clicked={this.togglePhoneticsAnswersHandler}>
                        {this.props.showPhoneticsAnswers ? 'HIDE PHONETICS ANSWERS' : 'SHOW PHONETICS ANSWERS'}
                    </Button>
                </div>
                <div>
                    <Button 
                        btnType={this.props.showMorphologyAnswers ? "Danger" : "Success"} 
                        clicked={this.toggleMorphologyAnswersHandler}>
                        {this.props.showMorphologyAnswers ? 'HIDE MORPHOLOGY ANSWERS' : 'SHOW MORPHOLOGY ANSWERS'}
                    </Button>
                </div>
                {/* <Button 
                    btnType="Success" 
                    clicked={() => this.addMorphology()}>ADD MORPHOLOGY</Button> */}
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showPhoneticsAnswers: state.phonetics.showAnswers,
        showMorphologyAnswers: state.morphology.showAnswers,
        engIpaExercises: state.phonetics.engIpa.exercises,
        langOne: state.morphology.langOne
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTogglePhoneticsAnswers: () => dispatch(actions.togglePhoneticsAnswers()),
        onToggleMorphologyAnswers: () => dispatch(actions.toggleMorphologyAnswers()),
        loadMorphologyData: () => dispatch(actions.loadMorphologyData()),
        loadPhoneticsExercises: () => dispatch(actions.loadPhoneticsExercises())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);