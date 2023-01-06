import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../../helper/functions";
import { playPause, setPlaylist } from "../../redux/playlist/playlistAction";

const MusicHeader = ({
  tracks,
  title,
  thumbnail,
  artist,
  type,
  quantity,
  duration,
  id,
}) => {
  const dispatch = useDispatch();
  const playlistState = useSelector((state) => state.playlistState);
  console.log(id, playlistState.playlistId);
  if (playlistState.playlistId.toString() === id.toString()) {
    console.log("Equal");
  }
  return (
    <div className="music-header">
      <div className="music-thumb">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="music-details">
        <p className="music-type">{type}</p>
        <h1 className="music-title">{title}</h1>
        <h4 className="music-artist">{artist}</h4>
        <p className="music-duration">
          {quantity} {quantity > 1 ? "songs" : "song"} . {setTime(duration)}
        </p>
        {playlistState.playlistId.toString() !== id.toString() ? (
          <button
            onClick={() => dispatch(setPlaylist({ tracks, id, index: 0 }))}
            className="music-play-btn music-btn"
          >
            <span className="material-icons">play_arrow</span>
            <p>play</p>
          </button>
        ) : playlistState.isPlaying ? (
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
        )}
      </div>
    </div>
  );
};

export default MusicHeader;
