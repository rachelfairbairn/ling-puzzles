import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initalState = {
    isAuthenticated: false,
    isAdmin: false,
    errorMsg: ''
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        isAuthenticated: true,
        isAdmin: action.isAdmin,
        errorMsg: ''
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        isAuthenticated: false,
        isAdmin: false,
        errorMsg: action.errorMsg
    });
};

const reducer = (state = initalState, action) => {
    switch (action.type){
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default: return state;
    }
};

export default reducer;