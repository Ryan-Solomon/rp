import React, { useState, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const item = state.filter((product) => product.id === action.payload);
    item.amount += 1;
    return [...state.filter((prod) => prod.id !== action.payload), item];
  } else if (action.type === 'DECREASE') {
    let item;
    const newItems = state.filter((prod) => {
      if (prod.id === action.payload) {
        item = prod;
        return false;
      } else {
        return true;
      }
    });
    item.amount -= 1;
    let addThis = newItems.slice();
    if (item.amount > 0) {
      addThis = [...newItems, item];
    }
    return addThis;
  } else {
    throw new Error('Action not supported');
  }
};

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const getItems = async () => {
      setStatus('loading');
      try {
        const res = await fetch(url);
        const data = await res.json();
        setCart(data);
        setStatus('fulfilled');
      } catch (e) {
        setStatus('error');
      }
    };
    getItems();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cart,
        status,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
