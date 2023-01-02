import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import Search from "./pages/Search";
import { useDispatch } from "react-redux";
import fetchChart from "./redux/chart/chartAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChart());
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chart/:slug" element={<Chart />} />
      </Routes>
    </Layout>
  );
}

export default App;
