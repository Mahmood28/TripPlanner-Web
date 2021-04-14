import React from "react";
import { ToastProvider } from "react-toast-notifications";
import AppRoutes from "views/AppRoutes";

function App() {
  return (
    <ToastProvider>
      <AppRoutes />
    </ToastProvider>
  );
}

export default App;
