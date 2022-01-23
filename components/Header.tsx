import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: `1px solid lightgray`,
        paddingBottom: 4,
        marginBottom: 16,
      }}
    >
      <Logo />
    </div>
  );
};

export default Header;
