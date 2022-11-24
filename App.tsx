import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  useFonts as usePoppins,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

// import { darkTheme } from "./src/infrastructure/theme/darkTheme";
import { lightTheme } from "./src/infrastructure/theme/lightTheme";

import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  const [poppinsLoaded] = usePoppins({ Poppins_400Regular });

  if (!poppinsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <Navigation />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
