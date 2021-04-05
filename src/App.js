import React from "react";
import { ToastProvider } from "react-toast-notifications";
// Components
import AppRoutes from "views/AppRoutes";

function App() {
  return (
    <ToastProvider>
      <AppRoutes />
    </ToastProvider>
  );
}

export default App;
