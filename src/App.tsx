import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import PageDashboardUser from "@/pages/dashboard/PageDasboardUser";
import PageBantuan from "@/pages/bantuan/PageBantuan";
import PagePembelianPaket from "./pages/pembelian-paket/PagePembelianPaket";
import PageEvent from "./pages/event/PageEvent";
import PageRiwayatPembelian from "./pages/riwayat-pemebelian/PageRiwayatPembelian";
import PageBimbel from "./pages/paket-saya/bimbel/PageBimbel";
import PageTryout from "./pages/paket-saya/tryout/PageTryout";
import PageMateri from "./pages/paket-saya/materi/PageMateri";
import PageProfile from "./pages/profile/PageProfile";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<PageDashboardUser />} />
      <Route path="/bantuan" element={<PageBantuan />} />
      <Route path="/paket-pembelian" element={<PagePembelianPaket />} />
      <Route path="/event" element={<PageEvent />} />
      <Route path="/riwayat-pembelian" element={<PageRiwayatPembelian />} />
      <Route path="/bimbel" element={<PageBimbel />} />
      <Route path="/tryout-bim" element={<PageTryout />} />
      <Route path="/tryout" element={<PageTryout />} />
      <Route path="/materi" element={<PageMateri />} />
      <Route path="/profile" element={<PageProfile />} />
    </Routes>
  );
};

export default App;
