import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import Search from "./pages/Search";
import ScrollToTop from "./shared/ScrollToTop";
import Albums from "./pages/Albums";
import Playlists from "./pages/Playlists";
import Tracks from "./pages/Tracks";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chart/:slug" element={<Chart />} />
        <Route path="/albums/:slug" element={<Albums />} />
        <Route path="/playlists/:slug" element={<Playlists />} />
        <Route path="/tracks/:slug" element={<Tracks />} />
      </Routes>
    </Layout>
  );
}

export default App;
