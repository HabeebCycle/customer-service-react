import React from "react";
import Button from "./Button";

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button label="Add" />
    </header>
  );
};

export default Header;
