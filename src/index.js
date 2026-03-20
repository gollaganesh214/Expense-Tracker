import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider as MuiThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
// import { SpeechProvider } from '@speechly/react-client';
import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

const theme = createTheme();
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StyledEngineProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Provider>
          <App />
        </Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  </StyledEngineProvider>
);
