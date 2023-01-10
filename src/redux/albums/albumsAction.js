import axios from "axios";

const fetchAlbumsRequest = () => {
  return {
    type: "FETCH_ALBUMS_REQUSET",
  };
};
const fetchAlbumsSuccess = (albums) => {
  return {
    type: "FETCH_ALBUMS_SUCCESS",
    payload: albums,
  };
};
const fetchAlbumsFailure = (error) => {
  return {
    type: "FETCH_ALBUMS_FAILURE",
    payload: error,
  };
};

const fetchAlbum = (slug) => {
  return (dispatch) => {
    dispatch(fetchAlbumsRequest());
    axios
      .get(`https://api.deezer.com/album/${slug}`)
      .then((response) => dispatch(fetchAlbumsSuccess(response.data)))
      .catch((error) => dispatch(fetchAlbumsFailure(error.message)));
  };
};

export default fetchAlbum;
