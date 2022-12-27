import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  console.log(location.pathname);
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
              className={`nav-item ${
                location.pathname === "/podcasts" && "active"
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
                    to="albums"
                    className={`library-link ${
                      location.pathname === "/albums" && "active"
                    }`}
                  >
                    albums
                  </Link>
                </li>
                <li className="library-item">
                  <Link
                    className={`library-link ${
                      location.pathname === "/artists" && "active"
                    }`}
                  >
                    artists
                  </Link>
                </li>
                <li className="library-item">
                  <Link
                    className={`library-link ${
                      location.pathname === "/playlists" && "active"
                    }`}
                  >
                    palylists
                  </Link>
                </li>
                <li className="library-item">
                  <Link
                    className={`library-link ${
                      location.pathname === "/tracks" && "active"
                    }`}
                  >
                    tracks
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-navbar">
            {/* <Link className="signin">
            <span className="material-icons">account_circle</span>
            <p className="nav-text">sign in</p>
          </Link> */}
            hello
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
