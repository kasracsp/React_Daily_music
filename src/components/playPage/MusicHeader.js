import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../../helper/functions";
import { playPause, setSongs } from "../../redux/songslist/songsAction";

const MusicHeader = ({
  tracks,
  title,
  thumbnail,
  artist,
  type,
  quantity,
  duration,
  id,
  link,
  category,
}) => {
  const dispatch = useDispatch();
  const songsState = useSelector((state) => state.songsState);
  return (
    <div className="music-header">
      <div className="music-thumb">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="music-details">
        <p className="music-type">{type}</p>
        <h1 className="music-title">{title}</h1>
        <h4 className="music-artist">{artist}</h4>
        {category !== "podcasts" && (
          <p className="music-duration">
            {quantity} {quantity > 1 ? "songs" : "song"} . {setTime(duration)}
          </p>
        )}
        {category !== "podcasts" ? (
          songsState.playlistId.toString() !== id.toString() ? (
            <button
              onClick={() =>
                dispatch(setSongs({ tracks, id, index: 0, category }))
              }
              className="music-play-btn music-btn"
            >
              <span className="material-icons">play_arrow</span>
              <p>play</p>
            </button>
          ) : songsState.isPlaying ? (
            <button
              onClick={() => dispatch(playPause(false))}
              className="music-pause-btn music-btn"
            >
              <span className="material-icons">pause</span>
              <p>pause</p>
            </button>
          ) : (
            <button
              onClick={() => dispatch(playPause(true))}
              className="music-play-btn music-btn"
            >
              <span className="material-icons">play_arrow</span>
              <p>play</p>
            </button>
          )
        ) : (
          <a href={link} target="_blank" className="music-link">
            if you want to listen to the podcast click
          </a>
        )}
      </div>
    </div>
  );
};

export default MusicHeader;
