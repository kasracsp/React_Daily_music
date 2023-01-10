import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import fetchTrack from '../redux/tracks/tracksAction'

const Tracks = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const tracksState = useSelector((state) => state.tracksState);
  useEffect(() => {
    dispatch(fetchTrack(params.slug));
  }, []);
  console.log(tracksState)

  if (tracksState && tracksState.loading) return <h1>loading...</h1>;
  if (tracksState && tracksState.error) return <h1>{tracksState.error}</h1>;
  return (
    <div className='container xl'>
      {
        // Object.keys(songsState.songs).length>0 &&
        // <div>
        //   <h1>{songsState.songs.title}</h1>
        //   <img style={{width:'200px',aspectRatio:'1'}} src={songsState.songs.album.cover_medium} alt={songsState.songs.title}/>
        //   <audio controls src={songsState.songs.preview}/>
        // </div>
      }
    </div>
  )
}

export default Tracks