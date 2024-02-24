import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IStars {
  number: number;
  isChecked: boolean;
}
export interface IProperty {
  type: string;
  isChecked: boolean;
}
export interface IRatings {
  grade: string;
  isChecked: boolean;
  value: number;
}
interface IinitailState {
  stars: IStars[];
  properties: IProperty[];
  ratings: IRatings[];
  queries: string[];
  isModalFilterOpen: boolean;
}
const initialState: IinitailState = {
  queries: ["sort=PRICE_LOW_TO_HIGH", "rating=Any"],
  stars: [
    { number: 5, isChecked: false },
    { number: 4, isChecked: false },
    { number: 3, isChecked: false },
    { number: 2, isChecked: false },
    { number: 1, isChecked: false },
  ],
  properties: [
    { type: "Hotel", isChecked: false },
    { type: "Hostel", isChecked: false },
    { type: "Resort", isChecked: false },
    { type: "Apartment", isChecked: false },
    { type: "Aparthotel", isChecked: false },
    { type: "B&B", isChecked: false },
    { type: "Homes", isChecked: false },
    { type: "Villas", isChecked: false },
  ],
  ratings: [
    { grade: "Any", isChecked: true, value: 0 },
    { grade: "Outstanding", isChecked: false, value: 9 },
    { grade: "Very Good", isChecked: false, value: 8 },
    { grade: "Good", isChecked: false, value: 7 },
    { grade: "Satisfactory", isChecked: false, value: 6 },
  ],
  isModalFilterOpen: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    querySort(state, action: PayloadAction<string>) {
      const newSortBy = action.payload;
      state.queries.forEach((query, index) => {
        if (query.includes("sort")) state.queries[index] = newSortBy;
      });
    },
    queryStars(state, action: PayloadAction<string>) {
      const newnNumberStars = +action.payload;
      state.stars.forEach((star, index) => {
        if (star.number === newnNumberStars) {
          if (!star.isChecked) {
            state.queries.push(`star=${newnNumberStars}`);

            state.stars[index].isChecked = true;
          } else {
            state.queries = state.queries.filter(
              (query) => query !== `star=${newnNumberStars}`
            );

            state.stars[index].isChecked = false;
          }
        }
      });
    },
    queryProperties(state, action: PayloadAction<string>) {
      const newPropertyType = action.payload;
      state.properties.forEach((property, index) => {
        if (property.type === newPropertyType) {
          if (!property.isChecked) {
            state.queries.push(`property=${newPropertyType}`);
            state.properties[index].isChecked = true;
          } else {
            state.queries = state.queries.filter(
              (query) => query !== `property=${newPropertyType}`
            );
            state.properties[index].isChecked = false;
          }
        }
      });
    },

    queryRatings(state, action: PayloadAction<string>) {
      // queryRatings(
      //   state,
      //   action: PayloadAction<{ value: string; isFilterOpen: boolean }>
      // ) {
      const newRating = action.payload;

      state.ratings.forEach((rating, index) => {
        if (rating.grade === newRating) {
          state.ratings[index].isChecked = true;
        } else {
          state.ratings[index].isChecked = false;
        }
      });

      state.queries.forEach((query, index) => {
        if (query.includes("rating")) {
          state.queries[index] = "rating=" + newRating;
        }
      });
    },

    toggleModalFilter(
      state,
      // action: PayloadAction<{
      //   open: boolean;
      //   triggerFetch?: boolean;
      //   getPrevState?: boolean;
      action: PayloadAction<boolean>
    ) {
      state.isModalFilterOpen = action.payload;
      // state.isModalFilterOpen = action.payload.open;

      // if (action.payload.triggerFetch) {
      //   console.log("xxxx");
      //   state.queries.push("");

      //   return;
      // }
      // console.log(action.payload.open);
      // if (action.payload.getPrevState) {
      //   console.log("getPrev");
      //   state.stars.forEach((star, index) => {
      //     if (star.isChecked) {
      //       state.stars[index].isChecked = false;
      //       const indexToReplace = state.queries.indexOf(`star=${star.number}`);
      //       state.queries[indexToReplace] = "";
      //     }
      //   });
      //   state.properties.forEach((property, index) => {
      //     if (property.isChecked) {
      //       state.properties[index].isChecked = false;
      //       const indexToReplace = state.queries.indexOf(
      //         `property=${property.type}`
      //       );
      //       state.queries[indexToReplace] = "";
      //     }
      //   });
      //   state.ratings.forEach((rating, index) => {
      //     if (rating.isChecked) {
      //       state.ratings[index].isChecked = false;
      //     }

      //     state.ratings[index].isChecked = !rating.isChecked;
      //     const indexToReplace = state.queries.indexOf(
      //       `rating=${rating.grade}`
      //     );
      //     state.queries[indexToReplace] = "";
      //   });
      // }
    },
  },
});

export const {
  querySort,
  queryStars,
  queryProperties,
  queryRatings,
  toggleModalFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
