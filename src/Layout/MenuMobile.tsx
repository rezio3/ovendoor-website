import CloseIcon from "@mui/icons-material/Close";
import OvenDoorImgLogo from "../media/ovendoor-logo.png";
import "./MenuMobile.scss";
import { NavLink } from "react-router";
import { routes } from "../utils/routes";

const MenuMobile = ({
  open,
  switchMenuMobile,
}: {
  open: boolean;
  switchMenuMobile: () => void;
}) => {
  if (!open) {
    return null;
  }
  return (
    <div
      className="menu-mobile fixed-top vw-100 vh-100"
      style={{ zIndex: 9999 }}
    >
      <img
        src={OvenDoorImgLogo}
        alt="ovendoor-logo"
        width={100}
        className="position-absolute top-0 start-0"
        style={{ marginLeft: 12 }}
      />
      <button
        className="position-absolute top-0 end-0 p-4 mt-2"
        style={{ marginRight: 18 }}
        onClick={switchMenuMobile}
      >
        <CloseIcon fontSize="large" />
      </button>
      <div
        className="w-100 h-100 d-flex flex-column "
        style={{ marginTop: "140px" }}
      >
        <NavLink to={routes.start}>
          <button onClick={switchMenuMobile} className="navigation-btn-mobile">
            Start
          </button>
        </NavLink>
        <a
          href={routes.order}
          target="_blank"
          className="navigation-btn-mobile text-decoration-none text-reset"
          onClick={switchMenuMobile}
        >
          Zamówienia online
        </a>
        <NavLink to={routes.ingredients}>
          <button onClick={switchMenuMobile} className="navigation-btn-mobile">
            O składnikach
          </button>
        </NavLink>
        <NavLink to={routes.contact}>
          <button onClick={switchMenuMobile} className="navigation-btn-mobile">
            Kontakt
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MenuMobile;
