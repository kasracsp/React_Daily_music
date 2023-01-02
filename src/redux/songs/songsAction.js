import axios from "axios";

const fetchSongsRequest = () => {
  return {
    type: "FETCH_SONGS_REQUSET",
  };
};
const fetchSongsSuccess = (songs) => {
  return {
    type: "FETCH_SONGS_SUCCESS",
    payload: songs,
  };
};
const fetchSongsFailure = (error) => {
  return {
    type: "FETCH_SONGS_FAILURE",
    payload: error,
  };
};

const fetchAlbum = (slug) => {
  return (dispatch) => {
    dispatch(fetchSongsRequest());
    axios
      .get(`https://api.deezer.com/album/${slug}`)
      .then((response) => dispatch(fetchSongsSuccess(response.data)))
      .catch((error) => dispatch(fetchSongsFailure(error.message)));
  };
};
const fetchArtists = (slug) => {
  return (dispatch) => {
    dispatch(fetchSongsRequest());
    axios
      .get(`https://api.deezer.com/artist/${slug}/top?limit=20`)
      .then((response) => dispatch(fetchSongsSuccess(response.data)))
      .catch((error) => dispatch(fetchSongsFailure(error.message)));
  };
};
const fetchPlaylists = (slug) => {
  return (dispatch) => {
    dispatch(fetchSongsRequest());
    axios
      .get(`https://api.deezer.com/playlist/${slug}`)
      .then((response) => dispatch(fetchSongsSuccess(response.data)))
      .catch((error) => dispatch(fetchSongsFailure(error.message)));
  };
};
const fetchPodcasts = (slug) => {
  return (dispatch) => {
    dispatch(fetchSongsRequest());
    axios
      .get(`https://api.deezer.com/podcast/${slug}`)
      .then((response) => dispatch(fetchSongsSuccess(response.data)))
      .catch((error) => dispatch(fetchSongsFailure(error.message)));
  };
};
const fetchTracks = (slug) => {
  return (dispatch) => {
    dispatch(fetchSongsRequest());
    axios
      .get(`https://api.deezer.com/track/${slug}`)
      .then((response) => dispatch(fetchSongsSuccess(response.data)))
      .catch((error) => dispatch(fetchSongsFailure(error.message)));
  };
};

export { fetchAlbum, fetchArtists, fetchPlaylists, fetchPodcasts, fetchTracks };
