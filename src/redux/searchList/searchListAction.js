import axios from "axios";

const fetchSearchListRequest = () => {
  return {
    type: "FETCH_SEARCHLIST_REQUSET",
  };
};
const fetchSearchListSuccess = (list) => {
  return {
    type: "FETCH_SEARCHLIST_SUCCESS",
    payload: list,
  };
};
const fetchSearchListFailure = (error) => {
  return {
    type: "FETCH_SEARCHLIST_FAILURE",
    payload: error,
  };
};
const clearSearchList = () => {
  return {
    type: "CLEAR_SEARCHLIST_FAILURE",
  };
};

const fetchSearchList = (id) => {
  return (dispatch) => {
    dispatch(fetchSearchListRequest());
    axios
      .get(`search?q=${id}`)
      .then((response) => dispatch(fetchSearchListSuccess(response.data.data)))
      .catch((error) => dispatch(fetchSearchListFailure(error.message)));
  };
};

export { fetchSearchList, clearSearchList };
