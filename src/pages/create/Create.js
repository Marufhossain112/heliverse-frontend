/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import app from '@/firebase/firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
import { login } from '../../redux/features/user/userSlice';
export default function Create() {
    const imageHostKey = process.env.REACT_APP_imgbbApiKey;
    console.log(imageHostKey);

    const dispatch = useDispatch();
    const [isError, setIsError] = useState("");
    const auth = getAuth(app);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
        // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useForm();
    // toast 
    const handleSuccess = () => toast('Sign up is successful', { hideProgressBar: true, autoClose: 2000, type: 'success', closeButton: false });
    const handleFailed = () => toast('Failed to sign up', { hideProgressBar: true, autoClose: 2000, type: 'failed', closeButton: false });
    const { userName, userEmail } = useSelector((store) => store.persistedReducer);
    console.log("UserName", userName);
    console.log("UserEmail", userEmail);
    const onSubmit = async (data) => {
        // console.log(data);
        const image = data.photo[0];
        // console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        }).then(res => res.json()).then(imgData => {
            console.log(imgData);
            fetch(`https://insta-clone-backend-pro.vercel.app/posts/create-post`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Origin": "*"
                },
                mode: "cors",
                credentials: "include",
                body: JSON.stringify({
                    caption: data.caption,
                    photo: imgData?.data.url,
                    userName,
                    userEmail
                })
            }).then(res => res.json()).then(result => {
                console.log(result);
                toast.success(`Post created successfully`);
            });
        });
    };

    return (
        <div class="flex flex-col h-screen bg-gray-100">
            <div class="grid place-items-center mx-2 my-20 sm:my-auto">
                <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                px-6 py-10 sm:px-10 sm:py-6 
                bg-white rounded-lg shadow-md lg:shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)} class="mt-10" method="POST">
                        <label for="caption" class="block text-xs font-semibold text-gray-600 uppercase">Caption</label>
                        <input id="caption" type="text" name="caption" placeholder="Write a caption..." autocomplete="caption"
                            {...register("caption")}
                            class="block w-full py-3 px-1 mt-2 
                        text-gray-800 appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200" />
                        <label for="photo" class="block text-xs font-semibold text-gray-600 uppercase">Photo</label>
                        <input id="photo" type="file" name="photo" {...register("photo", { required: true })}
                            class="block w-full py-3 px-1 mt-2 
                        text-gray-800 appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />
                        {errors.photo && (
                            <p className="text-red-600">{errors.photo?.message}</p>
                        )}
                        {<p className='text-red-700'>{isError}</p>}
                        <button type="submit"
                            class="w-full py-3  bg-gray-800 rounded-sm
                        font-medium text-white uppercase
                        focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            Create post
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}














