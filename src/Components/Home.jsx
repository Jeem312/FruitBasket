import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import Buttons from '../Shared/Buttons';
import { Link } from 'react-router-dom';

const Home = () => {
    const { user } = useContext(AuthContext);  // Get the user from AuthContext

    return (
       <div>
       
         <div className="flex flex-col justify-center items-center  ">
          
         
          {user ? (
              <button className="md:absolute md:top-80 md:right-2 btn w-24 flex items-center text-[10px] md:text-[12px] lg:text-[14px] text-white py-2 bg-gradient-to-r from-[rgb(42,56,88)] to-[rgb(102,109,132)] md:py-3 px-2 md:px-4 font-title   hover:scale-105 shadow-md hover:shadow-lg focus:outline-none">
                  Play Now
              </button>
          ) : (
              <Link to="/register">
                   <div className="md:relative">
          <button
              className="md:absolute md:top-80 md:right-2 btn w-24 flex items-center text-[10px] md:text-[12px] lg:text-[14px] text-white py-2 bg-gradient-to-r from-[rgb(42,56,88)] to-[rgb(102,109,132)] md:py-3 px-2 md:px-4 font-title   hover:scale-105 shadow-md hover:shadow-lg focus:outline-none"
          > 
             Register 
          </button></div>
              </Link>
          )}
          </div>
       </div>
       
    );
};

export default Home;
