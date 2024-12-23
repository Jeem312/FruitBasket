import React, { useContext } from 'react';
import img1 from '../assets/variety-tasty-fruits-wooden-bucket_114579-50721.jpg'
import { AuthContext } from '../Provider/Provider';
import Buttons from './Buttons';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const {user,logOut}= useContext(AuthContext);
    return (
        <div className='border border-t-0 border-x-0 border-white rounded-lg'>
         <div className="navbar ">
  <div className="flex-1">
    <a className=" text-3xl font-semibold font-title text-white">FruitBasket</a>
  </div>
 
  
  {
    user?  <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS Navbar component"
          src={img1} />
      </div>
    </div>
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
    
      <li><a>Display Name</a></li>
      <li><a>LeaderBoard</a></li>
      <li><a>Logout</a></li>
    </ul>
  </div> : <Link to={'/login'}><Buttons text={"Login"}></Buttons></Link>
  }
  </div>
</div>
        
    );
};

export default Navbar;