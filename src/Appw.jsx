import React from 'react';
import withMoney from './withMoney';

import Person1 from './components/Person1';
import Person2 from './components/Person2';

const UbgradeMoney1 = withMoney(Person1);
const UbgradeMoney2 = withMoney(Person2);

const Appw = () => {
  return (
    <div>
      <h1>HOC</h1>
      <UbgradeMoney1 />
      <UbgradeMoney2 />
    </div>
  );
};

export default Appw;
