import * as actionTypes from './actionTypes';

export const authSuccess = (isAdmin) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        isAdmin: isAdmin 
    };
};

export const authFail = (errorMsg) => {
    return {
        type: actionTypes.AUTH_FAIL,
        errorMsg: errorMsg
    };
};

export const auth = (password) => {
    return dispatch => {
        if(password === 'test'){
            dispatch(authSuccess(false));
        } else if (password === 'admin'){
            dispatch(authSuccess(true));
        } else{
            dispatch(authFail('Password was incorrect'));
        }
    }
}