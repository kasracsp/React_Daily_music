import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import fetchPodcast from '../redux/podcasts/podcastsAction'
import MusicHeader from "../components/playPage/MusicHeader";

const Podcasts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const podcastsState = useSelector((state) => state.podcastsState);
  useEffect(() => {
    dispatch(fetchPodcast(params.slug));
  }, []);
  console.log(podcastsState)

  if (podcastsState && podcastsState.loading) return <h1>loading...</h1>;
  if (podcastsState && podcastsState.error) return <h1>{podcastsState.error}</h1>;
  return (
    <div className="container xl">
      {Object.keys(podcastsState.podcasts).length > 0 && (
        <div
          className="music-wraper"
          style={{ backgroundImage: `url('${podcastsState.podcasts.picture_big}')` }}
        >
          <div className="music-box">
            <MusicHeader
              title={podcastsState.podcasts.title}
              thumbnail={podcastsState.podcasts.picture_big}
              artist={podcastsState.podcasts.description}
              type={podcastsState.podcasts.type}
              id={params.slug}
              link={podcastsState.podcasts.link}
              category='podcasts'
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Podcasts