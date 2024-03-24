import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ROOT_ROUTE_API, ROUTE_PROVINCES } from "./constant";

export interface IGetProvincesResponse {
  status: string;
  provinces: Province[];
}

export interface Province {
  pictureCover: {
    url: string;
  };
  _id: string;
  name: string;
}

export const provinceApi = createApi({
  reducerPath: "provinceApi",
  // tagTypes: ["hotels"],
  baseQuery: fetchBaseQuery({
    baseUrl: ROOT_ROUTE_API + ROUTE_PROVINCES,
  }),
  endpoints: (builder) => ({
    getProvinces: builder.query<IGetProvincesResponse, void>({
      query: () => "/",
    }),
  }),
});

export const { useGetProvincesQuery } = provinceApi;
