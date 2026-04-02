import Header from './components/Header';
import Meals from './components/Meals';
import { useState, useReducer } from 'react';
import CartContext from './store/CartContext';
import Modal from './components/UI/Modal';

function cartReduser(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingItem = state.find(item => item.id === action.item.id);
    if (existingItem) {
      return state.map(item =>
        item.id === action.item.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...state, { ...action.item, quantity: 1 }];
  }

  if (action.type === 'CLEAR_CART') {
    return [];
  }
  return state;
}

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cart, dispatch] = useReducer(cartReduser, []);
  function addItem(item) {
    dispatch({ type: 'ADD_ITEM', item: item });
  }
  function openCart() {
    setCartIsOpen(true);
  }
  function closeCart() {
    setCartIsOpen(false);
  }
  return (
    <CartContext.Provider value={{
      items: cart,
      addItem: addItem
    }}>
      <Header onOpenCart={openCart} />
      <Meals />
      <Modal open={cartIsOpen}>
        <h2>Your Cart</h2>
        <button onClick={closeCart}>Close</button>
      </Modal>
    </CartContext.Provider>
  );
}

export default App;