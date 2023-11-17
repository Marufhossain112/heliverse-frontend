import { api } from "../api/apiSlice";

const commentApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createComment: builder.mutation({
            query: ({ id, data }) => ({
                url: `posts/${id}/comment`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['comments']
        }),
        getComments: builder.query({
            query: (id) => `posts/${id}/comment`,
            providesTags: ['comments']
        }),
    })
});

export const { useCreateCommentMutation, useGetCommentsQuery } = commentApi;