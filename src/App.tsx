// 3rd lib
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

import Hotels from "./pages/Hotels";
import HotelLayout from "./components/HotelLayout";
import { SearchProvider } from "./context/SearchContext";
import { DateProvider } from "./context/AddDateContext";
function App() {
  return (
    <>
      <SearchProvider>
        <DateProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />

              <Route path="hotels" element={<HotelLayout />}>
                <Route index element={<Navigate replace to="/" />} />
                <Route path=":country" element={<Hotels />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </DateProvider>
      </SearchProvider>
    </>
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
