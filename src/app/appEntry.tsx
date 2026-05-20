import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import { Provider } from "react-redux";
import { appStore } from "./appStore";
import router from "./providers/router";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
