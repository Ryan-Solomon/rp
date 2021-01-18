import React, { useState, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const cartReducer = (state, action) => {
  // Increase item, decrease item, clear cart
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
