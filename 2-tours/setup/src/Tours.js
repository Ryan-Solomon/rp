import React from 'react';
import Tour from './Tour';
const Tours = ({ data, removeTour }) => {
  return (
    <>
      {data.map((tour) => {
        return <Tour removeTour={removeTour} key={tour.id} tour={tour} />;
      })}
    </>
  );
};

export default Tours;
