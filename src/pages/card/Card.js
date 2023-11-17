
'use client';

import { Card } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoBookmarkSharp } from "react-icons/io5";
import { BiSolidDislike } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
function PostCard() {
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const { userName } = useSelector((store) => store.persistedReducer);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://insta-clone-backend-pro.vercel.app/posts')
            .then(res => res.json()).then(data => setPosts(data)
            );
    }, []);
    // console.log(posts);
    const onSubmit = async (data) => {
        console.log(data);
    };
    return (
        <div className='flex flex-col justify-center items-center'>
            {
                posts?.map(post => (
                    <div>
                        <h6 className="text-mdd font-bold tracking-tight text-gray-900 dark:text-white mt-[2rem] mb-2">
                            {userName}
                        </h6>
                        <Card
                            className="max-w-sm "
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={post.photo}
                        >
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    {
                                        isLiked ? <span onClick={() => setIsLiked(false)} className='text-xl'><BiSolidDislike /></span> : <span onClick={() => setIsLiked(true)} className='text-xl'><BiLike /></span>
                                    }
                                    {/* <span className='text-xl'><BiLike /></span> */}
                                    <Link to={`/cardDetails/${post._id}`}>
                                        <span className='text-xl'><FaRegComment /></span>
                                    </Link>
                                    <span className='text-xl'><CiShare2 /></span>
                                </div>
                                <span className='text-xl'><CiBookmark /></span>
                            </div>

                            <p className="text-sm  tracking-tight text-gray-900 dark:text-white">
                                {post.caption}
                            </p>
                        </Card>
                    </div>
                )
                )
            }
        </div>
    );
}
export default PostCard;