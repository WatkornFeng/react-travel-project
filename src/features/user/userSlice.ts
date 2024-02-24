import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};
const userSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setUser(state) {
      // const {} = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
