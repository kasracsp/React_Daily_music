import axios from "axios";

const fetchChartRequest = () => {
  return {
    type: "FETCH_CHART_REQUSET",
  };
};
const fetchChartSuccess = (chart) => {
  return {
    type: "FETCH_CHART_SUCCESS",
    payload: chart,
  };
};
const fetchChartFailure = (error) => {
  return {
    type: "FETCH_CHART_FAILURE",
    payload: error,
  };
};

const fetchChart = () => {
  return (dispatch) => {
    dispatch(fetchChartRequest());
    axios
      .get("https://api.deezer.com/chart")
      .then((response) => dispatch(fetchChartSuccess(response.data)))
      .catch((error) => dispatch(fetchChartFailure(error.message)));
  };
};

export default fetchChart;
