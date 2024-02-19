import { combineReducers } from 'redux';
import { CurrentLoginStep, IsLoginComplete } from './Login.reducer';
import { UserNameCheck, UserNameRecommend, UserName } from './Login.reducer';

const rootReducer = combineReducers({
    UserName,
    UserNameCheck,
    IsLoginComplete,
    CurrentLoginStep,
    UserNameRecommend,
});

export default rootReducer;
