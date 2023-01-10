const initialState={
  loading:false,
  tracks:{},
  error:''
}

const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TRACKS_REQUSET":
      return {
        ...state,
        tracks:{},
        loading: true,
        error:''
      };
    case "FETCH_TRACKS_SUCCESS":
      return {
        ...state,
        loading: false,
        tracks:action.payload,
        error: "",
      };
    case "FETCH_TRACKS_FAILURE":
      return {
        ...state,
        loading: false,
        tracks:{},
        error: action.payload,
      };

    default:
      return state;
  }
};

export default tracksReducer;
