import { LOGIN_STEP, SET_USR_NAME } from '../action/index.action';
import { IS_LOGIN_COMPLETE } from '../action/index.action';
import { USER_NAME_RECOMMEND } from '../action/index.action';
import { IS_USER_NAME_AVAILABLE } from '../action/index.action';

export const CurrentLoginStep = (initialState = 1, action) => {
    switch (action.type) {
        case LOGIN_STEP:
            return action.payload;
        default:
            return initialState;
    }
};

export const IsLoginComplete = (initialState = false, action) => {
    switch (action.type) {
        case IS_LOGIN_COMPLETE:
            return action.payload;
        default:
            return initialState;
    }
};

export const UserNameCheck = (initialState = null, action) => {
    switch (action.type) {
        case IS_USER_NAME_AVAILABLE:
            return action.payload;
        default:
            return initialState;
    }
};

export const UserNameRecommend = (initialState = false, action) => {
    switch (action.type) {
        case USER_NAME_RECOMMEND:
            return action.payload;
        default:
            return initialState;
    }
};

export const UserName = (initialState = '', action) => {
    switch (action.type) {
        case SET_USR_NAME:
            return action.payload;
        default:
            return initialState;
    }
};
