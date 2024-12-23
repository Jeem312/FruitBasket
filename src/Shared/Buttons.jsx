import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Buttons = ({ text }) => {
    return (
        <div className="">
            <button
                className=" btn flex items-center text-[10px] md:text-[12px] lg:text-[14px] text-white py-2 bg-gradient-to-r from-[rgb(42,56,88)] to-[rgb(102,109,132)] md:py-3 px-2 md:px-5 font-title   hover:scale-105 shadow-md hover:shadow-lg focus:outline-none"
            >
                <span className="font-semibold">{text}</span>
            </button>
        </div>
    );
};

export default Buttons;
