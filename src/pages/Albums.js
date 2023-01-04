import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MusicBody from "../components/playPage/MusicBody";
import MusicHeader from "../components/playPage/MusicHeader";
import { calcDuration } from "../helper/functions";
import { fetchAlbum } from "../redux/songs/songsAction";

const Albums = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const songsState = useSelector((state) => state.songsState);
  console.log(songsState);
  useEffect(() => {
    dispatch(fetchAlbum(params.slug));
  }, []);

  if (songsState && songsState.loading) return <h1>loading...</h1>;
  if (songsState && songsState.error) return <h1>{songsState.error}</h1>;
  return (
    <div className="container xl">
      {Object.keys(songsState.songs).length > 0 && (
        <div
          className="music-wraper"
          style={{ backgroundImage: `url('${songsState.songs.cover_big}')` }}
        >
          <div className="music-box">
            <MusicHeader
              title={songsState.songs.title}
              thumbnail={songsState.songs.cover_medium}
              artist={songsState.songs.artist.name}
              type={songsState.songs.type}
              quantity={songsState.songs.tracks.data.length}
              duration={calcDuration(songsState.songs.tracks.data)}
            />
            <MusicBody />
          </div>
        </div>
      )}
    </div>
  );
};

export default Albums;
