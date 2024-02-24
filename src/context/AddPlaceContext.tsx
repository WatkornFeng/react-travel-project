// import { createContext, useContext, useState } from "react";

// export interface AddPlaceContextType {
//   selectplace: string | null;
//   setSelectPlace: React.Dispatch<React.SetStateAction<string | null>>;

//   handleSelectPlace: (
//     event: React.SyntheticEvent<Element, Event>,
//     value: string | null
//   ) => void;
// }
// const AddPlaceContext = createContext<AddPlaceContextType | null>(null);

// export function PlaceProvider({ children }: { children: React.ReactNode }) {
//   const { Provider } = AddPlaceContext;

//   const [selectplace, setSelectPlace] = useState<string | null>(null);

//   const handleSelectPlace = (
//     event: React.SyntheticEvent<Element, Event>,
//     value: string | null
//   ) => {
//     console.log(event.target);
//     setSelectPlace(value);
//   };
//   return (
//     <Provider value={{ selectplace, setSelectPlace, handleSelectPlace }}>
//       {children}
//     </Provider>
//   );
// }

// export function useAddPlace() {
//   const context = useContext(AddPlaceContext);
//   if (context === undefined)
//     throw new Error("context was used outside provider");
//   return context;
// }
