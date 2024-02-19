import React from 'react';
import LOGO_IMG from '../../assets/images/main-logo-icon.png';
import FOOTER_IMG from '../../assets/images/footer-img.png';
import GOOGLE_IMG from '../../assets/images/google-icon.png';
import PHONE_MAIL_IMG from '../../assets/images/phone-n-mail-icon.png';
import X_IMG from '../../assets/images/x-icon.png';

import OR_IMG from '../../assets/images/or-image.png';
import METAMASK_IMG from '../../assets/images/Metamask.png';
import WALLET_IMG from '../../assets/images/WalletConnect.png';

export default function SocialLogin(props) {
    const { CurrentLoginStepAction } = props;
    const NextLoginStep = 2;
    return (
        <div className="relative h-screen w-full container mx-auto">
            <div className="h-full w-full tria-main-container">
                <div className="flex flex-col w-full h-full">
                    <div className="image-container h-[35%]">
                        <div className="flex-col justify-center items-center h-full align-middle w-full pt-[40px]">
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
                        <div className="flex flex-col h-full items-end w-full justify-end px-4 mt-20">
                            <div className="footer-button-container bg-[#191919] h-[75%] w-full rounded-[14px] p-4 pt-8 gap-4">
                                <button
                                    className="text-white text-md flex align-middle items-center button-login w-full next-button h-[50px]"
                                    onClick={() =>
                                        CurrentLoginStepAction(NextLoginStep)
                                    }
                                >
                                    <img
                                        className="h-[30px] w-[30px]"
                                        src={GOOGLE_IMG}
                                        alt="google button"
                                    />
                                    <span className="pl-4">
                                        Continue with Google
                                    </span>
                                </button>
                                <button
                                    className="text-white text-md flex align-middle items-center button-login w-full mt-4 border-gray h-[50px]"
                                    onClick={() =>
                                        CurrentLoginStepAction(NextLoginStep)
                                    }
                                >
                                    <img
                                        className="h-[30px] w-[30px]"
                                        src={X_IMG}
                                        alt="google button"
                                    />
                                    <span className="pl-4 text-[#ccc]">
                                        Continue with X (formerly Twitter)
                                    </span>
                                </button>
                                <button
                                    className="text-white text-md flex align-middle items-center button-login w-full mt-4 border-gray h-[50px]"
                                    onClick={() =>
                                        CurrentLoginStepAction(NextLoginStep)
                                    }
                                >
                                    <img
                                        className="h-[30px]"
                                        src={PHONE_MAIL_IMG}
                                        alt="google button"
                                    />
                                    <span className="pl-4 text-[#ccc]">
                                        Continue with Phone
                                    </span>
                                </button>
                                <img
                                    src={OR_IMG}
                                    alt="or"
                                    className="or-image mt-4"
                                />
                                <div className="flex justify-between">
                                    <button
                                        className="text-[#CCC] flex justify-center items-center btn-meta w-[48%]"
                                        onClick={() =>
                                            CurrentLoginStepAction(
                                                NextLoginStep
                                            )
                                        }
                                    >
                                        <img
                                            src={METAMASK_IMG}
                                            className="h-[38px]"
                                            alt="metamask icon"
                                        />
                                        <span className="text-[#ccc] text-md">
                                            Metamask
                                        </span>
                                    </button>
                                    <button
                                        className="text-[#CCC] flex justify-center items-center btn-meta w-[48%]"
                                        onClick={() =>
                                            CurrentLoginStepAction(
                                                NextLoginStep
                                            )
                                        }
                                    >
                                        <img
                                            src={WALLET_IMG}
                                            className="h-[38px]"
                                            alt="metamask icon"
                                        />
                                        <span className="text-[#ccc] text-md">
                                            WalletConnect
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="footer-container">
                                <img
                                    src={FOOTER_IMG}
                                    alt="tria-label"
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
