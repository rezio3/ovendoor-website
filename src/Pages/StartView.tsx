import "./StartView.scss";
import HeaderView from "../Views/StartView/HeaderView";
import SubheaderView from "../Views/StartView/SubheaderView";
import PizzaProcess from "../Views/StartView/PizzaProcess";
import FindUs from "../Views/StartView/FindUs";

const StartView = () => {
  return (
    <div className="start-view-wrapper">
      <HeaderView />
      <SubheaderView />
      <PizzaProcess />
      <FindUs />
    </div>
  );
};

export default StartView;
