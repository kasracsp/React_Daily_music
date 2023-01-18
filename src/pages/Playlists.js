import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchPlaylist from "../redux/playlists/playlistsAction";
import MusicBody from "../components/playPage/MusicBody";
import MusicHeader from "../components/playPage/MusicHeader";
import { calcDuration } from "../helper/functions";
import Error from "../shared/Error";
import Loading from "../shared/Loading";

const Playlists = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const playlistsState = useSelector((state) => state.playlistsState);
  useEffect(() => {
    dispatch(fetchPlaylist(params.slug));
  }, [params.slug]);

  if (playlistsState && playlistsState.loading) return <Loading />;
  if (playlistsState && playlistsState.error) return <Error />;
  return (
    <div className="container xl">
      {Object.keys(playlistsState.playlists).length > 0 && (
        <div
          className="music-wraper"
          style={{
            backgroundImage: `url('${playlistsState.playlists.picture_big}')`,
          }}
        >
          <div className="music-box">
            <MusicHeader
              tracks={playlistsState.playlists.tracks.data}
              title={playlistsState.playlists.title}
              thumbnail={playlistsState.playlists.picture_big}
              artist={playlistsState.playlists.creator.name}
              type={playlistsState.playlists.type}
              quantity={playlistsState.playlists.tracks.data.length}
              duration={calcDuration(playlistsState.playlists.tracks.data)}
              id={params.slug}
              category="playlists"
            />
            <MusicBody
              tracks={playlistsState.playlists.tracks.data}
              category="playlists"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Playlists;
