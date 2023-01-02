const initialState = {
  loading: false,
  chart: [],
  error: "",
};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CHART_REQUSET":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_CHART_SUCCESS":
      return {
        ...state,
        loading: false,
        chart: [
          {
            title: "albums",
            data: [...action.payload.albums.data],
          },
          {
            title: "artists",
            data: [...action.payload.artists.data],
          },
          {
            title: "playlists",
            data: [...action.payload.playlists.data],
          },
          {
            title: "podcasts",
            data: [...action.payload.podcasts.data],
          },
          {
            title: "tracks",
            data: [...action.payload.tracks.data],
          },
        ],
        error: "",
      };
    case "FETCH_CHART_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default chartReducer;
