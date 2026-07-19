import { NavLink } from "react-router";
import { PIZZA_SLICES_FOOTER } from "../utils/backgroundPizzaSlices";
import Background from "./Background";
import { routes } from "../utils/routes";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

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
      <div className="wrapper w-100 h-100 d-flex flex-column-reverse flex-md-row flex-reverse justify-content-center justify-content-md-between align-items-center gap-3">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between w-75 gap-1 gap-md-3">
          <NavLink to={routes.start}>
            <button className="footer-nav-button">Start</button>
          </NavLink>
          <a
            href={routes.order}
            className="footer-nav-button text-no-wrap text-decoration-none text-white"
          >
            Zamówienia online
          </a>
          <NavLink to={routes.ingredients}>
            <button className="footer-nav-button text-nowrap">
              O składnikach
            </button>
          </NavLink>
          <NavLink to={routes.contact}>
            <button className="footer-nav-button">Kontakt</button>
          </NavLink>
        </div>
        <div className="d-flex gap-3">
          <a href="https://www.facebook.com/OvenDoorPizzaTruck" target="_blank">
            <FacebookIcon className="text-white" sx={{ fontSize: 50 }} />
          </a>
          <a
            href="https://www.instagram.com/ovendoor_pizzatruck/"
            target="_blank"
          >
            <InstagramIcon className="text-white" sx={{ fontSize: 50 }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
