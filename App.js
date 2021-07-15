import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme/index";

import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ExpoStatusBar style="auto" />
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}
