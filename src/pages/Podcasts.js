import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchPodcast from "../redux/podcasts/podcastsAction";
import MusicHeader from "../components/playPage/MusicHeader";
import Error from "../shared/Error";
import Loading from "../shared/Loading";

const Podcasts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const podcastsState = useSelector((state) => state.podcastsState);
  useEffect(() => {
    dispatch(fetchPodcast(params.slug));
  }, []);

  if (podcastsState && podcastsState.loading) return <Loading />;
  if (podcastsState && podcastsState.error) return <Error />;
  return (
    <div className="container xl">
      {Object.keys(podcastsState.podcasts).length > 0 && (
        <div
          className="music-wraper"
          style={{
            backgroundImage: `url('${podcastsState.podcasts.picture_big}')`,
          }}
        >
          <div className="music-box">
            <MusicHeader
              title={podcastsState.podcasts.title}
              thumbnail={podcastsState.podcasts.picture_big}
              artist={podcastsState.podcasts.description}
              type={podcastsState.podcasts.type}
              id={params.slug}
              link={podcastsState.podcasts.link}
              category="podcasts"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Podcasts;
