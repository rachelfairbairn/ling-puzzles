import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
    langOne: {
        name: "",
        languageFamily: "",
        instructions: "",
        task1: "",
        task2: "",
        reverseTranscriptionStartIndex: 0,
        exampleData: {},
        exercises: [],
        totalCorrect: 0,
        validAnswers: false,
        showScore: false
    },
    langTwo: {
        name: "",
        languageFamily: "",
        instructions: "",
        task1: "",
        task2: "",
        reverseTranscriptionStartIndex: 0,
        exampleData: {},
        exercises: [],
        totalCorrect: 0,
        validAnswers: false,
        showScore: false
    },
    langThree: {
        name: "",
        languageFamily: "",
        instructions: "",
        task1: "",
        task2: "",
        reverseTranscriptionStartIndex: 0,
        exampleData: {},
        exercises: [],
        totalCorrect: 0,
        validAnswers: false,
        showScore: false
    },
    langFour: {
        name: "",
        languageFamily: "",
        instructions: "",
        task1: "",
        task2: "",
        reverseTranscriptionStartIndex: 0,
        exampleData: {},
        exercises: [],
        totalCorrect: 0,
        validAnswers: false,
        showScore: false
    },
    langFive: {
        name: "",
        languageFamily: "",
        instructions: "",
        task1: "",
        task2: "",
        reverseTranscriptionStartIndex: 0,
        exampleData: {},
        exercises: [],
        totalCorrect: 0,
        validAnswers: false,
        showScore: false
    },
    langSix: {
        name: "",
        languageFamily: "",
        instructions: "",
        task1: "",
        task2: "",
        reverseTranscriptionStartIndex: 0,
        exampleData: {},
        exercises: [],
        totalCorrect: 0,
        validAnswers: false,
        showScore: false
    },
    bonus: {
        name: "",
        languageFamily: "",
        instructions: "",
        task1: "",
        task2: "",
        reverseTranscriptionStartIndex: 0,
        exampleData: {},
        exercises: [],
        totalCorrect: 0,
        validAnswers: false,
        showScore: false
    },
    showAnswers: false
};

