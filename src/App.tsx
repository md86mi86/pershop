import React from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App: React.FC = () => {
  return (
    <div className="select-none dark:bg-black dark:text-white">
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
