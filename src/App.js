import React from "react";
import "../src/assets/css/App.css";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  document.body.style.backgroundColor = "#eeeeee";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail-page" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
