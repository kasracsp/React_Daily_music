import axios from "axios";

const fetchArtistsRequest = () => {
  return {
    type: "FETCH_ARTISTS_REQUSET",
  };
};
const fetchArtistsSuccess = (artists) => {
  return {
    type: "FETCH_ARTISTS_SUCCESS",
    payload: artists,
  };
};
const fetchArtistsFailure = (error) => {
  return {
    type: "FETCH_ARTISTS_FAILURE",
    payload: error,
  };
};

const fetchArtist = (slug) => {
  return (dispatch) => {
    dispatch(fetchArtistsRequest());
    axios
      .get(`https://api.deezer.com/artist/${slug}/top?limit=50`)
      .then((response) => dispatch(fetchArtistsSuccess(response.data)))
      .catch((error) => dispatch(fetchArtistsFailure(error.message)));
  };
};

export default fetchArtist;
