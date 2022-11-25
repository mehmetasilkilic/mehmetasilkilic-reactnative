import { Provider } from "react-redux";
import {
  useFonts as usePoppins,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

import { store } from "./src/store/store";

import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  const [poppinsLoaded] = usePoppins({ Poppins_400Regular });

  if (!poppinsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
