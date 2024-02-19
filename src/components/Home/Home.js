import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from './Header';
import Cards from './Cards';
import CryptoList from './CryptoList';
import FOOTER_IMG from '../../assets/images/footer-img.png';
import NAV_IMG from '../../assets/images/Web app navigation.png';

export default function Home(props) {
    const { IsLoginComplete } = props;
    if (!!!IsLoginComplete) return <Navigate to="/" />;
    return (
        <div className="container mx-auto h-screen p-4">
            <div className="h-fit w-full tria-main-container rounded-[14px]">
                <Header {...props} />
            </div>
            <Cards />
            <CryptoList />
            <div className="flex justify-center w-full">
                <img src={NAV_IMG} alt="navigation icon" className="h-[60px]" />
            </div>
            <div className="footer-container">
                <img src={FOOTER_IMG} alt="tria-label" className="" />
            </div>
        </div>
    );
}
