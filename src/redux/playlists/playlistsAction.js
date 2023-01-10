import axios from "axios";

const fetchPlaylistsRequest = () => {
  return {
    type: "FETCH_PLAYLISTS_REQUSET",
  };
};
const fetchPlaylistsSuccess = (playlists) => {
  return {
    type: "FETCH_PLAYLISTS_SUCCESS",
    payload: playlists,
  };
};
const fetchPlaylistsFailure = (error) => {
  return {
    type: "FETCH_PLAYLISTS_FAILURE",
    payload: error,
  };
};

const fetchPlaylist = (slug) => {
  return (dispatch) => {
    dispatch(fetchPlaylistsRequest());
    axios
      .get(`https://api.deezer.com/playlist/${slug}`)
      .then((response) => dispatch(fetchPlaylistsSuccess(response.data)))
      .catch((error) => dispatch(fetchPlaylistsFailure(error.message)));
  };
};

export default fetchPlaylist;