import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
    engIpa: {
        exercises: [],
        totalCorrect: 0,
        validAnswers: false,
        showScore: false
    },
    ipaEng: {
        exercises: [],
        totalCorrect: 0,
        validAnswers: false,
        showScore: false
    },
    videoIpa: {
        exercises: [],
        totalCorrect: 0,
        validAnswers: false,
        showScore: false
    },
    showAnswers: false,
    show: true
};

const loadPhoneticsExercisesSuccess = (state, action) => {
    let updatedExercises = updateObject(state['engIpa'], {exercises: Object.values(action.exercises['engIpa'])});
    let updatedState = updateObject(state, {engIpa: updatedExercises});

    updatedExercises = updateObject(state['ipaEng'], {exercises: Object.values(action.exercises['ipaEng'])});
    updatedState = updateObject(updatedState, {ipaEng: updatedExercises});

    updatedExercises = updateObject(state['videoIpa'], {exercises: Object.values(action.exercises['videoIpa'])});
    updatedState = updateObject(updatedState, {videoIpa: updatedExercises});

    updatedState = updateObject(updatedState, {showAnswers: action.exercises['showAnswers']});
    return updateObject(updatedState, {show: action.exercises['show']});
};

const engIpaInputChanged = (state, action) => {
    const updatedExercise = updateObject(state.engIpa.exercises[action.inputIndex], {
        value: action.value,
    });
    const updatedExercises = state.engIpa.exercises.map((exercise) => {
        return {...exercise}
    });
    updatedExercises[action.inputIndex] = updatedExercise;

    let validAnswers = true;
    updatedExercises.forEach((exercise) => {
        if(exercise.value.length === 0){
            validAnswers = false;
        }
    });
    const showScore = !validAnswers ? false : state.engIpa.showScore;

    return updateObject(state, {
        engIpa: updateObject(state.engIpa, {
            exercises: updatedExercises, 
            validAnswers: validAnswers, 
            showScore: showScore
        })
    });
};

const engIpaCheckScore = (state, action) => {
    let score = 0;
    state.engIpa.exercises.forEach((exercise) => {
        if(exercise.value.toLowerCase() === exercise.answer.toLowerCase()){
            score++;
        }
    });
    return updateObject(state, {
        engIpa: updateObject(state.engIpa, {
            totalCorrect: score, 
            showScore: true
        })
    });
}

const ipaEngInputChanged = (state, action) => {
    const updatedExercise = updateObject(state.ipaEng.exercises[action.inputIndex], {
        value: action.value,
    });
    const updatedExercises = state.ipaEng.exercises.map((exercise) => {
        return {...exercise}
    });
    updatedExercises[action.inputIndex] = updatedExercise;

    let validAnswers = true;
    updatedExercises.forEach((exercise) => {
        if(exercise.value.length === 0){
            validAnswers = false;
        }
    });
    const showScore = !validAnswers ? false : state.ipaEng.showScore;

    return updateObject(state, {
        ipaEng: updateObject(state.ipaEng, {
            exercises: updatedExercises, 
            validAnswers: validAnswers, 
            showScore: showScore
        })
    });
};

const ipaEngCheckScore = (state, action) => {
    let score = 0;
    state.ipaEng.exercises.forEach((exercise) => {
        if(exercise.value.toLowerCase() === exercise.answer.toLowerCase()){
            score++;
        }
    });
    return updateObject(state, {
        ipaEng: updateObject(state.ipaEng, {
            totalCorrect: score, 
            showScore: true
        })
    });
}

const videoIpaInputChanged = (state, action) => {
    const updatedExercise = updateObject(state.videoIpa.exercises[action.inputIndex], {
        value: action.value,
    });
    const updatedExercises = state.videoIpa.exercises.map((exercise) => {
        return {...exercise}
    });
    updatedExercises[action.inputIndex] = updatedExercise;

    let validAnswers = true;
    updatedExercises.forEach((exercise) => {
        if(exercise.value.length === 0){
            validAnswers = false;
        }
    });
    const showScore = !validAnswers ? false : state.videoIpa.showScore;

    return updateObject(state, {
        videoIpa: updateObject(state.videoIpa, {
            exercises: updatedExercises, 
            validAnswers: validAnswers, 
            showScore: showScore
        })
    });
};

const videoIpaCheckScore = (state, action) => {
    let score = 0;
    state.videoIpa.exercises.forEach((exercise) => {
        if(exercise.value.toLowerCase() === exercise.answer.toLowerCase()){
            score++;
        }
    });
    return updateObject(state, {
        videoIpa: updateObject(state.videoIpa, {
            totalCorrect: score, 
            showScore: true
        })
    });
}

const togglePhoneticsAnswers = (state, action) => {
    return updateObject(state, {
        showAnswers: !state.showAnswers
    });
};

const togglePhonetics = (state, action) => {
    return updateObject(state, {
        show: !state.show
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PHONETICS_EXERCISES_SUCCESS: return loadPhoneticsExercisesSuccess(state, action);
        case actionTypes.ENG_IPA_INPUT_CHANGED: return engIpaInputChanged(state, action);
        case actionTypes.ENG_IPA_CHECK_SCORE: return engIpaCheckScore(state, action);
        case actionTypes.IPA_ENG_INPUT_CHANGED: return ipaEngInputChanged(state, action);
        case actionTypes.IPA_ENG_CHECK_SCORE: return ipaEngCheckScore(state, action);
        case actionTypes.VIDEO_IPA_INPUT_CHANGED: return videoIpaInputChanged(state, action);
        case actionTypes.VIDEO_IPA_CHECK_SCORE: return videoIpaCheckScore(state, action);
        case actionTypes.TOGGLE_PHONETICS_ANSWERS: return togglePhoneticsAnswers(state, action);
        case actionTypes.TOGGLE_PHONETICS: return togglePhonetics(state, action);
        default: return state;
    }
};

export default reducer;