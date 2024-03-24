import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import searchReducer from "./features/search/searchSlice";
import filterReducer from "./features/filter/filterSlice";
// import hotelReducer from "./features/bookings/hotelSlice";
import { hotelApi } from "./services/apiHotelSlice";
import { userApi } from "./services/apiUserSlice";
import userReducer from "./features/user/userSlice";
import { provinceApi } from "./services/apiProvinceSlice";
const store = configureStore({
  reducer: {
    search: searchReducer,
    filter: filterReducer,
    // hotel: hotelReducer,
    user: userReducer,
    [hotelApi.reducerPath]: hotelApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [provinceApi.reducerPath]: provinceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(hotelApi.middleware)
      .concat(userApi.middleware)
      .concat(provinceApi.middleware),
});

export default store;

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
