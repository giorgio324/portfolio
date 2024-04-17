'use client';
import { SetStateAction, createContext, useContext, useState } from 'react';

type ActiveLinkType = {
  currentPath: string;
  setCurrentPath: React.Dispatch<SetStateAction<string>>;
  setTimeOfLastClick: React.Dispatch<SetStateAction<number>>;
  timeOfLastClick: number;
};

const ActiveLinkContext = createContext<ActiveLinkType | null>(null);

export const ActiveLinkContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentPath, setCurrentPath] = useState('home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveLinkContext.Provider
      value={{
        currentPath,
        setCurrentPath,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveLinkContext.Provider>
  );
};

export const useActiveLinkContext = () => {
  const context = useContext(ActiveLinkContext);
  if (context === null) {
    throw new Error('active link context used outside of provider');
  }
  return context;
};
