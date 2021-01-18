import React from 'react';
import { useGlobalContext } from './context';
const Navbar = () => {
  const { cart } = useGlobalContext();
  const [cartItems, setCartItems] = React.useState(0);

  React.useEffect(() => {
    const items = cart.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
    setCartItems(items);
  }, [cart]);

  return (
    <nav>
      <div className='nav-center'>
        <h3>useReducer</h3>
        <div className='nav-container'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
          </svg>
          <div className='amount-container'>
            <p className='total-amount'>{cartItems}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
