// baseApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { tagTypesList } from "../tag-types";
import { getBaseUrl } from "@/helpers/config/envConfig";

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  tagTypes: tagTypesList,
  endpoints: () => ({}),
});
