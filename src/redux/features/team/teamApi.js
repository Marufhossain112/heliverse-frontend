import { api } from "../api/apiSlice";

const teamApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createTeam: builder.mutation({
            query: ({ data }) => ({
                url: `team`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['team']
        }),
        getTeams: builder.query({
            query: () => `team`,
            providesTags: ['team']
        }),
    })
});

export const { useGetTeamsQuery,useCreateTeamMutation } = teamApi;