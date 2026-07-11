import { type PizzaSlicesType } from "../utils/backgroundPizzaSlices";
import "./Background.scss";

type BackgroundPropsType = {
  height: string;
  pizzaSlices: PizzaSlicesType[];
  yellowBg?: boolean;
};

const Background: React.FC<BackgroundPropsType> = ({
  height,
  pizzaSlices,
  yellowBg,
}) => {
  return (
    <div
      className="background"
      style={{ backgroundColor: yellowBg ? "#efc830" : "none", height: height }}
    >
      {pizzaSlices.map((slice, index) => (
        <div
          key={index}
          className="pizza-slice"
          style={{
            top: slice.top,
            left: slice.left,
            width: slice.size,
            height: slice.size,
            transform: `rotate(${slice.rotate})`,
            backgroundImage: `url(/pizza-bg.png)`,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
