import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import PageDashboardUser from "@/pages/dashboard/PageDasboardUser";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<PageDashboardUser />} />
      {/* Tambahkan rute lain di sini */}
    </Routes>
  );
};

export default App;
