import React from 'react';
import HOME_PAGE_CONTENT from '../../config/wallet.config';

export default function Header(props) {
    const { USR_NAME, COPY_ICON, POLY_ICON, DROP_DOWN_ICON, PROFILE_PIC } =
        HOME_PAGE_CONTENT;
    return (
        <>
            <div className="flex justify-between">
                <div className="name-container text-[#FFF] text-lg flex align-middle items-center gap-2">
                    <img
                        src={PROFILE_PIC}
                        className="w-[30px] h-[30px] cursor-pointer"
                        alt="copy icon"
                    />
                    {props.UserName ? props.UserName : USR_NAME}
                    <img
                        src={DROP_DOWN_ICON}
                        className="w-[20px] h-[20px] cursor-pointer"
                        alt="copy icon"
                    />
                </div>
                <div className="header-icons-continer flex justify-between gap-4 items-center align-middle">
                    <img
                        src={COPY_ICON}
                        className="w-[20px] h-[20px] cursor-pointer"
                        alt="copy icon"
                    />
                    <img
                        src={POLY_ICON}
                        className="w-[25px] h-[25px] cursor-pointer"
                        alt="copy icon"
                    />
                </div>
            </div>
        </>
    );
}
