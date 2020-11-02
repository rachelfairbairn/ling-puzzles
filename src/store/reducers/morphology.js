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

    let updatedState = updateObject(state, {
                                            langOne: updatedLangOne,
                                            langTwo: updatedLangTwo
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