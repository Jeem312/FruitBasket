import React from 'react';
import { Outlet } from 'react-router-dom';
import img1 from '../assets/FruitBaskett.png'

import Navbar from '../Shared/Navbar';

const Main = () => {
    return (
        <div className="bg-gradient-to-r from-[rgb(42,56,88)] to-[rgb(102,109,132)] h-screen p-4 md:p-14 rounded-lg flex flex-col">
            {/* Background Image with Opacity */}
            <div
                className="relative container mx-auto flex-grow rounded-lg"
                style={{
                    height: '100%',
                    width: '100%',
                    backgroundImage: `url(${img1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Opacity Layer */}
                <div className="absolute top-0 left-0 w-full h-full rounded-lg"></div>

                {/* Content */}
                <div className="relative z-10">
                    <Navbar />
                    <div className="p-5 rounded-lg mt-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
