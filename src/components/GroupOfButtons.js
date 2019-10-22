import  React, { Fragment } from "react";
import { Link } from "react-router-dom";

// MUI stuff
import Button from "@material-ui/core/Button";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";

const GroupOfButtons = ({ sizeClassName, pictureClassName, menu }) => {
  return (
    <Fragment>
      <div className={menu}>
      <Button color="inherit" className={sizeClassName} component={Link} to="/">
        <HomeIcon className={pictureClassName} />
        Shop
      </Button>
      <Button
        color="inherit"
        className={sizeClassName}
        component={Link}
        to="/cart"
      >
        <ShoppingCart className={pictureClassName} />
        Cart
      </Button>
      </div>
    </Fragment>
   
  );
};

export default GroupOfButtons;
