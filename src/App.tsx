import React from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App: React.FC = () => {
  return (
    <div className="select-none">
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
