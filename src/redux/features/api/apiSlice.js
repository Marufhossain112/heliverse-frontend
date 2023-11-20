// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://heilverse.vercel.app/' }),
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    tagTypes: [],
    endpoints: (builder) => ({

    }),
});
export default api;