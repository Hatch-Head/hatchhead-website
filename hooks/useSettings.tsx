import * as React from "react";
import GlobalData from "../content/global";

const SettingsContext = React.createContext(GlobalData.settings);

export const useSettings = () => React.useContext(SettingsContext);
