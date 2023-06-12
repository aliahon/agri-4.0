"use client";

import React, { PropsWithChildren, createContext } from "react";

type InitialStateProps = {
  isSelectedOpen: boolean;
  setIsSelectedOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialState: InitialStateProps = {
  isSelectedOpen: false,
  setIsSelectedOpen: () => {},
};

const NavbarContext = createContext(initialState);

const NavbarProvider: any = ({ children }: { children: React.ReactNode }) => {
  const [isSelectedOpen, setIsSelectedOpen] = React.useState<boolean>(false);

  return (
    <NavbarContext.Provider value={{ isSelectedOpen, setIsSelectedOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

const useNavbarContext = () => React.useContext(NavbarContext);

export { NavbarContext, NavbarProvider, useNavbarContext };
