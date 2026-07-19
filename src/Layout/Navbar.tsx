import { NavLink } from "react-router";
import { routes } from "../utils/routes";
import OvenDoorImgLogo from "../media/ovendoor-logo.png";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav-bar-wrapper">
      <img src={OvenDoorImgLogo} alt="ovendoor-logo" width={200} />
      <div className="d-flex gap-4">
        <NavLink to={routes.start}>
          <button className="nav-button">Start</button>
        </NavLink>
        <a
          href={routes.order}
          target="_blank"
          className="nav-button text-no-wrap text-decoration-none text-reset"
        >
          Zamówienia online
        </a>
        <NavLink to={routes.ingredients}>
          <button className="nav-button text-nowrap">O składnikach</button>
        </NavLink>
        <NavLink to={routes.contact}>
          <button className="nav-button">Kontakt</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
