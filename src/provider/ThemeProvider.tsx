import React from 'react';
import { ReactNode } from 'react';
import { Theme, ThemeContext } from '../context/ThemeContext';
import { changeCssRootVariables } from '../model/ChangeCssRootVariables';

interface ProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: ProviderProps) => {
  const [theme, setTheme] = React.useState<Theme>(Theme.DARK);

  function changeTheme(theme: Theme) {
    setTheme(theme);
    changeCssRootVariables(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
