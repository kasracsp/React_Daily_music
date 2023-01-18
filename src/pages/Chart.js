import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getChoosenCategory } from "../helper/functions";
import Card from "../shared/Card";
import Loading from "../shared/Loading";
import Error from "../shared/Error";

const Chart = () => {
  const params = useParams();
  const chartState = useSelector((state) => state.chartState);
  if (chartState && chartState.loading) return <Loading />;
  if (chartState && chartState.error) return <Error />;
  return (
    <div className="container xl">
      <h2 className="chart-title">{params.slug}</h2>
      {chartState.chart.length > 0 && (
        <div className="chart-grid">
          {params.slug === "albums" &&
            getChoosenCategory(chartState.chart, params.slug).map((item) => (
              <Card
                key={item.id}
                categoryTitle={params.slug}
                image={item.cover_medium}
                title={item.title}
                name={item.artist.name}
                id={item.id}
              />
            ))}
          {params.slug === "artists" &&
            getChoosenCategory(chartState.chart, params.slug).map((item) => (
              <Card
                key={item.id}
                categoryTitle={params.slug}
                image={item.picture_medium}
                title={item.name}
                id={item.id}
              />
            ))}
          {params.slug === "playlists" &&
            getChoosenCategory(chartState.chart, params.slug).map((item) => (
              <Card
                key={item.id}
                categoryTitle={params.slug}
                image={item.picture_medium}
                title={item.title}
                id={item.id}
              />
            ))}
          {params.slug === "podcasts" &&
            getChoosenCategory(chartState.chart, params.slug).map((item) => (
              <Card
                key={item.id}
                categoryTitle={params.slug}
                image={item.picture_medium}
                title={item.title}
                id={item.id}
              />
            ))}
          {params.slug === "tracks" &&
            getChoosenCategory(chartState.chart, params.slug).map((item) => (
              <Card
                key={item.id}
                categoryTitle={params.slug}
                image={item.album.cover_medium}
                title={item.title}
                name={item.artist.name}
                id={item.id}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Chart;
