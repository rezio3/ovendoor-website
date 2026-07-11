import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import StartView from "./Pages/StartView";
import MenuView from "./Pages/MenuView";
import ContactView from "./Pages/ContactView";
import Background from "./Layout/Background";
import { PIZZA_SLICES_TOP_BG } from "./utils/backgroundPizzaSlices";

function App() {
  return (
    <BrowserRouter>
      <Background height="600px" pizzaSlices={PIZZA_SLICES_TOP_BG} />
      <NavBar />
      <div className="page-wrapper wrapper">
        <Routes>
          <Route path="/" element={<StartView />} />
          <Route path="/menu" element={<MenuView />} />
          <Route path="/contact" element={<ContactView />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
