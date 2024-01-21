import hotel_1 from "../assets/images/hotel/hotel-1.jpg";
import hotel_2 from "../assets/images/hotel/hotel-2.jpg";
import hotel_3 from "../assets/images/hotel/hotel-3.jpg";
interface IHotel {
  id: number;
  name: string;
  description: string;
  rating: number;
  imageCover: string; // Assuming imageCover is a URL or path to the image
  guestReview: number;
}
export const hotelData: IHotel[] = [
  {
    id: 1,
    name: "Eiffel Tower View Hotel",
    description: "Overlooking the Eiffel Tower",
    guestReview: 8.2,
    rating: 4,
    imageCover: hotel_1,
  },
  {
    id: 2,
    name: "Tokyo Bay Resort",
    description: "Waterfront resort with stunning views",
    guestReview: 7.9,
    rating: 3,
    imageCover: hotel_2,
  },
  {
    id: 3,
    name: "Grand Plaza Hotel",
    description: "Luxury hotel in downtown",
    guestReview: 7.1,
    rating: 5,
    imageCover: hotel_3,
  },
];
