import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../shared/Error";
import Loading from "../shared/Loading";

const Search = () => {
  const searchListState = useSelector((state) => state.searchListState);

  if (searchListState && searchListState.loading) return <Loading />;
  if (searchListState && searchListState.error) return <Error />;
  return (
    <div className="container xl">
      {searchListState.searchList.length > 0 ? (
        <div className="search-wrapper">
          <h2 className="search-subject">Suggestions</h2>
          <div className="search-container">
            {searchListState.searchList.map((item) => (
              <Link
                to={`/tracks/${item.id}`}
                key={item.id}
                className="search-link"
              >
                {item.title} by {item.artist.name}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="search-wrapper">
          <h2 className="search-subject">Listen Your Way</h2>
          <div className="search-category">
            <Link to="/chart/albums" className="search-category-link">
              albums
            </Link>
            <Link to="/chart/artists" className="search-category-link">
              artists
            </Link>
            <Link to="/chart/playlists" className="search-category-link">
              playlists
            </Link>
            <Link to="/chart/podcasts" className="search-category-link">
              podcasts
            </Link>
            <Link to="/chart/tracks" className="search-category-link">
              tracks
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
