import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import Search from "./pages/Search";
import { useDispatch } from "react-redux";
import fetchChart from "./redux/chart/chartAction";
import ScrollToTop from "./shared/ScrollToTop";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import Playlists from "./pages/Playlists";
import Podcasts from "./pages/Podcasts";
import Tracks from "./pages/Tracks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChart());
  }, []);

  return (
    <Layout>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chart/:slug" element={<Chart />} />
        <Route path="/albums/:slug" element={<Albums />} />
        <Route path="/artists/:slug" element={<Artists />} />
        <Route path="/playlists/:slug" element={<Playlists />} />
        <Route path="/podcasts/:slug" element={<Podcasts />} />
        <Route path="/tracks/:slug" element={<Tracks />} />
      </Routes>
    </Layout>
  );
}

export default App;
