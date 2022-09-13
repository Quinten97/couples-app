import React from "react";

const AuthContext = React.createContext({});

interface IAuthenticationProvider {
  children: any;
  value: any;
}

export const AuthenticationProvider = ({
  children,
  value
}: IAuthenticationProvider) => (
  <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
);
