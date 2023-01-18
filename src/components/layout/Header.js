import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  fetchSearchList,
  clearSearchList,
} from "../../redux/searchList/searchListAction";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let handler = (event) => {
      if (!searchRef.current.contains(event.target)) {
        setTyping(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (
      event.target.value.trim() === "" ||
      event.target.value.trim() === null
    ) {
      dispatch(clearSearchList());
    } else {
      dispatch(fetchSearchList(event.target.value));
    }
  };
  const handleClear = () => {
    setSearch("");
    dispatch(clearSearchList());
  };

  return (
    <div className="header">
      <div className="container xl">
        <div className="navbar">
          <div className="logo">
            <Link to="/">daily music</Link>
          </div>

          <div className="left-navbar">
            <Link
              to="/"
              className={`nav-item ${location.pathname === "/" && "active"}`}
            >
              <span className="material-icons">home</span>
              <p className="nav-text">home</p>
            </Link>
            <Link
              to="chart/podcasts"
              className={`nav-item ${
                location.pathname === "/chart/podcasts" && "active"
              }`}
            >
              <span className="material-icons">podcasts</span>
              <p className="nav-text">podcasts</p>
            </Link>
            <div className="library">
              <div className="nav-item">
                <div className="start-btn material-icons">headphones</div>
                <p className="nav-text">library</p>
                <span className="material-icons end-icon">expand_more</span>
              </div>
              <ul className="library-items">
                <li className="library-item">
                  <Link
                    to="chart/albums"
                    className={`library-link ${
                      location.pathname === "/chart/albums" && "active"
                    }`}
                  >
                    albums
                  </Link>
                </li>
                <li className="library-item">
                  <Link
                    to="chart/artists"
                    className={`library-link ${
                      location.pathname === "/chart/artists" && "active"
                    }`}
                  >
                    artists
                  </Link>
                </li>
                <li className="library-item">
                  <Link
                    to="chart/playlists"
                    className={`library-link ${
                      location.pathname === "/chart/playlists" && "active"
                    }`}
                  >
                    palylists
                  </Link>
                </li>
                <li className="library-item">
                  <Link
                    to="chart/tracks"
                    className={`library-link ${
                      location.pathname === "/chart/tracks" && "active"
                    }`}
                  >
                    tracks
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-navbar">
            <div
              className={`search-container ${typing && "active"}`}
              ref={searchRef}
            >
              <Link
                to="search"
                className="search-box"
                onClick={() => setTyping(true)}
              >
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={handleSearch}
                />
                {typing && search.length > 0 && (
                  <button
                    onClick={handleClear}
                    className="material-icons erase-btn"
                  >
                    cancel
                  </button>
                )}
                <span className="material-icons search-btn">search</span>
              </Link>
              {typing && (
                <button
                  className="cancel-search"
                  onClick={() => setTyping(false)}
                >
                  cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
