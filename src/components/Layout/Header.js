import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Best Supplements</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://www.reviewsontop.com/wp-content/uploads/2019/01/rot-protetin-1200x786.jpg"
          alt="supplements"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
