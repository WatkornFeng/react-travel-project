interface IHotels {
  _id: string;
  name: string;
  price: number;
  star: number;
  rating: number;
  facilities: string[];
  location: string;
  slug: string;
  image: string;
}
/////// get multiple hotels
export interface IGetHotels {
  queryString: string;
  placeParam: string | undefined;
}
export interface IGetHotelsResponse {
  status: string;
  data: {
    hotels: IHotels[];
  };
  length: number;
}
/////// get 1 hotel
export interface IGetHotel {
  nameHotel: string | undefined;
  placeParam: string | undefined;
}
export interface IGetHotelResponse {
  status: string;
  data: {
    hotel: IHotels;
  };
  length: number;
}

////// upload image hotel
// export interface IAddImageHotel {
//   file: FileList;
// }
export interface IAddImageHotelResponse {
  status: string;
}
