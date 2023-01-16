import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/themes/light";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
