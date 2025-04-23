import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const soldApi = createApi({
  reducerPath: "soldApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  tagTypes: ["SoldProperties"],
  endpoints: (builder) => ({
    getSoldProperties: builder.query({
      query: () => "sold-properties",
      providesTags: ["SoldProperties"],
    }),
    addSoldProperty: builder.mutation({
      query: (body) => ({
        url: "sold-properties",
        method: "POST",
        body,
      }),
      invalidatesTags: ["SoldProperties"],
    }),
  }),
});

export const { 
  useGetSoldPropertiesQuery, 
  useAddSoldPropertyMutation 
} = soldApi;