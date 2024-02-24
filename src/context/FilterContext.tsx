// import { SelectChangeEvent } from "@mui/material";
// import { createContext, useContext, useState } from "react";
// import { SetURLSearchParams, useSearchParams } from "react-router-dom";

// export interface FilterContextType {
//   // setSearchParams: SetURLSearchParams;
//   checkboxStars: IStars[];
//   queryString: string;
//   sortParam: string | null;
//   handleSelectChange: (event: SelectChangeEvent) => void;
//   handleClickCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }
// const FilterContext = createContext<FilterContextType | null>(null);
// export interface IStars {
//   number: number;
//   isChecked: boolean;
// }
// const starsDefault: IStars[] = [
//   {
//     number: 5,
//     isChecked: false,
//   },
//   {
//     number: 4,
//     isChecked: false,
//   },
//   {
//     number: 3,
//     isChecked: false,
//   },
//   {
//     number: 2,
//     isChecked: false,
//   },
//   {
//     number: 1,
//     isChecked: false,
//   },
// ];

// export function FilterProvider({ children }: { children: React.ReactNode }) {
//   const { Provider } = FilterContext;

//   const [searchParams, setSearchParams] = useSearchParams();
//   const queryString = searchParams.toString();
//   const sortParam = searchParams.get("sort");
//   ////
//   const [checkboxStars, setCheckboxStars] = useState(starsDefault);
//   /////
//   const handleSelectChange = (event: SelectChangeEvent) => {
//     const paramsArr = searchParams.toString().split("&");
//     const sortValue = event.target.value;
//     // console.log(sortValue);
//     const updatedParams = paramsArr.map((param) => {
//       if (param.startsWith("sort=")) {
//         // Replace '${value}' with '${value} '
//         return param.replace(param, `sort=${sortValue}`);
//       }
//       return param;
//     });
//     // console.log(updatedParams.join("&"));
//     setSearchParams(updatedParams.join("&"));
//   };

//   // console.log(checkboxStars);
//   const toggleChecked = (value: string) => {
//     setCheckboxStars((prevItems) => {
//       const numberFromValue = parseInt(value.split("=")[1]);
//       // console.log(numberFromValue);
//       // Clone the array
//       const updatedItems = [...prevItems];
//       // console.log(updatedItems);

//       const index = updatedItems.findIndex(
//         (item) => item.number === numberFromValue
//       );
//       // console.log(index);
//       // Toggle the isChecked property of the item
//       updatedItems[index].isChecked = !updatedItems[index].isChecked;
//       return updatedItems;
//     });
//   };
//   const handleClickCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const checkboxValue = event.target.value;
//     const updatedParams = searchParams.toString().split("&");
//     const isOldParamInURL = updatedParams.includes(checkboxValue);

//     if (isOldParamInURL) {
//       // Remove the parameter if it already exists
//       updatedParams.splice(updatedParams.indexOf(checkboxValue), 1);
//     } else {
//       // Add the parameter if it doesn't exist
//       updatedParams.push(checkboxValue);
//     }

//     toggleChecked(checkboxValue);
//     setSearchParams(updatedParams.join("&"));
//   };

//   return (
//     <Provider
//       value={{
//         handleSelectChange,
//         queryString,
//         sortParam,
//         handleClickCheckbox,
//         checkboxStars,
//       }}
//     >
//       {children}
//     </Provider>
//   );
// }

// export function useFilter() {
//   const context = useContext(FilterContext);
//   if (context === undefined)
//     throw new Error("context was used outside provider");
//   return context;
// }
