import React, { useState, useContext, useReducer, useEffect } from 'react';
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const item = state.filter((product) => product.id === action.payload);
    item.amount += 1;
    return [...state.filter((prod) => prod.id !== action.payload), item];
  } else if (action.type === 'REMOVE') {
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
