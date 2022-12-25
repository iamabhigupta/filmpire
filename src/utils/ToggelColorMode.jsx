import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useState, useMemo } from "react";

export const ColorModeContext = createContext();

const ToggelColorMode = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggelColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggelColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggelColorMode;
