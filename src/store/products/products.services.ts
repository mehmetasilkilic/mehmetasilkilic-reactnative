import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://upayments-studycase-api.herokuapp.com/api";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1laG1ldGFzaWw5NkBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vbWVobWV0YXNpbGtpbGljIiwiaWF0IjoxNjY5NDU4NDQ5LCJleHAiOjE2Njk4OTA0NDl9.6lBz1gq1JCo056O40PKnS3WSYvn7Qn81GGM9cwerVCM";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => "/products",
    }),
    getCategories: builder.query<any, void>({
      query: () => "/categories",
    }),
    getSingleProduct: builder.query<any, string>({
      query: (productId) => `/products/${productId}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetSingleProductQuery,
} = productsApi;
