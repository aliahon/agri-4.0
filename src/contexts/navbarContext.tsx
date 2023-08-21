"use client";

import React, { PropsWithChildren, createContext } from "react";

type InitialStateProps = {
  isSelectedOpen: boolean;
  setIsSelectedOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isNavBarOpen?: boolean;
  setIsNavBarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isSubNavOpen?: boolean;
  setIsSubNavOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialState: InitialStateProps = {
  isSelectedOpen: false,
  setIsSelectedOpen: () => {},
  isNavBarOpen: false,
  setIsNavBarOpen: () => {},
  isSubNavOpen: false,
  setIsSubNavOpen: () => {},
};

const NavbarContext = createContext(initialState);

const NavbarProvider: any = ({ children }: { children: React.ReactNode }) => {
  const [isSelectedOpen, setIsSelectedOpen] = React.useState<boolean>(false);

  const [isNavBarOpen, setIsNavBarOpen] = React.useState<boolean>(true);

  const [isSubNavOpen, setIsSubNavOpen] = React.useState<boolean>(false);

  return (
    <NavbarContext.Provider
      value={{
        isSelectedOpen,
        setIsSelectedOpen,
        isNavBarOpen,
        setIsNavBarOpen,
        isSubNavOpen,
        setIsSubNavOpen,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

const useNavbarContext = () => React.useContext(NavbarContext);

export { NavbarContext, NavbarProvider, useNavbarContext };
