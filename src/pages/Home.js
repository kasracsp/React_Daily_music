import React from "react";
import Carrousel from "../components/home/Carrousel";
import { useSelector } from "react-redux";

const Home = () => {
  const chartState = useSelector((state) => state.chartState);
  if (chartState && chartState.loading) return <h1>loading...</h1>;
  if (chartState && chartState.error) return <h1>{chartState.error}</h1>;

  return (
    <div className="container xl">
      <div className="home">
        {chartState.chart.length > 0 &&
          chartState.chart.map((category, index) => (
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
