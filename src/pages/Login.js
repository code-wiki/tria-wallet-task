import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import SocialLogin from '../components/Login/socials.login';
import UserName from '../components/Login/user-name.login';
import Loader from '../components/Loader/Lottie';
import {
    UserNameAction,
    CurrentLoginStepAction,
    IsLoginCompleteAction,
    checkUserNameAction,
    UserNameRecommendAction,
} from '../redux/action/Login/login.action';

const LoginPage = (props) => {
    let LoginComponent = null;
    const { IsLoginComplete, CurrentLoginStep } = props;
    if (!IsLoginComplete) {
        if (CurrentLoginStep === 1) {
            LoginComponent = <SocialLogin {...props} />;
        } else if (CurrentLoginStep === 2) {
            LoginComponent = <UserName {...props} />;
        } else if (CurrentLoginStep === 3) {
            LoginComponent = <Loader {...props} />;
        }
    } else {
        LoginComponent = <Navigate to="/home" />;
    }
    return (
        <>
            <div className="bg-black h-screen">
                <div className="fixed top-0 left-0 z-[89] h-0 w-0">
                    <div className="rounded-[20] overflow-hidden fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                        <div className="w-[448px] rounded-[20px] shadow-[rgba(0, 0, 0, 0.15) 0px 4px 12px] flex-col justify-between inline-flex transform scale-[0.7] p-[16px] h-[840px] bg-[#101010]">
                            {LoginComponent}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    UserName: state.UserName,
    UserNameCheck: state.UserNameCheck,
    IsLoginComplete: state.IsLoginComplete,
    CurrentLoginStep: state.CurrentLoginStep,
    UserNameRecommend: state.UserNameRecommend,
});
const mapDispatchToProps = (dispatch) => ({
    UserNameAction: (args) => dispatch(UserNameAction(args)),
    CurrentLoginStepAction: (args) => dispatch(CurrentLoginStepAction(args)),
    IsLoginCompleteAction: (args) => dispatch(IsLoginCompleteAction(args)),
    checkUserNameAction: (args) => dispatch(checkUserNameAction(args)),
    UserNameRecommendAction: (args) => dispatch(UserNameRecommendAction(args)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
