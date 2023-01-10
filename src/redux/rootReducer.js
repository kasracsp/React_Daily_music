import { combineReducers } from "redux";
import chartReducer from "./chart/chartReducer";
import albumsReducer from "./albums/albumsReducer";
import artistsReducer from "./artists/artistsReducer";
import playlistsReducer from "./playlists/playlistsReducer";
import podcastsReducer from "./podcasts/podcastsReducer";
import tracksReducer from "./tracks/tracksReducer";
import songsReducer from "./songslist/songstReducer";

const rootReducer=combineReducers({
  chartState:chartReducer,
  albumsState:albumsReducer,
  artistsState:artistsReducer,
  playlistsState:playlistsReducer,
  podcastsState:podcastsReducer,
  tracksState:tracksReducer,
  songsState:songsReducer,
})

export default rootReducer
