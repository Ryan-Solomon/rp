import React, { useState, useContext, useReducer, useEffect } from 'react';
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const newItems = [...state].map(({ ...item }) => {
      if (item.id === action.payload) {
        item.amount = item.amount + 1;
        return { ...item };
      } else {
        return { ...item };
      }
    });
    return newItems;
  } else if (action.type === 'REMOVE') {
    const items = [...state].map(({ ...item }) => {
      if (item.id === action.payload) {
        console.log(item.amount);
        item.amount -= 1;
        if (item.amount !== 0) {
          return { ...item };
        }
      } else {
        return { ...item };
      }
    });
    return items.filter((item) => item);
  } else if (action.type === 'SET') {
    return [...action.payload];
  } else if (action.type === 'CLEAR') {
    return [];
  } else {
    throw new Error('Action not supported');
  }
};

const AppProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const getItems = async () => {
      setStatus('loading');
      try {
        const res = await fetch(url);
        const data = await res.json();
        dispatch({ type: 'SET', payload: data });
        setStatus('fulfilled');
      } catch (e) {
        setStatus('error');
      }
    };
    getItems();
  }, []);

  const addItem = (id) => {
    dispatch({ type: 'ADD', payload: id });
  };
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };
  const clearItems = () => {
    dispatch({ type: 'CLEAR' });
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        status,
        addItem,
        removeItem,
        clearItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
