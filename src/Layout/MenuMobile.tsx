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
    <div className="menu-mobile fixed-top vh-100" style={{ zIndex: 9999 }}>
      <div
        className="d-flex flex-row justify-content-between"
        style={{ padding: "0 12px" }}
      >
        <img src={OvenDoorImgLogo} alt="ovendoor-logo" width={100} />
        <button onClick={switchMenuMobile}>
          <CloseIcon fontSize="large" />
        </button>
      </div>
      <div
        className="w-100 h-100 d-flex flex-column "
        style={{ marginTop: "60px" }}
      >
        <NavLink to={routes.start}>
          <button
            onClick={switchMenuMobile}
            className="navigation-btn-mobile ps-4"
          >
            Start
          </button>
        </NavLink>
        <a
          href={routes.order}
          target="_blank"
          className="navigation-btn-mobile text-decoration-none text-reset ps-4"
          onClick={switchMenuMobile}
        >
          Zamówienia online
        </a>
        <NavLink to={routes.ingredients}>
          <button
            onClick={switchMenuMobile}
            className="navigation-btn-mobile ps-4"
          >
            O składnikach
          </button>
        </NavLink>
        <NavLink to={routes.contact}>
          <button
            onClick={switchMenuMobile}
            className="navigation-btn-mobile ps-4"
          >
            Kontakt
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MenuMobile;
