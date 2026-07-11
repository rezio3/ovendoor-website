import { NavLink } from "react-router";
import { PIZZA_SLICES_FOOTER } from "../utils/backgroundPizzaSlices";
import Background from "./Background";
import { routes } from "../utils/routes";
import "./Footer.scss";

const FOOTER_HEIGHT = 300;

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "auto",
        position: "relative",
        width: "100%",
        height: `${FOOTER_HEIGHT}px`,
        display: "flex",
        justifyContent: "center",
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
        <NavLink to={routes.menu}>
          <button className="footer-nav-button">Menu</button>
        </NavLink>
        <button className="footer-nav-button text-no-wrap">
          Zamówienia online
        </button>
        <NavLink to={routes.contact}>
          <button className="footer-nav-button">Kontakt</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
