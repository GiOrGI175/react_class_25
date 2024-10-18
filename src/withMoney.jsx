import React, { useState } from 'react';

const withMoney = (WrappedComponent) => {
  return function ChildComponent(props) {
    const [money, setMoney] = useState(10);
    const handleIncrace = () => {
      setMoney((pervMoney) => pervMoney * 2);
    };
    return (
      <WrappedComponent
        money={money}
        handleIncrace={handleIncrace}
        {...props}
      />
    );
  };
};

export default withMoney;
