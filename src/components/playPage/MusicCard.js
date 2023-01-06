import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { playPause, setPlaylist } from "../../redux/playlist/playlistAction";

const MusicCard = ({ tracks, index, title, artist, thumb, duration, id }) => {
  // console.log(index, title, artist, thumb, duration);
  const params=useParams()
  const playlistState = useSelector((state) => state.playlistState);
  const dispatch = useDispatch();
  return (
    <div
      className={`music-card ${
        Object.keys(playlistState.playlist).length > 0
          ? playlistState.playlist[playlistState.currentSong].id.toString()=== id.toString()
            ? "active"
            : ""
          : ""
      } `}
    >
      <p className="music-index">{index + 1}</p>
      <div className="music-thumb-box">
        <img src={thumb} alt={title} />
        {
          Object.keys(playlistState.playlist).length > 0
          &&
        <div className="music-card-btns">
          {playlistState.playlist[playlistState.currentSong].id === id ? (
            playlistState.isPlaying ? (
              <button onClick={()=>dispatch(playPause(false))}>
                <span className="material-icons">pause</span>
              </button>
            ) : (
              <button onClick={()=>dispatch(playPause(true))}>
                <span className="material-icons">play_arrow</span>
              </button>
            )
          ) : (
            <button onClick={() => dispatch(setPlaylist({ tracks, id:params.slug, index }))}>
              <span className="material-icons">play_arrow</span>
            </button>
          )}
        </div>
      }
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
