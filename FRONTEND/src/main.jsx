import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App.jsx";
import Home from "./components/Home.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/project-promo-53-module-3-team-2">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crear" element={<App />} />
    </Routes>
  </BrowserRouter>
);
