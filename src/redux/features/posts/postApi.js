import { api } from "../api/apiSlice";

const postApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getSinglePost: builder.query({
            query: (id) => `posts/${id}`,
        }),
    })
});

export const { useGetSinglePostQuery } = postApi;