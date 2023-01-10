import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import fetchPlaylist from '../redux/playlists/playlistsAction'

const Playlists = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const playlistsState = useSelector((state) => state.playlistsState);
  useEffect(() => {
    dispatch(fetchPlaylist(params.slug));
  }, []);
  console.log(playlistsState)

  if (playlistsState && playlistsState.loading) return <h1>loading...</h1>;
  if (playlistsState && playlistsState.error) return <h1>{playlistsState.error}</h1>;
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

export default Playlists