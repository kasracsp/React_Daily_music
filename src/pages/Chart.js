import React from "react";
import { useParams } from "react-router-dom";
import { getChoosenCategory } from "../helper/functions";
import Card from "../shared/Card";
import { chart } from "../assets/chartList";

const Chart = () => {
  const params = useParams();

  return (
    <div className="container xl">
      <h2 className="chart-title">{params.slug}</h2>
      <div className="chart-grid">
        {getChoosenCategory(chart, params.slug).map((item) => (
          <Card
            key={item.id}
            categoryTitle={params.slug}
            image={item.coverMedium}
            title={item.title}
            name={item.artistName}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
