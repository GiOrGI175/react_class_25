import React from 'react';
import withMoney from './withMoney';

import Person1 from './components/Person1';
import Person2 from './components/Person2';

const adaminifulit = withMoney(person1);

const Appw = () => {
  return (
    <div>
      <h1>HOC</h1>
    </div>
  );
};

export default Appw;
