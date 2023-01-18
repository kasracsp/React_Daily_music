import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MusicBody from "../components/playPage/MusicBody";
import MusicHeader from "../components/playPage/MusicHeader";
import { calcDuration } from "../helper/functions";
import fetchAlbum from "../redux/albums/albumsAction";
import Error from "../shared/Error";
import Loading from "../shared/Loading";

const Albums = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const albumsState = useSelector((state) => state.albumsState);
  useEffect(() => {
    dispatch(fetchAlbum(params.slug));
  }, [params.slug]);

  if (albumsState && albumsState.loading) return <Loading/> ;
  if (albumsState && albumsState.error) return <Error/>;
  return (
    <div className="container xl">
      {Object.keys(albumsState.albums).length > 0 && (
        <div
          className="music-wraper"
          style={{ backgroundImage: `url('${albumsState.albums.cover_big}')` }}
        >
          <div className="music-box">
            <MusicHeader
              tracks={albumsState.albums.tracks.data}
              title={albumsState.albums.title}
              thumbnail={albumsState.albums.cover_medium}
              artist={albumsState.albums.artist.name}
              type={albumsState.albums.type}
              quantity={albumsState.albums.tracks.data.length}
              duration={calcDuration(albumsState.albums.tracks.data)}
              id={albumsState.albums.id}
              category='albums'
            />
            <MusicBody tracks={albumsState.albums.tracks.data} category='albums'/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Albums;
