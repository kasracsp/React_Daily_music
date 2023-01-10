const initialState={
  loading:false,
  podcasts:{},
  error:''
}

const podcastsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PODCASTS_REQUSET":
      return {
        ...state,
        podcasts:{},
        loading: true,
        error:''
      };
    case "FETCH_PODCASTS_SUCCESS":
      return {
        ...state,
        loading: false,
        podcasts:action.payload,
        error: "",
      };
    case "FETCH_PODCASTS_FAILURE":
      return {
        ...state,
        loading: false,
        podcasts:{},
        error: action.payload,
      };

    default:
      return state;
  }
};

export default podcastsReducer;
