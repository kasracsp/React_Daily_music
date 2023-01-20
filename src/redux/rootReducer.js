import { combineReducers } from "redux";
import albumsReducer from "./albums/albumsReducer";
import playlistsReducer from "./playlists/playlistsReducer";
import tracksReducer from "./tracks/tracksReducer";
import songsReducer from "./songslist/songstReducer";
import searchListReducer from "./searchList/searchListReducer";

const rootReducer = combineReducers({
  albumsState: albumsReducer,
  playlistsState: playlistsReducer,
  tracksState: tracksReducer,
  songsState: songsReducer,
  searchListState: searchListReducer,
});

export default rootReducer;
