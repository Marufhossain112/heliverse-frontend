import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSinglePostQuery } from '../../redux/features/posts/postApi';
import { Card } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import persistReducer from 'redux-persist/es/persistReducer';
import { toast } from 'react-toastify';
import { useCreateCommentMutation, useGetCommentsQuery } from '../../redux/features/comment/commentApi';
import Comment from '../comment/comment';
const CardDetail = () => {
    const { id } = useParams();

    const { userName } = useSelector((store) => store.persistedReducer);
    const { isLoading, data } = useGetSinglePostQuery(id);
    const { data: commentData } = useGetCommentsQuery(id);
    console.log("commentData", commentData);

    const [createComment] = useCreateCommentMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const onSubmit = async (data) => {
        await createComment({ data: { ...data, userName }, id }).unwrap().then((response) => {
            if (response.acknowledged) {
                toast.success("Comment added successfully.");
                // dispatch(setUser({
                //     user: data.email,
                //     role,
                //     uid,
                // }));
                reset();
            }
        }).catch((error) => {
            if (error) {
                toast.error(error?.data?.message);
                return;
            }
        });
        // console.log(data);
        // createComment(data);
        // toast.success("Comment added");
        // reset();
    };
    return (
        <div className='flex flex-col items-center justify-center mt-5'>
            <Card
                className="max-w-sm "
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={data?.photo}
            >
                <p className="text-sm  tracking-tight text-gray-900 dark:text-white">
                    {data?.caption}
                </p>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex'>
                            <input id="comment" type="text" name="comment" placeholder="Add a comment.." autocomplete="comment"
                                class="block w-full px-1
                        text-gray-800 appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                {...register("comment", { required: true })}
                                required />
                            {errors.comment && (
                                <p className="text-red-600">{errors.comment?.message}</p>
                            )}
                            <button type="submit"
                                class=" py-2 px-5  bg-gray-800 rounded-sm
                        font-medium text-white uppercase
                        focus:outline-none hover:bg-gray-700 hover:shadow-none">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </Card>
            {/* <Comment /> */}
            {commentData?.map((comment) =>
                <Card style={{ minWidth: "24rem",margin:"0.5rem 0" }}
                >
                    <p className="text-sm  tracking-tight text-gray-900 dark:text-white">
                        <span className='font-bold mr-2'>{userName}</span>  {comment.comment}
                    </p>
                </Card>
            )}

        </div>
    );
};

export default CardDetail;