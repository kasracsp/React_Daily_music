import React from "react";
import Carrousel from "../components/home/Carrousel";
import { useSelector } from "react-redux";
import Loading from "../shared/Loading";
import Error from "../shared/Error";

const Home = () => {
  const chartState = useSelector((state) => state.chartState);
  if (chartState && chartState.loading) return <Loading />;
  if (chartState && chartState.error) return <Error />;

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
