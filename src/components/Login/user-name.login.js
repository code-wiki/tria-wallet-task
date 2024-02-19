import React from 'react';
import LOGO_IMG from '../../assets/images/main-logo-icon.png';
import FOOTER_IMG from '../../assets/images/footer-img.png';
import CROSS_ICON from '../../assets/images/close-circle.png';
import ARROW_LEFT from '../../assets/images/arrow-left.png';
import EMOJI from '../../assets/images/emoji-step2.png';

export default function UserNameLogin(props) {
    const { CurrentLoginStepAction, checkUserNameAction } = props;
    const { UserNameCheck, UserNameRecommend } = props;
    const { UserName, UserNameAction } = props;
    const { IsLoginCompleteAction } = props;

    const PrevLoginStep = 1;
    const IS_USR_PRESENT = UserNameCheck
        ? UserNameCheck.isUserNameAvailable
        : true;

    const handleSubmit = () => {
        if (
            UserNameCheck &&
            UserNameCheck.isUserNameAvailable &&
            UserName.length > 3
        ) {
            CurrentLoginStepAction(3);
            setTimeout(() => {
                IsLoginCompleteAction(true);
            }, 3000);
        }
    };

    return (
        <div className="container mx-auto h-full">
            <div className="h-full w-full tria-main-container">
                <div className="flex flex-col w-full h-full">
                    <div className="image-container h-[35%] flex justify-center">
                        <div className="flex-col justify-center items-center h-full align-middle w-full">
                            <div
                                className="header-container h-[40px] w-full cursor-pointer"
                                onClick={() =>
                                    CurrentLoginStepAction(PrevLoginStep)
                                }
                            >
                                <img
                                    src={ARROW_LEFT}
                                    alt="back button"
                                    className="w-[20px]"
                                />
                            </div>
                            <div className="flex justify-center mt-4">
                                <img
                                    src={LOGO_IMG}
                                    alt="tria logo"
                                    className="w-[85px]"
                                />
                            </div>
                            <div className="flex justify-center">
                                <h3 className="text-white mt-2 text-center text-md">
                                    Login to <br />
                                    <span className="text-b">
                                        <b>Tria</b>
                                    </span>{' '}
                                    demo
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="login-container h-[65%]">
                        <div className="flex flex-col h-full items-end w-full justify-end px-2 ">
                            <div className="footer-button-container bg-[#191919] h-[80%] w-full rounded-[14px] p-4 gap-4">
                                <div className="flex-col gap-2">
                                    <h3 className="text-[#ccc] text-lg">
                                        Create your <b>Tria</b> name
                                    </h3>
                                    <div className="flex justify-between mt-4">
                                        <div className="input-group-btn w-[68%] rounded-lg flex justify-between">
                                            <input
                                                className="h-[40px] w-[75%] input-group rounded-lg"
                                                onChange={(e) =>
                                                    UserNameAction(
                                                        e.target.value
                                                    )
                                                }
                                                value={UserName}
                                            />
                                            <div className="flex justify-center w-[25%] align-middle items-center">
                                                <span className="text-[#ccc] text-md">
                                                    @tria
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            className="text-white next-button w-[28%] rounded-lg"
                                            onClick={() => {
                                                checkUserNameAction(UserName);
                                                handleSubmit();
                                            }}
                                        >
                                            Next
                                        </button>
                                    </div>
                                    {!!!IS_USR_PRESENT && (
                                        <>
                                            <div className="flex justify-start align-middle items-center mt-2">
                                                <img
                                                    src={CROSS_ICON}
                                                    className="w-[20px] h-[20px]"
                                                    alt="cross-button"
                                                />
                                                <h4 className="text-[#da4343] pl-1 text-md">
                                                    {UserNameCheck.data.msg}
                                                </h4>
                                            </div>

                                            <div className="flex-col justify-start align-middle items-center mt-4">
                                                <h4 className="text-[#ccc] text-md">
                                                    Recommended:
                                                </h4>
                                                <div className="mt-2 flex gap-2">
                                                    {UserNameRecommend.data.map(
                                                        (name, index) => (
                                                            <div
                                                                className="pallets btn-pallets border w-fit px-4 py-[2px] text-md cursor-pointer"
                                                                key={index}
                                                                onClick={() => {
                                                                    UserNameAction(
                                                                        name
                                                                    );
                                                                    checkUserNameAction(
                                                                        name
                                                                    );
                                                                }}
                                                            >
                                                                {name}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    <div className="flex-col justify-start align-middle items-center mt-6">
                                        <div className="para-container rounded-lg p-2 flex justify-end align-center items-center">
                                            <img
                                                src={EMOJI}
                                                alt=""
                                                className="w-[45px] h-[45px]"
                                            />
                                            <p className="para text-md">
                                                Your @tria is like Gmail, for
                                                Web3. Pay, receive and log-in to
                                                apps on any device, and
                                                blockchain.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-container">
                        <img src={FOOTER_IMG} alt="tria-label" className="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
