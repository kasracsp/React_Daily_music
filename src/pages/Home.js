import React from "react";
import Carrousel from "../components/home/Carrousel";
import { chart } from "../assets/chartList";
const Home = () => {
  return (
    <div className="container xl">
      <div className="home">
        {chart.map((category, index) => (
          <Carrousel
            key={index}
            categoryTitle={category.title}
            categoryList={category.data}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
