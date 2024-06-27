// baseApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { tagTypesList } from "../tag-types";


export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: 'https://doctors-portal-backend-kappa.vercel.app/api/v1' }),
  tagTypes: tagTypesList,
  endpoints: () => ({}),
});
