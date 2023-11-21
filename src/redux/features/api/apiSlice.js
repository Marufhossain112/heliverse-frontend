
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://heilverse.vercel.app/',
        prepareHeaders: (headers, { getState }) => {
            // Include any global headers here if needed
            return headers;
        },
        // Customize the generated URL
        baseQuery: async (args, api, extraOptions) => {
            const { baseUrl, url, params, ...rest } = args;
            const { getState } = api;
            const state = getState();

            // Remove undefined parameters from the query
            const filteredParams = Object.fromEntries(
                Object.entries(params).filter(([key, value]) => value !== undefined)
            );

            const customizedArgs = {
                baseUrl,
                url,
                params: filteredParams,
                ...rest,
            };

            return fetchBaseQuery.default(customizedArgs, api, extraOptions);
        },
    }),
    tagTypes: [],
    endpoints: (builder) => ({

    }),
});

export default api;


