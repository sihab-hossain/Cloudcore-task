import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer position="top-center" autoClose={3000} theme="dark">
      
    </ToastContainer>

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
