import axios from "axios";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from './pages/Home'
import Chart from "./pages/Chart"
import Search from "./pages/Search";

function App() {
useEffect(()=>{
  axios.get("https://api.deezer.com/chart")
  // axios.get("https://api.deezer.com/podcast/65490170")
  .then(res=>console.log(res.data))
},[])

  return <Layout>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='/chart/:slug' element={<Chart/>} />
    </Routes>
  </Layout>;
}

export default App;
