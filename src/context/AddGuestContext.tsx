// import { createContext, useContext, useReducer } from "react";

// export interface TypeIniState {
//   adult: number;
//   child: number;
//   room: number;
// }
// interface ActionType {
//   type: string;
//   payload?: number;
// }

// const iniitialState = {
//   adult: 1,
//   child: 0,
//   room: 1,
// };

// function reducer(state: TypeIniState, action: ActionType): TypeIniState {
//   switch (action.type) {
//     case "inc-adult":
//       return {
//         ...state,
//         adult: state.adult + 1,
//       };
//     case "inc-child":
//       return {
//         ...state,
//         child: state.child + 1,
//       };
//     case "inc-room":
//       if (state.room >= state.adult)
//         return {
//           ...state,
//           adult: state.adult + 1,
//           room: state.room + 1,
//         };
//       return {
//         ...state,
//         room: state.room + 1,
//       };
//     case "dec-adult":
//       return {
//         ...state,
//         adult: state.adult - 1,
//       };
//     case "dec-child":
//       return {
//         ...state,
//         child: state.child - 1,
//       };
//     case "dec-room":
//       return {
//         ...state,
//         room: state.room - 1,
//       };
//     default:
//       throw new Error("Action unknown");
//   }
// }
// interface MyAction {
//   type: string;
//   payload?: number;
// }
// export interface SearchHotelContextType {
//   state: TypeIniState;
//   dispatch: React.Dispatch<MyAction>;
// }
// const HotelsContext = createContext<SearchHotelContextType | null>(null);

// export function GuestProvider({ children }: { children: React.ReactNode }) {
//   const { Provider } = HotelsContext;
//   const [state, dispatch] = useReducer(reducer, iniitialState);

//   return (
//     <Provider
//       value={{
//         state,
//         dispatch,
//       }}
//     >
//       {children}
//     </Provider>
//   );
// }

// export function useAddGuest() {
//   const context = useContext(HotelsContext);
//   if (context === undefined)
//     throw new Error("context was used outside provider");
//   return context;
// }
