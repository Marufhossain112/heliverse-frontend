import { api } from "../api/apiSlice";
const usersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: ({ page, searchTerm, domain, gender, available }) => {
                // Create an array to hold the filter parameters
                const filters = [];

                // Add filters to the array if the values are defined
                if (page !== undefined) filters.push(`page=${page}`);
                if (searchTerm !== undefined) filters.push(`searchTerm=${searchTerm}`);
                if (domain !== undefined) filters.push(`domain=${domain}`);
                if (gender !== undefined) filters.push(`gender=${gender}`);
                if (available !== undefined) filters.push(`available=${available}`);

                // Join the filters array with "&" to create the final query string
                const queryString = filters.join("&");

                // Construct the final URL with the query string
                return `users?${queryString}`;
            },
        }),
    }),
});

export const { useGetUsersQuery } = usersApi;
