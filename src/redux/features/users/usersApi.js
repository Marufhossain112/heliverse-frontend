import { api } from "../api/apiSlice";
const usersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (page) => `users?page=${page}`,
        }),
    })
});

export const { useGetUsersQuery } = usersApi;