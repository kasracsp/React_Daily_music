import React from "react";
import { useDispatch } from "react-redux";
import { setTime } from "../../helper/functions";
import { setPlaylist } from "../../redux/playlist/playlistAction";

const MusicHeader = ({
  tracks,
  title,
  thumbnail,
  artist,
  type,
  quantity,
  duration,
}) => {
  const dispatch=useDispatch()

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
        <button onClick={()=>dispatch(setPlaylist(tracks))} className="music-play-btn music-btn">
          <span className="material-icons">play_arrow</span>
          <p>play</p>
        </button>
        <button onClick={()=>console.log('pause')} className="music-pause-btn music-btn">
          <span className="material-icons">pause</span>
          <p>pause</p>
        </button>
      </div>
    </div>
  );
};

export default MusicHeader;
