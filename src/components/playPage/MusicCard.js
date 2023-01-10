import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { playPause, setSongs } from "../../redux/songslist/songsAction";

const MusicCard = ({
  tracks,
  index,
  title,
  artist,
  thumb,
  duration,
  id,
  category,
}) => {
  const params = useParams();
  const songsState = useSelector((state) => state.songsState);
  const dispatch = useDispatch();
  return (
    <div
      className={`music-card ${
        Object.keys(songsState.playlist).length > 0
          ? songsState.playlist[songsState.currentSong].id.toString() ===
            id.toString()
            ? "active"
            : ""
          : ""
      } `}
    >
      <p className="music-index">{index + 1}</p>
      <div className="music-thumb-box">
        <img src={thumb} alt={title} />

        <div className="music-card-btns">
          {Object.keys(songsState.playlist).length > 0 &&
          songsState.playlist[songsState.currentSong].id === id ? (
            songsState.isPlaying ? (
              <button onClick={() => dispatch(playPause(false))}>
                <span className="material-icons">pause</span>
              </button>
            ) : (
              <button onClick={() => dispatch(playPause(true))}>
                <span className="material-icons">play_arrow</span>
              </button>
            )
          ) : (
            <button
              onClick={() =>
                dispatch(
                  setSongs({ tracks, id: params.slug, index, category })
                )
              }
            >
              <span className="material-icons">play_arrow</span>
            </button>
          )}
        </div>
      </div>
      <div className="music-card-details">
        <p className="music-card-title">{title}</p>
        <p className="music-card-artist">{artist}</p>
      </div>
      <p className="music-card-duration">{duration}</p>
    </div>
  );
};

export default MusicCard;
