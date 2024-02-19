import React from 'react';
import { ASSETS } from '../../config/wallet.config';

export default function CryptoList() {
    const CRYPTO_ASSETS = ASSETS.map((elem, index) => (
        <div className="py-4" key={index}>
            <div className="flex w-full" key={index}>
                <div className="flex w-1/2">
                    <img
                        src={elem.ICON}
                        className="w-[60px] h-[60px]"
                        alt="crypt assets"
                    />
                    <div className="">
                        <h4 className="text-[#ccc] text-lg pl-4">
                            {elem.NAME}
                        </h4>
                        <img
                            src={elem.CHAINS}
                            alt="chain icons"
                            className="h-[30px] pl-4"
                        />
                    </div>
                </div>
                <div className="flex justify-end text-end w-1/2 items-end">
                    <div className="flex-col">
                        <h4 className="text-[#ccc] text-md">{elem.USD_BAL}</h4>
                        <p className="text-[#ccc] text-md">{elem.TOKEN_BAL}</p>
                    </div>
                </div>
            </div>
        </div>
    ));
    return (
        <div className="">
            <div className="flex justify-between mt-2">
                <div className="text-[#cccc] text-lg w-full py-4">Crypto</div>
            </div>
            {CRYPTO_ASSETS}
        </div>
    );
}
