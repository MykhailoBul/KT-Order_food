import React, { createContext } from "react";

const CartContext = createContext({
    items: [],
    addItem: () => {},
});

export default CartContext;