import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const morphologyInputChanged = (val, inputIndex, lang) => {
    return {
        type: actionTypes.MORPHOLOGY_INPUT_CHANGED,
        value: val,
        inputIndex: inputIndex,
        lang: lang
    };
};

export const morphologyCheckScore = (lang) => {
    return {
        type: actionTypes.MORPHOLOGY_CHECK_SCORE,
        lang: lang
    };
};

export const loadMorphologyDataSuccess = (data) => {
    return {
        type: actionTypes.LOAD_MORPHOLOGY_DATA_SUCCESS,
        data: data
    };
};

export const loadMorphologyData = () => {
    return dispatch => {
        axios.get('/morphology.json')
        .then(res => {
            dispatch(loadMorphologyDataSuccess(res.data));
        })
        .catch(err => {
            console.log(err);
        });
    }
}

export const toggleMorphologyAnswers = () => {
    return {
        type: actionTypes.TOGGLE_MORPHOLOGY_ANSWERS
    };
};