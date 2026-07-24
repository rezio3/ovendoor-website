import OvenDoorImgLogo from "../media/ovendoor-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavBar.scss";

const NavBarMobile = ({
  switchMenuMobile,
}: {
  switchMenuMobile: () => void;
}) => {
  return (
    <div className="nav-bar-wrapper">
      <img src={OvenDoorImgLogo} alt="ovendoor-logo" width={100} />
      <button onClick={switchMenuMobile}>
        <MenuIcon fontSize="large" />
      </button>
    </div>
  );
};

export default NavBarMobile;
