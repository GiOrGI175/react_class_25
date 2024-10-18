import React from 'react';

const Person2 = ({ money, handleIncrace }) => {
  return (
    <div>
      <h2>person 2</h2>
      <p>Money: {money}$</p>
      <button onClick={handleIncrace}>double money</button>
    </div>
  );
};

export default Person2;
