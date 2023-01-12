import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import fetchArtist from "../redux/artists/artistssAction"
import MusicBody from "../components/playPage/MusicBody";
import MusicHeader from "../components/playPage/MusicHeader";
import { calcDuration } from "../helper/functions";

const Artists = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const artistsState = useSelector((state) => state.artistsState);
  useEffect(() => {
    dispatch(fetchArtist(params.slug));
  }, [params.slug]);

  if (artistsState && artistsState.loading) return <h1>loading...</h1>;
  if (artistsState && artistsState.error) return <h1>{artistsState.error}</h1>;
  return (
    <div className="container xl">
      {Object.keys(artistsState.artists).length > 0 && (
        <div
          className="music-wraper"
          style={{ backgroundImage: `url('${artistsState.artists.data[0].contributors[0].picture_big}')` }}
        >
          <div className="music-box">
            <MusicHeader
              tracks={artistsState.artists.data}
              title='the best of'
              thumbnail={artistsState.artists.data[0].contributors[0].picture_big}
              artist={artistsState.artists.data[0].contributors[0].name}
              type={artistsState.artists.data[0].contributors[0].type}
              quantity={artistsState.artists.data.length}
              duration={calcDuration(artistsState.artists.data)}
              id={params.slug}
              category='artists'
            />
            <MusicBody tracks={artistsState.artists.data} category='artists'/>
          </div>
        </div>
      )}
    </div>
  )
}

export default Artists