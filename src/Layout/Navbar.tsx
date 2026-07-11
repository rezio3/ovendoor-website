import { NavLink } from "react-router";
import { routes } from "../utils/routes";
import OvenDoorImgLogo from "../media/ovendoor-logo.png";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav-bar-wrapper">
      <img src={OvenDoorImgLogo} alt="ovendoor-logo" width={200} />
      <NavLink to={routes.start}>
        <button className="nav-button">Start</button>
      </NavLink>
      <NavLink to={routes.menu}>
        <button className="nav-button">Menu</button>
      </NavLink>
      <button className="nav-button text-no-wrap">Zamówienia online</button>
      <NavLink to={routes.contact}>
        <button className="nav-button">Kontakt</button>
      </NavLink>
    </div>
  );
};

export default NavBar;
