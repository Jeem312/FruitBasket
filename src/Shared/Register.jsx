import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/Provider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const from = "/";

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        const { email, password, Name, image } = data;

        // Check if password has at least 6 characters or digits
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters or digits long");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    toast('Register Successfully');
                    updateUserProfile(Name, image);
                    navigate(from);
                }
            });
    };

    return (
        <div className=''>
            <h1 className='flex justify-center items-center font-bold text-3xl text-white font-title my-4'>
                Register Now
            </h1>

            <div className="flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md shadow-2xl border border-base-200 rounded-lg">
                    <div className="w-full p-4">
                        <div className="form-control">
                            <label className="label text-white font-title">
                                <span className="label-text text-white font-semibold ">Full Name</span>
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder="Full name"
                                className="input input-bordered text-white placeholder-white border-white"
                                style={{ backgroundColor: 'transparent' }}
                                {...register("Name", { required: true })}
                            />
                            {errors.Name && <span className='text-red-400'>This field is required</span>}
                        </div>

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
                            <button className="border border-white text-white rounded-lg p-3 font-title ">Register</button>
                        </div>

                        <label className="label text-white font-title">
                            Have an account?{" "}
                            <Link to="/login" className="label-text-alt link link-hover text-white ">
                                Please Login
                            </Link>
                        </label>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;
