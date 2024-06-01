'use client'
import { createContext, useState } from "react";

export const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <ActiveContext.Provider value={{ isActive, toggleHamburger }}>
      {children}
    </ActiveContext.Provider>
  );
};
