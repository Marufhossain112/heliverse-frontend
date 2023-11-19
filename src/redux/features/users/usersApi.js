import { api } from "../api/apiSlice";
const usersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: ({ page, searchTerm }) => `users?page=${page}&searchTerm=${searchTerm}`,
        }),
    })
});

export const { useGetUsersQuery } = usersApi;