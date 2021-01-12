import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import Tour from './Tour';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

const tourOne = {
  id: 'rec6d6T3q5EBIdCfD',
  image:
    'https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg',
  info:
    "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  name: 'Best of Paris in 7 Days Tour',
  price: '1,995',
};
function App() {
  const [tours, setTours] = React.useState([]);
  const [status, setStatus] = React.useState('idle');

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  React.useEffect(() => {
    const getTours = async () => {
      setStatus('loading');
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTours(data);
        setStatus('fulfilled');
      } catch {
        setStatus('error');
      }
    };
    getTours();
  }, []);

  return tours.length > 0 ? (
    <Tours removeTour={removeTour} data={tours} />
  ) : (
    <Loading />
  );
}

export default App;
