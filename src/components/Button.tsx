import "./Button.scss";

type ButtonPropsType = {
  children: React.ReactNode;
  className?: string;
  variant?: "green" | "yellow";
};

const Button: React.FC<ButtonPropsType> = ({
  children,
  className = "",
  variant = "green",
}) => {
  return (
    <button className={`button-custom-${variant} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
