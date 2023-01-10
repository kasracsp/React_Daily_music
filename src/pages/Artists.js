import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import fetchArtist from "../redux/artists/artistssAction"

const Artists = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const artistsState = useSelector((state) => state.artistsState);
  useEffect(() => {
    dispatch(fetchArtist(params.slug));
  }, []);
  console.log(artistsState)

  if (artistsState && artistsState.loading) return <h1>loading...</h1>;
  if (artistsState && artistsState.error) return <h1>{artistsState.error}</h1>;
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

export default Artists