import React from "react";
import CustomButton from "../Custom-button/CustomButton";
import "./CartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
