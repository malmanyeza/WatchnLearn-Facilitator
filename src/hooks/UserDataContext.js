import React, { useState, useContext } from 'react';

// Create the context
const UserDataContext = React.createContext();

// Create a provider component
export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({tutorName: 'John Doe', tutorId: 'rT3sv6d1MRomLKZRkSYG'});

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

// Create a custom hook to use the context
export const useUserDataContext = () => {
  return useContext(UserDataContext);
};
