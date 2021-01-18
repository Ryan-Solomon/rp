import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const getItems = async () => {
      setStatus('loading');
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
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