const loadMorphologyDataSuccess = (state, action) => {
    let updatedLangOne = updateObject(state['langOne'], 
                                        {
                                            name: action.data.langOne.name,
                                            languageFamily: action.data.langOne.languageFamily,
                                            instructions: action.data.langOne.instructions,
                                            task1: action.data.langOne.task1,
                                            task2: action.data.langOne.task2,
                                            reverseTranscriptionStartIndex: action.data.langOne.reverseTranscriptionStartIndex,
                                            exampleData: action.data.langOne.exampleData,
                                            exercises: action.data.langOne.exercises
                                        });
    let updatedLangTwo = updateObject(state['langTwo'], 
                                        {
                                            name: action.data.langTwo.name,
                                            languageFamily: action.data.langTwo.languageFamily,
                                            instructions: action.data.langTwo.instructions,
                                            task1: action.data.langTwo.task1,
                                            task2: action.data.langTwo.task2,
                                            reverseTranscriptionStartIndex: action.data.langTwo.reverseTranscriptionStartIndex,
                                            exampleData: action.data.langTwo.exampleData,
                                            exercises: action.data.langTwo.exercises
                                        });
    let updatedLangThree = updateObject(state['langThree'], 
                                        {
                                            name: action.data.langThree.name,
                                            languageFamily: action.data.langThree.languageFamily,
                                            instructions: action.data.langThree.instructions,
                                            task1: action.data.langThree.task1,
                                            task2: action.data.langThree.task2,
                                            reverseTranscriptionStartIndex: action.data.langThree.reverseTranscriptionStartIndex,
                                            exampleData: action.data.langThree.exampleData,
                                            exercises: action.data.langThree.exercises
                                        });
    let updatedLangFour = updateObject(state['langFour'], 
                                        {
                                            name: action.data.langFour.name,
                                            languageFamily: action.data.langFour.languageFamily,
                                            instructions: action.data.langFour.instructions,
                                            task1: action.data.langFour.task1,
                                            task2: action.data.langFour.task2,
                                            reverseTranscriptionStartIndex: action.data.langFour.reverseTranscriptionStartIndex,
                                            exampleData: action.data.langFour.exampleData,
                                            exercises: action.data.langFour.exercises
                                        });
    let updatedLangFive = updateObject(state['langFive'], 
                                        {
                                            name: action.data.langFive.name,
                                            languageFamily: action.data.langFive.languageFamily,
                                            instructions: action.data.langFive.instructions,
                                            task1: action.data.langFive.task1,
                                            task2: action.data.langFive.task2,
                                            reverseTranscriptionStartIndex: action.data.langFive.reverseTranscriptionStartIndex,
                                            exampleData: action.data.langFive.exampleData,
                                            exercises: action.data.langFive.exercises
                                        });
    let updatedLangSix = updateObject(state['langSix'], 
                                        {
                                            name: action.data.langSix.name,
                                            languageFamily: action.data.langSix.languageFamily,
                                            instructions: action.data.langSix.instructions,
                                            task1: action.data.langSix.task1,
                                            task2: action.data.langSix.task2,
                                            reverseTranscriptionStartIndex: action.data.langSix.reverseTranscriptionStartIndex,
                                            exampleData: action.data.langSix.exampleData,
                                            exercises: action.data.langSix.exercises
                                        });
    let updatedBonus = updateObject(state['bonus'], 
                                        {
                                            name: action.data.bonus.name,
                                            languageFamily: action.data.bonus.languageFamily,
                                            instructions: action.data.bonus.instructions,
                                            task1: action.data.bonus.task1,
                                            task2: action.data.bonus.task2,
                                            reverseTranscriptionStartIndex: action.data.bonus.reverseTranscriptionStartIndex,
                                            exampleData: action.data.bonus.exampleData,
                                            exercises: action.data.bonus.exercises
                                        });

    let updatedState = updateObject(state, {
                                            langOne: updatedLangOne,
                                            langTwo: updatedLangTwo,
                                            langThree: updatedLangThree,
                                            langFour: updatedLangFour,
                                            langFive: updatedLangFive,
                                            langSix: updatedLangSix,
                                            bonus: updatedBonus
                                            }
                                    );

    // updatedExercises = updateObject(state['ipaEng'], {exercises: Object.values(action.exercises['ipaEng'])});
    // updatedState = updateObject(updatedState, {ipaEng: updatedExercises});

    // updatedExercises = updateObject(state['videoIpa'], {exercises: Object.values(action.exercises['videoIpa'])});
    // updatedState = updateObject(updatedState, {videoIpa: updatedExercises});

    return updateObject(updatedState, {showAnswers: action.data.showAnswers});
};

const morphologyInputChanged = (state, action) => {
    const updatedExercise = updateObject(state[action.lang].exercises[action.inputIndex], {
        value: action.value,
    });
    const updatedExercises = state[action.lang].exercises.map((exercise) => {
        return {...exercise}
    });
    updatedExercises[action.inputIndex] = updatedExercise;

    let validAnswers = true;
    updatedExercises.forEach((exercise) => {
        if(exercise.value.length === 0){
            validAnswers = false;
        }
    });
    const showScore = !validAnswers ? false : state[action.lang].showScore;

    return updateObject(state, {
        [action.lang]: updateObject(state[action.lang], {
            exercises: updatedExercises, 
            validAnswers: validAnswers, 
            showScore: showScore
        })
    });
};

const morphologyCheckScore = (state, action) => {
    let score = 0;
    state[action.lang].exercises.forEach((exercise) => {
        if(exercise.value.toLowerCase() === exercise.answer.toLowerCase()){
            score++;
        }
    });
    return updateObject(state, {
        [action.lang]: updateObject(state[action.lang], {
            totalCorrect: score, 
            showScore: true
        })
    });
}

const toggleMorphologyAnswers = (state, action) => {
    return updateObject(state, {
        showAnswers: !state.showAnswers
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MORPHOLOGY_INPUT_CHANGED: return morphologyInputChanged(state, action);
        case actionTypes.MORPHOLOGY_CHECK_SCORE: return morphologyCheckScore(state, action);
        case actionTypes.TOGGLE_MORPHOLOGY_ANSWERS: return toggleMorphologyAnswers(state, action);
        case actionTypes.LOAD_MORPHOLOGY_DATA_SUCCESS: return loadMorphologyDataSuccess(state, action);
        default: return state;
    }
};

export default reducer;