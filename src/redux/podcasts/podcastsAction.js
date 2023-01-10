import axios from "axios";

const fetchPodcastsRequest = () => {
  return {
    type: "FETCH_PODCASTS_REQUSET",
  };
};
const fetchPodcastsSuccess = (podcasts) => {
  return {
    type: "FETCH_PODCASTS_SUCCESS",
    payload: podcasts,
  };
};
const fetchPodcastsFailure = (error) => {
  return {
    type: "FETCH_PODCASTS_FAILURE",
    payload: error,
  };
};

const fetchPodcast = (slug) => {
  return (dispatch) => {
    dispatch(fetchPodcastsRequest());
    axios
      .get(`https://api.deezer.com/podcast/${slug}`)
      .then((response) => dispatch(fetchPodcastsSuccess(response.data)))
      .catch((error) => dispatch(fetchPodcastsFailure(error.message)));
  };
};

export default fetchPodcast;
