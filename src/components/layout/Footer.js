import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calcShuffleNumber } from "../../helper/functions";
import {
  autoEnded,
  clearSongs,
  playPause,
} from "../../redux/songslist/songsAction";

const Footer = () => {
  const [muted, setMuted] = useState(false);
  const [repeatAll, setRepeatAll] = useState(false);
  const [repeatOne, setRepeatOne] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const dispatch = useDispatch();
  const audioRef = useRef();
  const songsState = useSelector((state) => state.songsState);
  const [currentTime, setCurrentTime] = useState(0);
  const [maxTime, setMaxTime] = useState(30);
  const handleTimeUpdate = (event) => {
    setCurrentTime(Math.ceil(event.target.currentTime));
  };
  const handleRange = (event) => {
    setCurrentTime(event.target.value);
    audioRef.current.currentTime = event.target.value;
  };
  const handleEnd = () => {
    if (repeatOne) {
      dispatch(autoEnded(songsState.currentSong));
      return;
    }
    if (repeatAll) {
      if (shuffled) {
        dispatch(autoEnded(calcShuffleNumber(songsState.playlist.length)));
      } else if (
        songsState.currentSong + 1 >
        songsState.playlist.length - 1
      ) {
        dispatch(autoEnded(0));
      } else {
        dispatch(autoEnded(songsState.currentSong + 1));
      }
    } else if (
      songsState.currentSong + 1 <=
      songsState.playlist.length - 1
    ) {
      if (shuffled) {
        dispatch(autoEnded(calcShuffleNumber(songsState.playlist.length)));
      } else {
        dispatch(autoEnded(songsState.currentSong + 1));
      }
    } else {
      dispatch(playPause(false));
      dispatch(autoEnded(0));
    }
  };

  const handlePrevious = () => {
    if (shuffled) {
      dispatch(autoEnded(calcShuffleNumber(songsState.playlist.length)));
      return;
    }
    if (songsState.currentSong > 0) {
      dispatch(autoEnded(songsState.currentSong - 1));
    } else {
      dispatch(autoEnded(songsState.playlist.length - 1));
    }
  };
  const handleNext = () => {
    if (shuffled) {
      dispatch(autoEnded(calcShuffleNumber(songsState.playlist.length)));
      return;
    }
    if (songsState.currentSong + 1 <= songsState.playlist.length - 1) {
      dispatch(autoEnded(songsState.currentSong + 1));
    } else {
      dispatch(autoEnded(0));
    }
  };

  useEffect(() => {
    if (songsState.isActive && songsState.isPlaying) {
      audioRef.current.play();
    } else if (songsState.isActive && !songsState.isPlaying) {
      audioRef.current.pause();
    }
  }, [songsState]);

  useEffect(() => {
    if (
      songsState.isPlaying &&
      songsState.isPlaying &&
      audioRef.current &&
      audioRef.current.duration != null &&
      audioRef.current.duration != NaN
    ) {
      setTimeout(() => {
        setMaxTime(Number(Math.ceil(audioRef.current.duration)));
      }, 2000);
    }
  }, [songsState]);

  return (
    songsState.isActive && (
      <div className="footer">
        <audio
          className="footer-audio"
          ref={audioRef}
          src={songsState.playlist[songsState.currentSong].preview}
          controls
          autoPlay={songsState.isPlaying}
          onEnded={handleEnd}
          muted={muted}
          onTimeUpdate={handleTimeUpdate}
          volume="1"
        >
          it's not available
        </audio>
        <input
          className="footer-range"
          type="range"
          min="0"
          max={maxTime}
          step="1"
          value={currentTime}
          onChange={handleRange}
        />
        {Object.keys(songsState.playlist).length > 0 && (
          <Link to={`/${songsState.category}/${songsState.playlistId}`} className="footer-song-details">
            <div className="footer-thumb-box">
              <img
                src={
                  songsState.playlist[songsState.currentSong].album
                    .cover_small
                }
                alt={songsState.playlist[songsState.currentSong].title}
              />
            </div>
            <div className="footer-card-details">
              <p className="footer-card-title">
                {songsState.playlist[songsState.currentSong].title}
              </p>
              <p className="footer-card-artist">
                {songsState.playlist[songsState.currentSong].artist.name}
              </p>
            </div>
          </Link>
        )}
        <div className="footer-btns">
          <button
            className={`material-icons ${repeatOne && "active"}`}
            title="Repeat This Song"
            onClick={() => setRepeatOne(!repeatOne)}
          >
            repeat_one
          </button>
          <button
            className={`material-icons ${repeatAll && "active"}`}
            title="Repeat All"
            onClick={() => setRepeatAll(!repeatAll)}
          >
            repeat
          </button>
          <button
            className="material-icons footer-pre-next"
            title="Previous"
            onClick={handlePrevious}
          >
            skip_previous
          </button>
          {songsState.isPlaying ? (
            <button
              onClick={() => dispatch(playPause(false))}
              className="footer-playPause material-icons"
              title="Stop"
            >
              pause
            </button>
          ) : (
            <button
              onClick={() => dispatch(playPause(true))}
              className="footer-playPause material-icons"
              title="Play"
            >
              play_arrow
            </button>
          )}
          <button
            className="material-icons footer-pre-next"
            title="Next"
            onClick={handleNext}
          >
            skip_next
          </button>
          <button
            className={`material-icons ${shuffled && "active"}`}
            title={shuffled ? "Shuffle Off" : "Shuffle On"}
            onClick={() => setShuffled(!shuffled)}
          >
            shuffle
          </button>
          {muted ? (
            <button
              className="material-icons"
              onClick={() => setMuted(false)}
              title="Mute Off"
            >
              volume_off
            </button>
          ) : (
            <button
              className="material-icons"
              onClick={() => setMuted(true)}
              title="Mute On"
            >
              volume_up
            </button>
          )}
        </div>
        <button
          className="close material-icons"
          onClick={() => dispatch(clearSongs())}
        >
          close
        </button>
      </div>
    )
  );
};

export default Footer;
