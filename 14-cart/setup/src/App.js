import React from 'react';
import { useGlobalContext } from './context';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
// items

function App() {
  const { status } = useGlobalContext();
  if (status === 'loading') return <h1>Loading..</h1>;
  if (status === 'error') return <h1>Error</h1>;
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
