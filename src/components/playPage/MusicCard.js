import React from "react";

const MusicCard = ({ tracks, index, title, artist, thumb, duration }) => {
  console.log(index, title, artist, thumb, duration);

  return (
    <div className="music-card">
      <p className="music-index">{index}</p>
      <div className="music-thumb-box">
        <img src={thumb} alt={title} />
        <div className="music-card-btns">
          <button>
            <span className="material-icons">play_arrow</span>
          </button>
          {/* <button>
            <span className="material-icons">pause</span>
          </button> */}
        </div>
      </div>
      <div className="music-card-details">
        <p className="music-card-title">{title}</p>
        <p className="music-card-artist">{artist}</p>
      </div>
      <p className="music-card-duration">
        {duration}
      </p>
    </div>
  );
};

export default MusicCard;
