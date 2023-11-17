import { api } from "../api/apiSlice";

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        
    })
});

export const { usePostCreateReviewMutation } = userApi;