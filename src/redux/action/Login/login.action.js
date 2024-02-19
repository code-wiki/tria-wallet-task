import { LOGIN_STEP } from '../index.action';
import { IS_LOGIN_COMPLETE, USER_NAME_RECOMMEND } from '../index.action';
import { IS_USER_NAME_AVAILABLE, SET_USR_NAME } from '../index.action';
import { TAKEN_USR_NAMES } from '../../../config/login.config';
import StringGeneratorAPI from './api.login';

export const CurrentLoginStepAction = (LoginStep) => {
    try {
        const nextLoginStep = LoginStep;
        if (nextLoginStep === 2) {
            IsLoginCompleteAction();
        }
        return {
            type: LOGIN_STEP,
            payload: nextLoginStep,
        };
    } catch (error) {
        return {
            type: LOGIN_STEP,
            payload: LoginStep - 1,
        };
    }
};

export const IsLoginCompleteAction = (args) => {
    try {
        return {
            type: IS_LOGIN_COMPLETE,
            payload: true,
        };
    } catch (error) {
        return {
            type: IS_LOGIN_COMPLETE,
            payload: false,
        };
    }
};

export const checkUserNameAction = (enteredUsrName) => {
    try {
        const checkUsrName = TAKEN_USR_NAMES.filter(
            (names) => names.toLowerCase() === enteredUsrName.toLowerCase()
        );
        if (checkUsrName.length === 0) {
            return {
                type: IS_USER_NAME_AVAILABLE,
                payload: {
                    sucess: true,
                    isUserNameAvailable: true,
                    data: {
                        msg: 'User name is available',
                    },
                    error: false,
                },
            };
        }
        return (dispatch) => {
            dispatch(UserNameRecommendAction(enteredUsrName));
            return dispatch({
                type: IS_USER_NAME_AVAILABLE,
                payload: {
                    sucess: true,
                    isUserNameAvailable: false,
                    data: {
                        msg: 'User name is not available',
                    },
                    error: false,
                },
            });
        };
    } catch (error) {
        return {
            type: IS_USER_NAME_AVAILABLE,
            payload: {
                sucess: false,
                isUserNameAvailable: false,
                data: {
                    msg: 'Some error occured',
                    error,
                },
                error: true,
            },
        };
    }
};

export const UserNameRecommendAction = (enteredUsrName) => {
    const recommendedUsrNames = StringGeneratorAPI(enteredUsrName);
    return {
        type: USER_NAME_RECOMMEND,
        payload: {
            sucess: true,
            data: recommendedUsrNames,
        },
    };
};

export const UserNameAction = (enteredUsrName) => {
    return {
        type: SET_USR_NAME,
        payload: enteredUsrName,
    };
};
