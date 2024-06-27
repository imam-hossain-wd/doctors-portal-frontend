import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const authApi = baseApi.injectEndpoints({

  endpoints: (build) => ({

    createUser: build.mutation({
      query: (logIndata) => ({
        url:"/auth/signup",
        method:"POST",
        data:logIndata
      }),
      invalidatesTags:[tagTypes.patient]
    }),
    loginUser: build.mutation({
      query: (logIndata) => ({
        url:"/auth/login",
        method:"POST",
        data:logIndata
      }),
      invalidatesTags:[tagTypes.patient]
    }),

  }),
})

export const { useCreateUserMutation, useLoginUserMutation } = authApi