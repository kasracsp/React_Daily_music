import axios from "axios";

const fetchTracksRequest = () => {
  return {
    type: "FETCH_TRACKS_REQUSET",
  };
};
const fetchTracksSuccess = (tracks) => {
  return {
    type: "FETCH_TRACKS_SUCCESS",
    payload: tracks,
  };
};
const fetchTracksFailure = (error) => {
  return {
    type: "FETCH_TRACKS_FAILURE",
    payload: error,
  };
};

const fetchTrack = (slug) => {
  return (dispatch) => {
    dispatch(fetchTracksRequest());
    axios
      .get(`track/${slug}`)
      .then((response) => dispatch(fetchTracksSuccess(response.data)))
      .catch((error) => dispatch(fetchTracksFailure(error.message)));
  };
};

export default fetchTrack;
