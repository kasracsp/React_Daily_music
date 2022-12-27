import axios from "axios";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Albums from "./pages/Albums";
import Home from './pages/Home'

function App() {
useEffect(()=>{
  axios.get("https://api.deezer.com/chart")
  .then(res=>console.log(res.data))
},[])

  return <Layout>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/albums' element={<Albums/>} />
    </Routes>
  </Layout>;
}

export default App;
