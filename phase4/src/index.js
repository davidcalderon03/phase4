import React from 'react';
import './index.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Employee from "./pages/Employee";
import Driver from "./pages/Driver";
import User from './pages/User';
import BusinessOwner from './pages/BusinessOwner';
import Worker from './pages/Worker';
import Business from "./pages/Business";
import Product from "./pages/Product";
import Van from "./pages/Van";
import Location from './pages/Location';
import DeliveryService from './pages/DeliveryService';
import Contain from './pages/Contain';
import WorkFor from './pages/WorkFor';
import Fund from './pages/Fund';

import EmployeeView from './views/EmployeeView';
import DriverView from './views/DriverView';
import LocationView from './views/LocationView';
import OwnerView from './views/OwnerView';
import ProductView from './views/ProductView';
import ServiceView from './views/ServiceView';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Employee />} />
          <Route path="employee" element={<Employee />} />
          <Route path="driver" element={<Driver />} />
          <Route path="user" element={<User />} />
          <Route path="business_owner" element={<BusinessOwner />} />
          <Route path="worker" element={<Worker />} />
          <Route path="business" element={<Business />} />
          <Route path="product" element={<Product />} />
          <Route path="van" element={<Van />} />
          <Route path="location" element={<Location />} />
          <Route path="delivery_service" element={<DeliveryService />} />
          <Route path="contain" element={<Contain />} />
          <Route path="work_for" element={<WorkFor />} />
          <Route path="fund" element={<Fund />} />

          <Route path="employee_view" element={<EmployeeView />} />
          <Route path="location_view" element={<LocationView />} />
          <Route path="driver_view" element={<DriverView />} />
          <Route path="owner_view" element={<OwnerView />} />
          <Route path="product_view" element={<ProductView />} />
          <Route path="service_view" element={<ServiceView />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);