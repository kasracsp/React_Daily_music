import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import fetchPodcast from '../redux/podcasts/podcastsAction'

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
    <div className='container xl'>
      {
        // Object.keys(songsState.songs).length>0 &&
        <div>
          {/* <h1>{songsState.songs.title}</h1>
          <img style={{width:'200px',aspectRatio:'1'}} src={songsState.songs.cover_medium} alt={songsState.songs.title}/>
          <audio controls src={songsState.songs.tracks.data[0].preview}/> */}
        </div>
      }
    </div>
  )
}

export default Podcasts