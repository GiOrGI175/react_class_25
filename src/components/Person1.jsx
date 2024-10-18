import React from 'react';

const Person1 = ({ money, handleIncrace }) => {
  return (
    <div>
      <h2>person</h2>
      <p>Money: {money}$</p>
      <button onClick={handleIncrace}>double money</button>
    </div>
  );
};

export default Person1;
