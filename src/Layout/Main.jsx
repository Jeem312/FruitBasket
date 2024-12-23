// Import required dependencies
import React from 'react';
import { Outlet } from 'react-router-dom';

import img2 from '../assets/jkw8gda3.png';
import Navbar from '../Shared/Navbar';

const Main = () => {
    return (
        <div className=" bg-gradient-to-r from-[rgb(42,56,88)] to-[rgb(102,109,132)] h-screen p-4 md:p-14 rounded-lg flex flex-col">
          
      
            {/* Content with background image */}
            <div
                className="container mx-auto flex-grow rounded-lg bg-opacity-60"
                style={{
                  
                    height:'100%',
                    width:'100%',
                    backgroundImage: `url(${img2})`,
                   
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                     <div>
                     <Navbar />
                     </div>
                     <div className="p-5 rounded-lg mt-5">
                <Outlet />
            </div>

            </div>

          
           
        </div>
    );
};

export default Main;