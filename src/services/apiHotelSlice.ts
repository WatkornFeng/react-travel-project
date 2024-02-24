import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  // IAddImageHotel,
  IAddImageHotelResponse,
  IGetHotel,
  IGetHotelResponse,
  IGetHotels,
  IGetHotelsResponse,
} from "./apiHotel.type";

export const hotelApi = createApi({
  reducerPath: "hotelApi",
  // tagTypes: ["hotels"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/hotels",
  }),
  endpoints: (builder) => ({
    getHotels: builder.query<IGetHotelsResponse, IGetHotels>({
      query: ({ placeParam, queryString }) => ({
        url: `/${placeParam}?${queryString}`,
      }),
      // providesTags: ["hotels"],
    }),
    getHotel: builder.query<IGetHotelResponse, IGetHotel>({
      query: ({ placeParam, nameHotel }) => `/${placeParam}/${nameHotel}`,
      // providesTags: ["hotels"],
    }),
    addImageHotel: builder.mutation<IAddImageHotelResponse, FormData>({
      query: (file) => ({
        url: "/upload-image",
        method: "POST",
        body: file,
      }),

      // providesTags: ["hotels"],
    }),
  }),
});

export const { useGetHotelsQuery, useGetHotelQuery, useAddImageHotelMutation } =
  hotelApi;

// http://localhost:3000/api/v1/hotels/Bangkok?rating=Any&sort=PRICE_HIGH_TO_LOW
