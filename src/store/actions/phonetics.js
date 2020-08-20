import * as actionTypes from './actionTypes';

export const engIpaInputChanged = (event, inputIndex) => {
    return {
        type: actionTypes.ENG_IPA_INPUT_CHANGED,
        event: event,
        inputIndex: inputIndex
    };
};

export const engIpaCheckScore = () => {
    return {
        type: actionTypes.ENG_IPA_CHECK_SCORE
    };
};

export const ipaEngInputChanged = (event, inputIndex) => {
    return {
        type: actionTypes.IPA_ENG_INPUT_CHANGED,
        event: event,
        inputIndex: inputIndex
    };
};

export const ipaEngCheckScore = () => {
    return {
        type: actionTypes.IPA_ENG_CHECK_SCORE
    };
};