import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "./Component/HeaderComponent";
import FooterComponent from "./Component/FooterComponent";
import ListEmployeesComponent from "./Component/ListEmployeesComponent";
import AddEmployeeComponent from "./Component/AddEmployeeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />

      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployeesComponent />} />
          <Route path="/employee" element={<ListEmployeesComponent />} />
          <Route path="/add-employee" element={<AddEmployeeComponent />} />
          <Route path="/add-employee/:id" element={<AddEmployeeComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default App;
