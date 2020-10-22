import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const engIpaInputChanged = (val, inputIndex) => {
    return {
        type: actionTypes.ENG_IPA_INPUT_CHANGED,
        value: val,
        inputIndex: inputIndex
    };
};

export const engIpaCheckScore = () => {
    return {
        type: actionTypes.ENG_IPA_CHECK_SCORE
    };
};

export const ipaEngInputChanged = (val, inputIndex) => {
    return {
        type: actionTypes.IPA_ENG_INPUT_CHANGED,
        value: val,
        inputIndex: inputIndex
    };
};

export const ipaEngCheckScore = () => {
    return {
        type: actionTypes.IPA_ENG_CHECK_SCORE
    };
};

export const videoIpaInputChanged = (val, inputIndex) => {
    return {
        type: actionTypes.VIDEO_IPA_INPUT_CHANGED,
        value: val,
        inputIndex: inputIndex
    };
};

export const videoIpaCheckScore = () => {
    return {
        type: actionTypes.VIDEO_IPA_CHECK_SCORE
    };
};

export const loadExercisesSuccess = (exercises) => {
    return {
        type: actionTypes.LOAD_EXERCISES_SUCCESS,
        exercises: exercises
    };
};

export const loadExercises = () => {
    return dispatch => {
        axios.get('/phonetics.json')
        .then(res => {
            dispatch(loadExercisesSuccess(res.data));
        })
        .catch(err => {
            console.log(err);
        });
    }
}

export const togglePhoneticsAnswers = () => {
    return {
        type: actionTypes.TOGGLE_PHONETICS_ANSWERS
    };
};