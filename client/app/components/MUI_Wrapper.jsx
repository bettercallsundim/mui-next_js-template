"use client";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { memo } from "react";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});
const MUI_Wrapper = memo(({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouterCacheProvider>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          {children}
        </StyledEngineProvider>
      </AppRouterCacheProvider>
    </ThemeProvider>
  );
});

export default MUI_Wrapper;
