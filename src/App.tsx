import React from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router";

const App: React.FC = () => {
  return (
    <div className="select-none">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
