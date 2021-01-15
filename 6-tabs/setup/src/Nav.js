import React from 'react';

export const Nav = ({ info }) => {
  return (
    <>
      {info?.map((info) => (
        <li key={info.id}>{info.name}</li>
      ))}
    </>
  );
};
