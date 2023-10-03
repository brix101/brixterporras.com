import App from "@/App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { APP_THEME_KEY } from "@/constant/index.ts";
import "@/index.css";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey={APP_THEME_KEY}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
