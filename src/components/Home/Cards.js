import React from 'react';
import HOME_PAGE_CONTENT from '../../config/wallet.config';

export default function Cards() {
    const { ASSETS_UP, WALLET_BAL, REFRESH_ICON, BUY_ICON, SEND_ICON } =
        HOME_PAGE_CONTENT;
    return (
        <>
            <div className="h-[190px] border-xl shadow-lg text-white mt-6 card-container p-4 relative">
                <div className="flex text-lg text-[#CCC]">
                    Assets Up &nbsp;
                    <span className="pellet-green bg-[#255937] rounded-[20px] text-[#55CC7D] text-md px-2">
                        {ASSETS_UP}
                    </span>
                </div>
                <div className="flex items-center align-middle">
                    <div className="text-[28px]">
                        <b>{WALLET_BAL}</b>
                    </div>
                    <img
                        src={REFRESH_ICON}
                        className="w-[35px] h-[35px] cursor-pointer mr-6"
                        alt="refresh icon"
                    />
                </div>
                <div className="absolute bottom-4 right-4 left-4">
                    <div className="flex justify-between">
                        <button className="flex items-center align-middle button-home justify-center p-0 w-[40%]">
                            <img src={BUY_ICON} className="" alt="buy crypto" />
                        </button>
                        <button className="flex items-center align-middle button-home justify-center p-0 w-[40%]">
                            <img
                                src={SEND_ICON}
                                className=""
                                alt="buy crypto"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
