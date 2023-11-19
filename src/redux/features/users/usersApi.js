import { api } from "../api/apiSlice";
const usersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `users`,
        }),
    })
});

export const { useGetUsersQuery } = usersApi;