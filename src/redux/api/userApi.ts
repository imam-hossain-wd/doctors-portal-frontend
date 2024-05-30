import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<any, void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: [tagTypes.patient],
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserQuery } = userApi;