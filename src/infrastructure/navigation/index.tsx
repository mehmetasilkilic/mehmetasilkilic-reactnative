import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import { useAppSelector } from "../../store/hooks";

import { lightTheme } from "../theme/lightTheme";
import { darkTheme } from "../theme/darkTheme";

import { TabBarNavigator } from "./app.navigator";

export const Navigation = () => {
  const darkMode = useAppSelector((state) => state.utils.darkMode);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <TabBarNavigator />
      <ExpoStatusBar style={darkMode ? "light" : "dark"} />
    </ThemeProvider>
  );
};
