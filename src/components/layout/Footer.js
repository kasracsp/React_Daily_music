import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcShuffleNumber } from "../../helper/functions";
import { autoEnded, playPause } from "../../redux/playlist/playlistAction";

const Footer = () => {
  const dispatch = useDispatch();
  const audioRef = useRef();
  const playlistState = useSelector((state) => state.playlistState);
  const handleEnd = () => {
    if (playlistState.repeatOne) {
      dispatch(autoEnded(playlistState.currentSong));
      return;
    }
    if (playlistState.repeat) {
      if (playlistState.shuffle) {
        dispatch(autoEnded(calcShuffleNumber(playlistState.playlist.length)));
      } else if (
        playlistState.currentSong + 1 >
        playlistState.playlist.length - 1
      ) {
        dispatch(autoEnded(0));
      } else {
        dispatch(autoEnded(playlistState.currentSong + 1));
      }
    } else if (
      playlistState.currentSong + 1 <=
      playlistState.playlist.length - 1
      ) {
        if (playlistState.shuffle) {
        dispatch(autoEnded(calcShuffleNumber(playlistState.playlist.length)));
      }else {
        dispatch(autoEnded(playlistState.currentSong + 1));
      }
    }else{
      dispatch(playPause(false))
      dispatch(autoEnded(0));
    }
  };
  // console.log(playlistState);

  useEffect(() => {
    if (playlistState.isActive && playlistState.isPlaying) {
      audioRef.current.play();
    } else if (playlistState.isActive && !playlistState.isPlaying) {
      audioRef.current.pause();
    }
  }, [playlistState]);

  return (
    <div>
      {playlistState.isActive && (
        <audio
          ref={audioRef}
          src={playlistState.playlist[playlistState.currentSong].preview}
          controls
          autoPlay={playlistState.isPlaying}
          onEnded={handleEnd}
          volume={playlistState.volume}
        >
          it's not available
        </audio>
      )}
    </div>
  );
};

export default Footer;
