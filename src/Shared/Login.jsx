import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/Provider';
import { FaGoogle } from 'react-icons/fa';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Import Firebase methods

const Login = () => {
    const { logIn ,googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const from = "/";

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    // Handle Google login
    const handleGoogleLogin =() => {
        googleLogin()
      
        toast.success("Google Login Successful");
        console.log("Logged in user:", user);
        navigate('/');
    
    };

    const onSubmit = (data) => {console.log(data);
        const {Email,Password}=data;
        
      
  
       
            logIn(Email, Password)
                .then(result => {
                    console.log(result.user);
                    reset();
                    navigate(from,);
                })
                .catch(error => {
                    console.log(error.message);
                });
        } 

    return (
        <div className=''>
            <h1 className='flex justify-center items-center font-bold text-3xl text-white font-title '>
                Register Now
            </h1>

            <div className="flex flex-col justify-center items-center my-2">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md shadow-2xl border border-base-200 rounded-lg">
                    <div className="w-full p-4">
                    

                        <div className="form-control">
                            <label className="label text-teal-800 font-title">
                                <span className="label-text text-white font-semibold ">Email</span>
                            </label>
                            <input
                                name='email'
                                type="text"
                                placeholder="Email"
                                className="input input-bordered text-white placeholder-white border-white"
                                style={{ backgroundColor: 'transparent' }}
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-400'>This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label text-white font-title">
                                <span className="label-text text-white font-semibold ">Password</span>
                            </label>
                            <input
                                name='password'
                                type="password"
                                placeholder="Password"
                                className="input input-bordered text-white placeholder-white border-white"
                                style={{ backgroundColor: 'transparent' }}
                                {...register("password")}
                            />
                        </div>

                        <div className="form-control mt-6 p-0">
                            <button className="border border-white text-white rounded-lg p-3 font-title ">LogIn</button>
                        </div>

                        {/* Google login button */}
                        <div className="form-control mt-6 p-0">
                            <button onClick={handleGoogleLogin} className="border border-white text-white rounded-lg p-3 font-title">
                                <span className='text-xl flex justify-center items-center'>
                                    <FaGoogle />
                                </span>
                            </button>
                        </div>

                        <label className="label text-white font-title">
                            Have an account?{" "}
                            <Link to="/login" className="label-text-alt link link-hover text-white">
                                Please Register
                            </Link>
                        </label>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;
