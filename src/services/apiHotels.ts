const HOST_API = import.meta.env.VITE_HOSTNODE_API_DEV;
export interface IHotels {
  _id: string;
  name: string;
  price: number;
  star: number;
  rating: number;
  facilities: string[];
  location: string;
  slug: string;
}
export interface IResponseData {
  status: string;
  data: {
    Hotels: IHotels[];
  };
}

// type IGetHotels = string | null;
interface IGetHotels {
  queryString: string;
  placeParam: string | undefined;
}

// export async function getHotels({ queryString, placeParam }: IGetHotels) {
//   try {
//     //sort=PRICE_LOW_TO_HIGH&rating=Very+Good&star=5&property=Hotel&startDate=2024-02-11&endDate=2024-02-12&adults=1&children=0&rooms=1
//     // console.log(queryString);
//     const data = await fetch(
//       `${HOST_API}/api/v1/hotels/${placeParam}?${queryString}`
//     );
//     const res: IResponseData = await data.json();

//     if (res.status === "Error getting tour") return [];
//     const hotels = res.data.Hotels;
//     return hotels;
//   } catch (err) {
//     throw new Error("Failed to fetch hotels");
//   }
// }

// export async function getHotel(placeParam: string, slug: string) {
//   try {
//     const data = await fetch(
//       `${HOST_API}/api/v1/hotels/${placeParam}/65cb359cb8fd9677d721060e`
//     );
//     const res: IResponseData = await data.json();
//     console.log(res);
//     if (res.status === "Error getting tour") return [];
//     const hotels = res.data.Hotels;
//     return hotels;
//   } catch (err) {
//     throw new Error("Failed to fetch hotels");
//   }
// }
