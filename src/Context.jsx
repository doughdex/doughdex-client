import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [places, setPlaces] = useState();

  const value = {
    user,
    setUser,
    places,
    setPlaces,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { ContextProvider };

export default Context;
