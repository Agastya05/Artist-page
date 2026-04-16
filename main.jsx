import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtistsList from "./pages/ArtistsList.jsx";
import ArtistPage from "./pages/ArtistPage.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ArtistsList />} />
        <Route path="/artist/:slug" element={<ArtistPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
