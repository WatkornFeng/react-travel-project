import { User } from "@auth0/auth0-react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface IAddUser {
  status: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  // tagTypes: ["hotels"],
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000/api/v1/auth",
    baseUrl: "http://localhost:3000/api/v1/users",
  }),
  endpoints: (builder) => ({
    addUser: builder.mutation<IAddUser, { user: User; token: string }>({
      query: ({ user, token }) => ({
        url: "/signup",
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          locale: user.locale,
        }),
      }),
    }),
  }),
});

export const { useAddUserMutation } = userApi;
