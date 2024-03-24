// 3rd lib
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import HotelSearch from "./pages/HotelSearch";
import HotelLayout from "./components/HotelLayout";
// import Mapex from "./pages/Mapex";
import Mapex from "./pages/Mapex";
import HotelDetail from "./pages/HotelDetail";
import MapLeaflet from "./components/Map/MapLeaflet";
import ScrollToElement from "./components/ex";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       // staleTime: 60 * 1000,
//       staleTime: 0,
//     },
//   },
// });
function App() {
  // console.log(window.history.state);

  return (
    // <QueryClientProvider client={queryClient}>
    // <ReactQueryDevtools initialIsOpen={false} />

    <Routes>
      <Route index element={<Home />} />
      <Route path="map" element={<ScrollToElement />} />
      {/* <Route path="map" element={<Mapex />} /> */}
      <Route path="hotels" element={<HotelLayout />}>
        <Route index element={<Navigate replace to="/" />} />
        <Route path=":placeParam" element={<HotelSearch />} />
        <Route path=":placeParam/:nameHotel" element={<HotelDetail />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    // </QueryClientProvider>
  );
}

export default App;

/*
-- context api vs redux vs react- query
https://www.dhiwise.com/post/harnessing-the-power-of-context-api-in-react-app-development
*/
/*
https://blog.webdevsimplified.com/2022-07/react-folder-structure/ 


https://www.youtube.com/watch?v=cqIcPfXngqo
https://github.com/goldbergyoni/nodebestpractices
*/

/*
Map API
https://www.maptiler.com/ ****

*/
