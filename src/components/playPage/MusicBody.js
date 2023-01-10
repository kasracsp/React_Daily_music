import React from "react";
import { setSongTime } from "../../helper/functions";
import MusicCard from "./MusicCard";

const MusicBody = ({ tracks,category }) => {
  // console.log(tracks);
  return (
    <div className="music-body">
      {tracks.map((track, index) => (
        <MusicCard
          key={track.id}
          tracks={tracks}
          index={index}
          title={track.title}
          artist={track.artist.name}
          thumb={track.album.cover_small}
          duration={setSongTime(track.duration)}
          id={track.id}
          category={category}
        />
      ))}
    </div>
  );
};

export default MusicBody;
