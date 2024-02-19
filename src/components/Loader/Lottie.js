import React from 'react';
import Lottie from 'react-lottie';
import LOGO_IMG from '../../assets/images/main-logo-icon.png';
import ARROW_LEFT from '../../assets/images/arrow-left.png';
import animationData from '../../assets/animations/background.json';

const LottieBackground = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <div className="relative container mx-auto h-screen p-4">
            <div
                className="rounded-xl bg-[#101010]"
                style={{
                    position: 'relative',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                }}
            >
                <Lottie options={defaultOptions} />
            </div>
            <div className="absolute top-4 left-2 header-container cursor-pointer">
                <img src={ARROW_LEFT} alt="back button" className="w-[20px]" />
            </div>
            <div className="absolute top-40 left-[50%]">
                <div className="relative top-0 left-[-50%] flex-col justify-center items-center h-full align-middle">
                    <div className="flex justify-center mt-2">
                        <img
                            src={LOGO_IMG}
                            alt="tria logo"
                            className="w-[85px]"
                        />
                    </div>
                    <div className="flex justify-center">
                        <h3 className="text-white mt-2 text-center">
                            Welcome to <b>Tria</b>
                            <br />
                            Logging you in...
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LottieBackground;
