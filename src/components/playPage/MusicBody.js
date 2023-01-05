import React from "react";
import { setSongTime } from "../../helper/functions";
import MusicCard from "./MusicCard";

const MusicBody = ({ tracks }) => {
  // console.log(tracks);
  return (
    <div className="music-body">
      {tracks.map((track, index) => (
        <MusicCard
          key={track.id}
          tracks={tracks}
          index={index + 1}
          title={track.title}
          artist={track.artist.name}
          thumb={track.album.cover_small}
          duration={setSongTime(track.duration)}
        />
      ))}
    </div>
  );
};

export default MusicBody;
