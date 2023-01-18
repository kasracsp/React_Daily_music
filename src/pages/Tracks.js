import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchTrack from "../redux/tracks/tracksAction";
import MusicBody from "../components/playPage/MusicBody";
import MusicHeader from "../components/playPage/MusicHeader";
import Error from "../shared/Error";
import Loading from "../shared/Loading";

const Tracks = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const tracksState = useSelector((state) => state.tracksState);
  useEffect(() => {
    dispatch(fetchTrack(params.slug));
  }, [params.slug]);

  if (tracksState && tracksState.loading) return <Loading />;
  if (tracksState && tracksState.error) return <Error />;
  return (
    <div className="container xl">
      {Object.keys(tracksState.tracks).length > 0 && (
        <div
          className="music-wraper"
          style={{
            backgroundImage: `url('${tracksState.tracks.album.cover_big}')`,
          }}
        >
          <div className="music-box">
            <MusicHeader
              tracks={[
                {
                  title: `${tracksState.tracks.title}`,
                  duration: `${tracksState.tracks.duration}`,
                  preview: `${tracksState.tracks.preview}`,
                  id: `${params.slug}`,
                  album: {
                    cover_small: `${tracksState.tracks.album.cover_small}`,
                  },
                  artist: { name: `${tracksState.tracks.artist.name}` },
                },
              ]}
              title={tracksState.tracks.title}
              thumbnail={tracksState.tracks.album.cover_big}
              artist={tracksState.tracks.artist.name}
              type={tracksState.tracks.type}
              quantity={1}
              duration={tracksState.tracks.duration}
              id={params.slug}
              category="tracks"
              albumId={tracksState.tracks.album.id}
            />
            <MusicBody
              tracks={[
                {
                  title: `${tracksState.tracks.title}`,
                  duration: `${tracksState.tracks.duration}`,
                  preview: `${tracksState.tracks.preview}`,
                  id: `${params.slug}`,
                  album: {
                    cover_small: `${tracksState.tracks.album.cover_small}`,
                  },
                  artist: { name: `${tracksState.tracks.artist.name}` },
                },
              ]}
              category="tracks"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tracks;
