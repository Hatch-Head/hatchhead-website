import * as React from "react";
import GlobalData from "../../content/global";
import { useDarkMode } from "usehooks-ts";
const ThemeContext = React.createContext(GlobalData.theme);

export const useTheme = () => React.useContext(ThemeContext);

type Props = {
  children: JSX.Element;
};

export const Theme = ({ children }: Props) => {
  return (
    <ThemeContext.Provider
      value={{
        color: "red",
        icon: "",
        darkMode: "",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
