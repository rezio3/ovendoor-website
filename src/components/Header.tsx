import React from "react";

type HeaderTypeProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Header: React.FC<HeaderTypeProps> = ({
  as: Tag,
  children,
  className = "",
  style,
}) => {
  return (
    <Tag style={style} className={className}>
      {children}
    </Tag>
  );
};

export default Header;
