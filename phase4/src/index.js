import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Business from "./pages/Business";
import Product from "./pages/Product";
import Van from "./pages/Van";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Employee />} />
          <Route path="employee" element={<Employee />} />
          <Route path="business" element={<Business />} />
          <Route path="product" element={<Product />} />
          <Route path="van" element={<Van />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);