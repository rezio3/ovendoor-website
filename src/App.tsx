import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import StartView from "./Pages/StartView";
import ContactView from "./Pages/ContactView";
import Background from "./Layout/Background";
import { PIZZA_SLICES_TOP_BG } from "./utils/backgroundPizzaSlices";
import IngredientsView from "./Pages/IngredientsView";
import { routes } from "./utils/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from "@mui/material";
import NavBarMobile from "./Layout/NavbarMobile";
import { useState } from "react";
import MenuMobile from "./Layout/MenuMobile";

function App() {
  const isMobile = useMediaQuery("(max-width:991.98px)");
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const switchMenuMobile = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <BrowserRouter>
      <Background height="600px" pizzaSlices={PIZZA_SLICES_TOP_BG} />
      {isMobile ? (
        <NavBarMobile switchMenuMobile={switchMenuMobile} />
      ) : (
        <NavBar />
      )}
      <div className="page-wrapper wrapper">
        <Routes>
          <Route path={routes.start} element={<StartView />} />
          <Route path={routes.ingredients} element={<IngredientsView />} />
          <Route path={routes.contact} element={<ContactView />} />
        </Routes>
      </div>
      <Footer />
      {isMobile && (
        <MenuMobile open={isMobileMenu} switchMenuMobile={switchMenuMobile} />
      )}
    </BrowserRouter>
  );
}

export default App;
