import { NavLink } from "react-router";
import { PIZZA_SLICES_FOOTER } from "../utils/backgroundPizzaSlices";
import Background from "./Background";
import { routes } from "../utils/routes";
import "./Footer.scss";

const FOOTER_HEIGHT = 300;

const Footer = () => {
  return (
    <div
      className="mt-auto d-flex justify-content-center w-100"
      style={{
        position: "relative",
        height: `${FOOTER_HEIGHT}px`,
      }}
    >
      <Background
        yellowBg
        height={`${FOOTER_HEIGHT}px`}
        pizzaSlices={PIZZA_SLICES_FOOTER}
      />
      <div className="footer-nav-wrapper wrapper">
        <NavLink to={routes.start}>
          <button className="footer-nav-button">Start</button>
        </NavLink>
        <button className="footer-nav-button text-no-wrap">
          Zamówienia online
        </button>
        <NavLink to={routes.ingredients}>
          <button className="footer-nav-button text-nowrap">
            O składnikach
          </button>
        </NavLink>
        <NavLink to={routes.contact}>
          <button className="footer-nav-button">Kontakt</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
